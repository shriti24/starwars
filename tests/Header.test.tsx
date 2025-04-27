import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import store from "../src/utils/appStore";
import { useNavigate } from "react-router";
import { BrowserRouter } from "react-router-dom";

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  AppBar: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  IconButton: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  Toolbar: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Typography: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Box: ({ children, ...props }: any) => <div {...props}>{children}</div>,
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
}));

describe("Header Component", () => { 

 test("should render the Header component", () => { 
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const logo = screen.getByTestId("logo");
  expect(logo).toBeInTheDocument();

 });

 test("should call handleNavigate function when logo is clicked", () => {
 // Mock the useNavigate function
 const mockNavigate = jest.fn();
 (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const logo = screen.getByTestId("logo");
  fireEvent.click(logo);
  expect(logo).toBeInTheDocument();
 });

 test("should show Favourites when button is clicked", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const button = screen.getByTestId("favourites");
  fireEvent.click(button);
  const favourites = screen.getByText(/Favourites/i);
  expect(favourites).toBeInTheDocument();
  const closeButton = screen.getByTestId('close_fav');
  fireEvent.click(closeButton);
  expect(favourites).not.toBeInTheDocument();
 });
});