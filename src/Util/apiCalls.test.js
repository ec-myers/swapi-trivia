
import {getFilms, getCharacters} from '../Util/apiCalls';

describe('getFilms', () => {
  let mockResponse;
  beforeEach(()=>{ 
    mockResponse = {results:[{
      title: 'A New Hope',
      scrollText: 'blah blah',
      id:1,
      releaseYear: '1974',
      episode: 4
    }, {
        title: 'Whatever',
        scrollText: 'blah blah',
        id: 3,
        releaseYear: '1985',
        episode: 7
      }] }
    window.fetch = jest.fn().mockImplementation(()=>{
      return Promise.resolve({
        ok:true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should call fetch with correct URL', () => {
    getFilms()
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films')
  })
  it('should return an array of films', () => {
    expect(getFilms()).resolves.toEqual(mockResponse)
  })

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Unable to fetch'))
    })
    expect(getFilms()).rejects.toEqual(Error('Unable to fetch'))
  })
})

describe('getCharacters', () => {
  let mockCharacters;
  beforeEach(() => {
    mockCharacters = [{
      name: 'Steve',
      homeworld: 'Dantooine',
      population: 200000,
      species: "Twi'lek",
      films: ['movie', 'other movie']
    }]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve()
    })
  })
  it('should call fetch with correct URL', () => {
    getCharacters(2);
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/2')
  })
  it('should return an array of characters', () => {
    expect(getCharacters()).resolves.toEqual(mockCharacters)
  })
  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Unable to fetch'))
    })
    expect(getFilms()).rejects.toEqual(Error('Unable to fetch'))
  })
})
