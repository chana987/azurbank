import { heIL } from '@mui/material/locale';
import {
	createTheme,
	PaletteColorOptions,
	PaletteColor,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }

  interface Palette {
    neutral: PaletteColor;
  }
}

declare module '@mui/material/Paper' {
	interface PaperPropsVariantOverrides {
		main: true;
	}
}

export const theme = createTheme({
	direction: 'rtl',
	palette: {
		primary: {
			main: '#FF5B00',
			dark: '#B54202',
			light: '#FC8B4C',
		},
		secondary: {
			main: '#D4D925',
			dark: '888C01',
			light: '#F1F573',
		},
		text: {
			primary: '#1E1729',
		},
		grey: {
			50: '#F3F5F7',
			100: '#E7EBEE',
			200: '#DBE0E6',
			300: '#C3CCD5',
			400: '#9FADBC',
			500: '#8799AB',
			600: '#6F859B',
			700: '#647A90',
			800: '#4B5C6C',
			900: '#2A333C',
		},
	},
	typography: () => ({
		fontFamily: ['Rubik', 'sans-serif'].join(),
		h1: {
			fontSize: '2.5rem',
			fontWeight: 700,
		},
	}),
	components: {
		MuiDivider: {
			styleOverrides: {
				root: ({ theme }) => ({
					backgroundColor: theme.palette.primary.main,
					margin: '2rem 0',
					height: '2px',
				}),
			},
		},
		MuiInput: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.grey[50],
					'&::before': {
						borderBottom: `1px solid ${theme.palette.grey[50]}`,
					},
					'&:hover:not(.Mui-disabled):before': {
						borderBottom: `2px solid ${theme.palette.grey[50]}`,
					},
					'&.Mui-focused:after': {
						borderBottom: `2px solid ${theme.palette.secondary.main}`,
					},
				}),
			},
		},
		MuiPaper: {
			variants: [
				{
					props: { variant: 'main' },
					style: {
						padding: '3rem',
					},
				},
			],
			styleOverrides: {
				root: {
					elevation: 0,
					boxShadow: 'none',
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: ({ theme }) => ({
					textAlign: 'start',
					'&.MuiTableCell-head': {
						backgroundColor: theme.palette.secondary.main,
					},
				}),
			},
		},
		MuiTableRow: {
			styleOverrides: {
				root: ({ theme }) => ({
					'&:not(.MuiTableRow-head)': {
						'& > *': {
							borderBottom: `1px solid ${theme.palette.secondary.main}`,
							borderTop: 'none',
						},
					},
				}),
			},
		},
	},
},
heIL,
);
