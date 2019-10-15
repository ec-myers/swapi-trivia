import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getFilms } from '../Util/apiCalls';

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

  it('should update state with characters when called', () => {
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