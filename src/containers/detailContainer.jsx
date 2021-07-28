import React from 'react';
import { Component } from 'react';
import CharacterDetail from '../components/Characters/CharacterDetail';
import { fetchCharacterById } from '../../services/heyArnoldApi';

export default class CharacterDetailPage extends Component {
  state = {
    character: {},
    loading: true,
  };

  async comoponentDidMount() {
    const character = await fetchCharacterById(this.props.match.params._id);
    this.setState({ character, loading: false });

  }


  render() {
    const { loading, character } = this.state;

    if (loading) return;
    <img src="https://i.imgur.com/B8SSY5p.gif" alt="loading" />;

    return <CharacterDetail character={character} />;
  }
}
