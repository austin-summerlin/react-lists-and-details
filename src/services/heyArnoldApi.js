/* eslint-disable max-len */
export const fetchCharacters = async () => {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters/');
  const json = await res.json();

  return json.map((character) => ({
    _id: character._id,
    name: character.name,
    image: character.image,
  }));
};


export const fetchCharacterById = async (_id) => {
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${_id}`);
  const json = await res.json();

  return json.map((character) => ({
    _id: character._id,
    name: character.name,
    image: character.image,
  }));
};



