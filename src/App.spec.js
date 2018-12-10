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
    onCorrectAnswer: () => {},
    onErrorAnswer: () => {},
  };

  it('has an form input', () => {
    const props = { ...defaultProps };

    const component = mount(<App {...props} />);

    expect(component.find('[data-selector="pokemon-form"]')).toHaveLength(1);
  });

  describe('success answer', () => {
    it('when user input a correct pokemon it shows shows success message', () => {
      const props = { ...defaultProps, onCorrectAnswer: jest.fn() };

      const component = mount(<App {...props} />).find(
        '[data-selector="pokemon-form"]',
      );
      component.find('input').simulate('change', { target: { value: 'foo' } });
      component.simulate('submit', {});

      expect(props.onCorrectAnswer).toHaveBeenCalled();
    });

    it('when user input a wrong pokemon it does not shows shows success message', () => {
      const props = { ...defaultProps, onCorrectAnswer: jest.fn() };

      const component = mount(<App {...props} />).find(
        '[data-selector="pokemon-form"]',
      );
      component
        .find('input')
        .simulate('change', { target: { value: 'wrong' } });
      component.simulate('submit', {});

      expect(props.onCorrectAnswer).not.toHaveBeenCalled();
    });
  });

  describe('wrong answer', () => {
    it('when user input a wrong pokemon it shows shows error message', () => {
      const props = { ...defaultProps, onErrorAnswer: jest.fn() };

      const component = mount(<App {...props} />).find(
        '[data-selector="pokemon-form"]',
      );
      component
        .find('input')
        .simulate('change', { target: { value: 'safoo' } });
      component.simulate('submit', {});

      expect(props.onErrorAnswer).toHaveBeenCalled();
    });

    it('when user input a correct pokemon it does not shows shows error message', () => {
      const props = { ...defaultProps, onErrorAnswer: jest.fn() };

      const component = mount(<App {...props} />).find(
        '[data-selector="pokemon-form"]',
      );
      component.find('input').simulate('change', { target: { value: 'foo' } });
      component.simulate('submit', {});

      expect(props.onErrorAnswer).not.toHaveBeenCalled();
    });
  });
});
