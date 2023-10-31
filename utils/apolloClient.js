import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = process.env.GITHUB_TOKEN;
    console.log(token);
    return {
      headers: {
        ...headers,
        authorization: `Bearer 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`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  
  export default client;




