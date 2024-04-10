import { fireEvent, render,screen } from "@testing-library/react"
import Header from '../Header'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import  "@testing-library/jest-dom"
import appstore from "../../utlis/appStore";
it("should load Header Component with a login button",()=>{

    render(
        <BrowserRouter>
        <Provider store={appstore}>
              <Header/>
          </Provider>
        </BrowserRouter>
     
    );

    const loginbutton=screen.getByRole("button",{name:"login"});

    
   expect(loginbutton).toBeInTheDocument();

});