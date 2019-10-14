import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper, mockGetFormData;
  beforeEach(() => {
    mockGetFormData = jest.fn()
    wrapper = shallow(<Form getFormData={mockGetFormData}/>)
  })

  it('should map the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should update state when handleChange is called', () => {
    const mockEvent = { target: { id: 'name', value: 'Kimberly' } };
    const expected = 'Kimberly';
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual(expected);
  })
})