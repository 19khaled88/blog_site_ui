import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";


//We do handle "RSC" and "SSR" use cases as completely separate.
//You should generally try not to have overlapping queries between the two, 
//as all queries made in SSR can dynamically update in the browser as the 
//cache updates (e.g. from a mutation or another query), but queries made 
//in RSC will not be updated in the browser - for that purpose, the full 
//page would need to rerender. As a result, any overlapping data would result in inconsistencies in your UI.
//So decide for yourself, which queries you want to make in RSC and which in SSR, and don't have them overlap.


export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: "https://blog-site-demo-server.vercel.app/api/graphql",
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  });
});