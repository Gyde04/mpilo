import React, { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { AppContext, ContextProvider } from "@/utils/AppContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "../app/globals.css";

function App({ Component, pageProps }: AppProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NextUIProvider>
      <ContextProvider>
        <AppContext.Provider value={{ isNavOpen }}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>mpilo</title>
            {/* <meta property="og:title" content="" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="" />
            <meta property="og:image" content="/bookmark.jpg" />
            <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
            <link rel="icon" href="/icon.svg" type="image/x-icon" /> */}
          </Head>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </AppContext.Provider>
      </ContextProvider>
    </NextUIProvider>
  );
}

export default App;
