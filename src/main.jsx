import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import { ChakraProvider, theme } from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

console.log("hello from here");
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const client = new ApolloClient({
  uri: "http://localhost:3001/",
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query getData {
//         boards {
//           _id
//           name
//         }
//       }
//     `,
//   })
//   .then((result) => console.log("results: ", result))
//   .catch((err) => console.log(err));

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
