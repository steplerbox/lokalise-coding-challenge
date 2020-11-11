import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Label from '../Label';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Renders Label component', () => {
  act(() => {
    render(<Label text='Test label 1' color='#000000'/>, container);
  });
  expect(container.textContent).toBe('Test label 1');

  act(() => {
    render(<Label text='Test label 2' color='#000000'/>, container);
  });
  expect(container.textContent).toBe('Test label 2');
});
