//quero fazer um loop dos meus pokemons aqui

import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";

export function PokemonsContainer() {
  //podemos retornar os dados e os erros tb através do graphQL
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    //data contem um array de pokemons, cujo valor default é vazio
    variables: { first: 9 }, //ao realizarmos uma query, o resultado voltará no array "pokemons"
  });

  return (
    <div className="pokemons">
      {pokemons && pokemons.map((pokemon) => JSON.stringify(pokemon))} {/* se "pokemon" existe, faz isso */}
      {/* é a mesma coisa que: 
        if(pokemons) {
            pokemons.map(function(pokemon) {
                JSON.stringify(pokemon)
            }) */}
    </div>
  );
}
