import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Navbar } from "@/components/header/Navbar";

import { Footer } from "./footer/Footer";

declare module "@mui/material/styles" {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface BreakpointOverrides {
		"2xl": true;
	}
}

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			"2xl": 1536,
		},
	},
	palette: {
		primary: {
			main: "#F8485E",
		},
	},
});

export function Layout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<div className="flex min-h-screen flex-col justify-between">
				<Navbar />

				<main id="#">{children}</main>

				<Footer />
			</div>
		</ThemeProvider>
	);
}
