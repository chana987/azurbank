import { LOGIN } from 'graphql/mutations';
import React, { createContext, useState } from 'react';
import { AuthContextState, AuthStatus, LoginDetails, LoginResult, IUser } from 'utils/types';
import client from 'utils/apollo';
import { useLazyQuery, useMutation } from '@apollo/client';
import { USER } from 'graphql/queries';
import { getJwt, removeJwt, saveJwt } from 'utils/localStorage';

export const AuthContext = createContext({} as AuthContextState);

export const AuthProvider = ({ children }: { children: React.ReactElement }) => {
	const userJWT = getJwt();
	const [getMe, { data: meData, loading: meLoading }] = useLazyQuery(USER,
		{
			context: {
				headers: {
					authorization: userJWT,
				},
			},
		});
	const [loginMutation] = useMutation(LOGIN, { refetchQueries: [{ query: LOGIN }] });
	const [userData, setUserData] = useState({} as IUser);
	const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.SignedOut);
	const [loginDetails, setLoginDetails] = useState<LoginDetails>({ identifier: '', password: '' } as LoginDetails);

	const updateLoginDetails = (i: Partial<LoginDetails>) => setLoginDetails(() => ({ ...loginDetails, ...i }));

	const login = async (): Promise<LoginResult> => {
		try {
			const response = await loginMutation({
				variables: {
					'input': {
						'identifier': loginDetails.identifier,
						'password': loginDetails.password,
						'provider': 'local',
					},
				},
			});
			if (response?.data?.login) {
				setAuthStatus(AuthStatus.SignedIn);
				const jwt = response.data.login.jwt;
				const id = response.data.login.user.id;
				setUserData({ ...userData, id });

				saveJwt(jwt);
				await getMe();

				return { success: true, message: '' };
			} else {
				return { success: false, message: 'שגיאת מערכת' };
			}
		} catch (error) {
			return { success: false, message: 'אחד מפרטי ההתחברות שגויים' } as LoginResult;
		}
	};

	const logout = () => {
		removeJwt();
		setAuthStatus(AuthStatus.SignedOut);
	};

	const iState = {
		// authStatus,
		// getMe,
		// meLoading,
		// loginDetails,
		// login,
		// logout,
		// updateLoginDetails,
		// userData,
	} as AuthContextState;

	return (
		<AuthContext.Provider value={iState}>{children}</AuthContext.Provider>
	);
};
