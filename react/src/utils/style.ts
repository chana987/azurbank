import { heIL } from '@mui/material/locale';
import {
	createTheme,
	PaletteColorOptions,
	PaletteColor,
} from '@mui/material/styles';
import { Paper } from '@mui/material';

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
				root: ({ theme }: any) => ({
					backgroundColor: theme.palette.primary.main,
					margin: '2rem 0',
					height: '2px',
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
				root: ({ theme }: any) => ({
					elevation: 0,
					boxShadow: 'none',
				}),
			},
		},
		MuiTable: {
			styleOverrides: {
				root: ({ theme }: any) => ({
					
				}),
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: ({ theme }: any) => ({
					textAlign: 'start',
					'&.MuiTableCell-head': {
						backgroundColor: theme.palette.secondary.main,
					},
				}),
			},
		},
		MuiTableContainer: {
			styleOverrides: {
				root: ({ theme }: any) => ({
				}),
			},
		},
		MuiTableRow: {
			styleOverrides: {
				root: ({ theme }: any) => ({
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
