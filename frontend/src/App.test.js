import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

describe("App",()=>{
  it("Should render Home correctly", ()=>{
      render(<Home/>)
  // expect(screen.getByText("Login").toBeInTheDocument())
  // expect(screen.getByText("The Alzhma Project 2.0").toBeInTheDocument())
  })
})
