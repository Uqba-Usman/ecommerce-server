// startTime: moment(b.startTime).format("DD/MM/YYYY HH:mm"),
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
// import NProgress from "nprogress";
import Router from "next/router";
// Router.events.on("routeChangeStart", (url) => {
//   console.log(`Loading: ${url}`);
//   NProgress.start();
// });
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="INSPIRO" />
        <meta
          name="description"
          content="Themeforest Template Polo, html template"
        />

        <meta
          name="google-signin-client_id"
          content="880987390955-7v838m7r1gj8fna0r06mh57m4r34cv59.apps.googleusercontent.com"
        />
        <link rel="icon" type="image/png" href="/polo/images/favicon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link href="/polo/css/plugins.css" rel="stylesheet" />
        <link href="/polo/css/style.css" rel="stylesheet" />
        <link href="/polo/css/custom.css" rel="stylesheet" />
        <link href="/polo/css/theme.css" rel="stylesheet" />

        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>

        <title>Store</title>
      </Head>

      <Component {...pageProps} />

      <script src="/polo/js/jquery.js"></script>
      <script src="/polo/js/plugins.js"></script>

      <script src="/polo/js/functions.js"></script>
      <script src="/polo/plugins/popper/popper.min.js"></script>
      {/* <script src="https://apis.google.com/js/platform.js" async defer></script> */}
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
