import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) { #é igual a pokemons(first: 9), ou o nº que passarmos na requisição
            id
            name
            image
            maxHP
            maxCP
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }
`