import '../styles/globals.css';
import {ThemeProvider,CssBaseline} from "@mui/material";
import theme from "../theme/theme";
import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
