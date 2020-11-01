//AQUI FAREI MEU LOOP

import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { Pokemon } from "../components/Pokemon";

export function PokemonsContainer() {
  const [quantity, setQuantity] = useState(0);
  //podemos retornar os dados e os erros tb através do graphQL, nesse caso retornamos o dado de 'pokemons'
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    //data contem um array de pokemons, cujo valor default é vazio
    variables: { first: quantity }, //ao realizarmos uma query, o resultado voltará no array "pokemons"
  });

  return (
    <div className="wrapper">
      <div className="container-one">
        <p>How many Pokemons?</p>
        <input
          type="number"
          onChange={(event) => setQuantity(event.target.value)}
          className="input-quantity"
        />
      </div>

      <div className="container-two">
        {/* se "pokemon" existir, faz essa função que converte o valor recebido para uma string JSON:
      {pokemons && pokemons.map(pokemon => JSON.stringify(pokemon, null, 2))} 
      é a mesma coisa que: 
        if(pokemons) {
            pokemons.map(function(pokemon) {
                JSON.stringify(pokemon)
            }) 
    NEVERMIND, NO PRÓXIMO PASSO SUBSTITUÍMOS O JSON.stringify por um componente, veja:*/}
        {pokemons &&
          pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </div>
  );
}
