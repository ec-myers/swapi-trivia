import React from 'react'
import {shallow} from 'enzyme'
import Nav from './Nav'

describe('Nav', () => {
  let wrapper, mockLogout;
  beforeEach(() => {
  mockLogout = jest.fn()
    let mockUser = {
      name: 'Greg',
      quote: 'I know',
      rank: 'Jedi Knight'
    }
    wrapper = shallow(<Nav
      user={mockUser}
      logOut={mockLogout}
    />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should call logOut metho prop when link is clicked', () => {
    wrapper.find('Link').simulate('click');
    expect(mockLogout).toHaveBeenCalled()
  })
})
