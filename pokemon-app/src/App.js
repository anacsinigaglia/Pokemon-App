import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'; //{ } significa que só vou chamar pelo seu nome
import { PokemonsContainer } from './containers/PokemonsContainer';

function App() {
  const client = new ApolloClient({ //instanciei ApolloClient na variável client
    uri: 'https://graphql-pokemon.sh' //pra onde quero fazer a requisição
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
