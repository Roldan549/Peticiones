import { useState } from "react"

export const Pokemon = ({pokemon}) => {
    const [datosPokemon, setDatosPokemon] = useState([])

    const traerPokemon = async () => {
        let respuesta = await fetch ( 'https://pokeapi.co/api/v2/pokemon/'+pokemon)
        let data = await respuesta.json()
        console.log(data)
    }

    traerPokemon()


}