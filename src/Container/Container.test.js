import React from 'react'
import {shallow} from 'enzyme';
import Container from './Container'

describe('Container with Movies', () => {
  it('should match the snapshot when rendering movies', () => {
    let movies =[
      {
        title: 'Bad Prequel',
        episode: 1,
        releaseYear: 2001,
        id: 3
      },
      {
        title: 'Worse Prequel',
        episode: 2,
        releaseYear: 2007,
        id: 7
      }
    ]
    let wrapper = shallow(<Container
      cards={movies} goToMovies={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Container with Characters', () => {
  it('should match the snapshot when rendering characters', () => {
    let characters = [{
      name: 'Luke Skywalker',
      homeworld: 'Tattooine',
      population: 200000,
      species: 'human',
      films: ['blah', 'blah']
    }]
    let wrapper = shallow(<Container
      type='characters' cards={characters} toggleFavorite={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Container with no favorites', () => {
  it('should match the snapshot when rendering and favorites is empty', () => {
    let favorites = []
    let wrapper = shallow(<Container
      type='favorites' cards={favorites}
      favorites={favorites}
      toggleFavorite={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Container with Favorites', () => {
  it('should match the snapshot when rendering multiple favorites', () => {
    let favorites = [{
      name: 'Luke Skywalker',
      homeworld: 'Tattooine',
      population: 200000,
      species: 'human',
      films: ['blah', 'blah']
    }, {
        name: 'Luke C3-PO',
        homeworld: 'Tattooine',
        population: 200000,
        species: 'Droid',
        films: ['All of them', 'blah']
    }]
    let wrapper = shallow(<Container
      type='favorites' cards={favorites}
      favorites={favorites} toggleFavorite={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot()
  })
})