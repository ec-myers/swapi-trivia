import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Form getFormData={jest.fn()}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should update state when handleChange is called', () => {
    const mockEvent = { target: { id: 'name', value: 'Kimberly' }, preventDefault: jest.fn() };
    const expected = 'Kimberly';
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual(expected);
  })
  it('should update state to complete when handleSubmit is called', () => {
    const mockEventOne = { target: { id: 'name', value: 'Kimberly' }}
    const mockEventTwo = { target: {
      id: 'quote', value: 'I know'
    }}

    const dEvent = { preventDefault:jest.fn()}

    wrapper.instance().handleChange(mockEventOne)
    expect(wrapper.state('name')).toEqual('Kimberly')
    wrapper.instance().handleChange(mockEventTwo)
    expect(wrapper.state('quote')).toEqual('I know')
    wrapper.find('button').simulate('click', dEvent)
    expect(wrapper.state('isComplete')).toEqual(true)
  })
  it('should not be marked complete if a section is missing on submit and should have an error', () => {
    const mockEvent = { target: { id: 'name', value: 'Kimberly' }, preventDefault: jest.fn() };
    const expected = 'Kimberly';
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual(expected);
    expect(wrapper.state('quote')).toEqual('')
    wrapper.find('button').simulate('click', mockEvent)
    expect(wrapper.state('isComplete')).toEqual(false)
    expect(wrapper.state('quoteErr')).toEqual(true)
  })
  it('should run handleChange when the inputs detect a change', () => {
    const mockNameEvent = { target: { id: 'name', value: 'Robbie' } };
    const mockQuoteEvent = { target: { id: 'quote', value: 'Why not?' } };
    wrapper.instance().handleChange = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('[id="name"]').simulate('change', mockNameEvent);
    wrapper.find('[id="quote"]').simulate('change', mockQuoteEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockNameEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockQuoteEvent);
  }) 
  it('should call getFormData with correct props when the button is clicked', () => {
    const currentState = { name: 'Stephanie', quote: 'I have a bad feeling about this', rank: 'Jedi Master' };
    let mockUser = {
      name: 'Stephanie',
      quote: 'I have a bad feeling about this',
      rank: 'Jedi Master'
    }
    wrapper.instance().setState(currentState);
    wrapper.instance().handleSubmit({preventDefault: jest.fn() });
    expect(wrapper.instance().props.getFormData).toHaveBeenCalledWith(mockUser);
  })
})