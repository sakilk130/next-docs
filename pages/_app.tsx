import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
