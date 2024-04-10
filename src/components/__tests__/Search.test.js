import { fireEvent, render,screen} from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve(
        {
            json:()=>{
                return Promise.resolve(MOCK_DATA)
            }
        }
    )
})

test("should search res list for burger ", async()=>{
      
    await act(async () =>render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>));

    const cardsBeforSearch=screen.getAllByTestId("resCard");


   expect(cards.length).toBe(12);




  const searchBtn=screen.getByRole("button",{name:Search});

   const  searchInput=screen.getByTestId("searchInput");

   fireEvent.change(searchInput,{target:{value:"burger"}});

   fireEvent.click(searchBtn);


   //screen should load 4 cards
  const cardsAfter=screen.getAllByTestId("resCard")


   expect(cardsAfter.length).toBe(4);

})



test("should search res list for burger ", async()=>{
      
    await act(async () =>render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>));

    const cardsBeforSearch=screen.getAllByTestId("resCard");


   expect(cardsBeforSearch.length).toBe(12);


   const topRateBtn=screen.getByRole("button",{name:"Top rated Restaurants"});

   fireEvent.click(topRateBtn);

   const cardAfterfilter=screen.getAllByTestId("rescard");

   expect(cardAfterfilter.length).toBe(13);
   



})


