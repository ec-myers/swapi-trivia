import React from 'react';
import { shallow } from  'enzyme';
import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {
  let wrapper;
  let mockToggleFavorites = jest.fn();
  
  let character = {
    name: 'Luke Skywalker',
    homeworld: 'Tattooine',
    population: 200000,
    species: 'human',
    films: ['blah', 'blah']
  };

  let favorites = [character];

  beforeEach(() => {
    wrapper = shallow(
      <CharacterCard
      key={character.name}
      character={character}
      toggleFavorite={mockToggleFavorites}
      favorites={favorites}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should favorite/unfavorite a character when clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockToggleFavorites).toHaveBeenCalled();
  });
});