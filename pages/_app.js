import "@styles/globals.css";
import store from "@redux/store";
import { Provider } from "react-redux";
import { LoaderProvider } from "@contexts/LoaderContext";
import { ErrorProvider } from "@contexts/ErrorContext";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LoaderProvider>
        <ErrorProvider>
          <Component {...pageProps} />
        </ErrorProvider>
      </LoaderProvider>
    </Provider>
  );
}

export default MyApp;
