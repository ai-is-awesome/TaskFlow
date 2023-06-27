import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import { ChakraProvider, theme } from "@chakra-ui/react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
