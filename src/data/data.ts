import type { Character } from "../types/Character"

export const GetCharacter = async (): Promise<Character[]> => {
  const response = await fetch("https://api.disneyapi.dev/character").then((res) => res.json());
  console.log(response)
  return response.data;
}