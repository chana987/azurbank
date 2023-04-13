import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { menuItems } from 'utils/constants';
// import { UsersContext } from 'context/users';
// import Avatar from '@mui/material/Avatar';
// import Input from '@mui/material/Input';
// import SearchIcon from '@mui/icons-material/Search';

const Appbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	// const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
	// const [searchText, setSearchText] = React.useState<string>('');

	// const { user } = React.useContext(UsersContext);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	// const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
	// 	setAnchorElUser(event.currentTarget);
	// };

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	// const handleCloseUserMenu = () => {
	// 	setAnchorElUser(null);
	// };

	// const handleSearch = (event) => {
	// 	if (event.keyCode === 13) {
	// 		setSearchText('');
	// 	}
	// };

	const handleSelectMenuItem = () => {
		handleCloseNavMenu();
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar>
					<AccountBalanceIcon sx={{ mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontWeight: 700,
							letterSpacing: '.2rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
            עזורבנק
					</Typography>

					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
            עזורבנק
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					</Box>
					{/* <Box>
						<Grid container>
							<Box sx={{ paddingTop: '.5rem', paddingLeft: '.5rem' }}>
								<SearchIcon />
							</Box>
							<Input
								placeholder="חיפוש..."
								inputProps={{ 'aria-label': 'search' }}
								value={searchText}
								onChange={(e) => setSearchText(e.target.value)}
								onKeyUp={(e) => handleSearch(e)}
							/>
						</Grid>
					</Box> */}
					{/* <Box sx={{ flexGrow: 0, paddingRight: '.5rem' }}>
						<Tooltip title="הגדרות">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt={user?.username || 'אורח'} src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem onClick={handleCloseUserMenu}>
								<Typography textAlign="center">tree</Typography>
							</MenuItem>
						</Menu>
					</Box> */}
					<Box sx={{ flexGrow: 0, paddingRight: '.5rem' }}>
						<Tooltip title="תפריט">
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
						</Tooltip>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
						>
							{menuItems.map((item, i) => 
								<MenuItem key={i} onClick={handleSelectMenuItem}>
									<Link
										href={item.path}
										underline='none'
										width='100%'
										target={item.target || '_self'}>
										<Grid container justifyContent='space-between'>
											<Grid item>{item.name}</Grid>
											<Grid item width="10px"></Grid>
											<Grid item>{item.icon && <item.icon />}</Grid>
										</Grid>
									</Link>
								</MenuItem>,
							)}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Appbar;

// TODO:
// 1. Add search bar
// 2. Add user menu
// 3. Add user avatar