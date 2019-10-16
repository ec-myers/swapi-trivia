import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getFilms, getCharacters } from '../Util/apiCalls';

jest.mock('../Util/apiCalls.js');

describe('App', () => {
  let wrapper, 
      mockFilms;
  
  beforeEach(() => {
    mockFilms = [
      {
        title: 'A New Hope',
        scrollText: 'blah blah',
        id: 1,
        releaseYear: '1974',
        episode: 4
      }, {
        title: 'Whatever',
        scrollText: 'blah blah',
        id: 3,
        releaseYear: '1985',
        episode: 7
      }
    ]
  
    getFilms.mockImplementation(() => {
      return Promise.resolve(mockFilms);
    });
    wrapper = shallow(<App />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should retrieve films after mounting', () => {
    shallow(<App />);
    expect(getFilms).toHaveBeenCalled();
  });

  it('should update state with the user when called', () => {
    let user = {
      name: 'Greg',
      quote: 'Yolo',
      rank: 'Sucks'
    };

    window.localStorage = jest.fn();
    expect(wrapper.state('userInfo')).toEqual({});
    expect(wrapper.state('isFormComplete')).toEqual(false);
    wrapper.instance().getFormData(user);
    expect(wrapper.state('userInfo')).toEqual(user);
    expect(wrapper.state('isFormComplete')).toEqual(true);
  });

  it('should update state with characters when called', async () => {
    const wrapper = shallow(<App />)
    let characters = [{
      name: 'Steve',
      homeworld: 'Dantooine',
      population: 200000,
      species: "Twi'lek",
      films: ['movie', 'other movie']
    }, 
    {
      name: 'Greg',
      homeworld: 'Kashyyk',
      population: 50000,
      species: 'Wookie',
      films: ['movie', 'other movie']
    }
  ]
    getCharacters.mockImplementation(() => Promise.resolve(characters))

    let mockEvent = {target: {id:1}}
    wrapper.instance().setState({movies: mockFilms, haveCharacters: false})

    expect(wrapper.state('haveCharacters')).toEqual(false)
    expect(wrapper.state('characters')).toEqual([])

    await wrapper.instance().goToMovieCharacters(mockEvent);

    expect(wrapper.state('characters')).toEqual(characters)
    expect(wrapper.state('haveCharacters')).toEqual(true)
    expect(getCharacters).toHaveBeenCalled()

  })

  it('should update state when new character is favorited', () => {
    let character = {
      name: 'Steve',
      homeworld: 'Dantooine',
      population: 200000,
      species: "Twi'lek",
      films: ['movie', 'other movie']
    };

    expect(wrapper.state('favorites')).toEqual([]);
    wrapper.instance().toggleFavorite(character);
    expect(wrapper.state('favorites')).toEqual([character])
  });

  it('should update state when existing character is favorited ', () => {
    let character = {
      name: 'Steve',
      homeworld: 'Dantooine',
      population: 200000,
      species: "Twi'lek",
      films: ['movie', 'other movie']
    };

    wrapper.instance().setState({favorites: [character]});
    expect(wrapper.state('favorites')).toEqual([character]);
    wrapper.instance().toggleFavorite(character);
    expect(wrapper.state('favorites')).toEqual([])
  });

  it('should update state when user logs out', () => {
    let user = {
      name: 'Greg',
      quote: 'Yolo',
      rank: 'Sucks'
    };

    wrapper.instance().setState({userInfo: user});
    expect(wrapper.state('userInfo')).toEqual(user);
    expect(wrapper.state('isFormComplete')).toEqual(true);
    wrapper.instance().logOut();
    expect(wrapper.state('userInfo')).toEqual({});
    expect(wrapper.state('isFormComplete')).toEqual(false);
  });
});

describe('App with nav', () => {
  it('should render the nav bar if the form is filled out', () => {
    const wrapper = shallow(<App
    />)
    wrapper.setState({isFormComplete: true})
    expect(wrapper).toMatchSnapshot()
  })
})

describe('App with no movies', () => {
  it('should render the loading img if no movies are present', () => {
    const wrapper = shallow(<App
      isFormComplete={true}
      haveMovies={false}
      haveCharacters={true}
    />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('App with no characters', () => {
  it('should render the Scroll if no characters are present', () => {
    const wrapper = shallow(<App
    
    />)
    wrapper.setState({haveMovies:true, haveCharacters: false})
    expect(wrapper).toMatchSnapshot()
  })
})