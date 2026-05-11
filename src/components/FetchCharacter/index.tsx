'use client'

import { useState, useEffect } from "react"
import { GetCharacter } from "../../data/data"
import type { Character } from "../../types/Character"
import CharacterCard from "../CharacterCard"
import Container from "@mui/material/Container"

const FetchCharacter = () => {

  const [characterInfo, setCharacterInfo] = useState<Character[]>()

  const getAllCharacters = async () => {
    const response = await GetCharacter()
    response.map(character => {
      console.log('This is from component: ' + character.imageUrl)
    })
    setCharacterInfo(response)
  }

  useEffect(() => {
    getAllCharacters()
  }, [])

  const [storageItem, setStorageItem] = useState<number[]>(() => JSON.parse(localStorage.getItem("favourites") || "[]"))

  const handleToggleFavourite = (id: number) => {
    const isFavourited = storageItem.includes(id)
    if (!isFavourited) {

      const newStorageItem = [...storageItem, id]
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem))

    } else {
      const newStorageItem = storageItem.filter((savedId) => savedId !== id)
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem))

    }
  }

  return (
    <Container component="div" sx={{
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: "wrap",
      gap: "20px",
      p: "20px"
    }} >
      {characterInfo && characterInfo.map((character, index) => <CharacterCard key={index} handleToggleFavourite={handleToggleFavourite} character={character} isFavourited={storageItem.includes(character._id)} />)}
    </Container>
  )
}

export default FetchCharacter