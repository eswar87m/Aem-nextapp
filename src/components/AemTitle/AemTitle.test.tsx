import React from 'react';
import { render, screen } from '@testing-library/react';
import { AemTitle } from './AemTitle'

describe('Title', () => {
  test('renders text as H1 element by default', () => {
    render(<AemTitle text="Hello World" />);
    const titleElement = screen.getByText('Hello World');
    expect(titleElement.tagName).toEqual('H1');
  });

  test('renders text as H2 element when level="2"', () => {
    render(<AemTitle text="Hello World" level="2" />);
    const titleElement = screen.getByText('Hello World');
    expect(titleElement.tagName).toEqual('H2');
  });

  test('renders empty label when text is empty', () => {
    render(<AemTitle text="" />);
    const titleElement = screen.getByText('Title');
    expect(titleElement.tagName).toEqual('H1');
  });
});
