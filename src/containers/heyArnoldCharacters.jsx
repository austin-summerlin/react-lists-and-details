/* eslint-disable keyword-spacing */
import React, { Component } from 'react';
import CharacterList from '../components/Characters/Characters';
import { fetchCharacters } from '../services/heyArnoldApi';

export default class HeyArnoldCharacters extends Component {
  state = {
    characters: [],
  };

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({ characters });
  }

  render() {
    const { characters } = this.state;

    return <CharacterList characters={characters} />;
  }
}
