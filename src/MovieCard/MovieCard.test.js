import React from 'react'
import { shallow } from 'enzyme'
import MovieCard from './MovieCard'

describe('MovieCard', () => {
  let wrapper, mockMovie, mockGoToMovieCharacters;
  beforeEach(() => {
    mockGoToMovieCharacters = jest.fn()
    mockMovie = {
      title: 'Bad Prequel',
      episode: 1,
      releaseYear: 2001,
      id: 3
    }

    wrapper = shallow(<MovieCard movie={mockMovie} goToMovieCharacters={mockGoToMovieCharacters} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call goToMovieCharacters on click', () => {
    wrapper.find('Link').simulate('click')
    
    expect(mockGoToMovieCharacters).toHaveBeenCalled()
  })
})

