/* eslint-disable max-len */
export const fetchCharacters = async () => {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  const json = await res.json();

  return json.map((character) => ({
    id: character._id,
    name: character.name,
    image: character.image,
  }));
};


export const fetchCharacterById = async (id) => {
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
  const json = await res.json();

  return json;
};



