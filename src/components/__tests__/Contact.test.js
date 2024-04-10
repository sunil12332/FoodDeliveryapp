import Contact from '../Contact'
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"





describe("contact us page Test Case",()=>{

    beforeAll(()=>{
        console.log("Before All")
    })

    beforeEach(()=>{
        console.log("Before Each")
    })


    afterAll(()=>{
        console.log("Before Each")
    })


    
    afterEach(()=>{
        console.log("Before Each")
    })


    

   it("should load contact us component",()=>{

       render(<Contact/>);

    const heading=screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();

});

})

