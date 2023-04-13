export const saveJwt = (jwt: string) => {
	sessionStorage.setItem('token', `Bearer ${jwt}`);
};
export const removeJwt = () => {
	sessionStorage.removeItem('token');
};

export const getJwt = () => {
	return sessionStorage.getItem('token');
};

// export interface UserData { }
// export const saveUserData = (userData: UserData) => { };
// export const removeUserData = () => { };
// export const getUserData = () => { };
