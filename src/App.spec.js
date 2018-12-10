import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  const defaultProps = {
    nextPokemon: list => list[0],
    pokemons: [{ name: 'foo', image: 'foo.jpg' }],
  };

  it('has an form input', () => {
    const props = { ...defaultProps };

    const component = mount(<App {...props} />);

    expect(component.find('[data-selector="pokemon-form"]')).toHaveLength(1);
  });

  it('when user input a correct pokemon it shows shows a message', () => {
    const props = { ...defaultProps, onCorrectMessage: jest.fn() };

    const component = mount(<App {...props} />).find(
      '[data-selector="pokemon-form"]',
    );
    component.find('input').simulate('change', { target: { value: 'foo' } });
    component.simulate('submit', {});

    expect(props.onCorrectMessage).toHaveBeenCalled();
  });

  it('when user input a wrong pokemon it does not shows shows a message', () => {
    const props = { ...defaultProps, onCorrectMessage: jest.fn() };

    const component = mount(<App {...props} />).find(
      '[data-selector="pokemon-form"]',
    );
    component.find('input').simulate('change', { target: { value: 'wrong' } });
    component.simulate('submit', {});

    expect(props.onCorrectMessage).not.toHaveBeenCalled();
  });
});
