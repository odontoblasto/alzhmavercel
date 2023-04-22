import { render, screen } from '@testing-library/react';


  describe("Home",()=>{
    it("Should render Nav and his class correctly", ()=>{
        render(<nav/>)
        expect(screen.findAllByRole("button",{name:"login"}));
        expect(screen.findAllByRole("button",{name:"logout"}));
        expect(screen.findByRole("nav","navbar navbar-expand-lg navbar-light bg-light"));
        // screen.getAllByRole("")
  })
    it("Should render Body correctly", ()=>{
      render(<body/>);
     
  })
    it("Should render div classname = container-fluid correctly", ()=>{
      render(<div/>);
      expect(screen.findByRole("div","container-fluid"));
      // expect(<div/>).toHaveClass("container-fluid");
     
    })
    it("Should render a with his destinations correctly", ()=>{
      render(<a/>)
      expect(screen.findAllByRole("a",{name:"login"}));
      expect(screen.findAllByRole("a",{name:"The Alzhma Project 2.0"}));
     
    })
    it("Should render img choosen correctly", ()=>{
      render(<img/>);
      expect(screen.findAllByRole("img",{name:"BgImage"}));
      // screen.getAllByRole("")
    })

})
