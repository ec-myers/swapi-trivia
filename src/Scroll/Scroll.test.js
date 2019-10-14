import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('Scroll', () => {

  let selectedMovie = {
    episode: 4,
    title: 'Revenge of the Sith',
    scrollText: 'Blah, Blah, Blah...'
  };

  let wrapper = shallow(
    <Scroll selectedMovie={selectedMovie} />
  );
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});