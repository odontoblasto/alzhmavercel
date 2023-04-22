import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

describe("App",()=>{
  it("Should render Home correctly", ()=>{
     render(<Home/>);          
      // screen.getAllByRole("");
    
    });
    it("Should render img correctly", ()=>{
      render(<img/>)
      expect(screen.findAllByRole("img",{name:"BgImage"}))
      // screen.getAllByRole("")
    })
  })     
      
 