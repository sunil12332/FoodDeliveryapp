import { fireEvent, render } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import  RestaurantMenu from "../RestaurantMenu"
import { Provider } from "react-redux"
import  appstore from "../../utlis/appStore"


global.fetch=jest.fn(()=>{
    return Promise.resolve(
        {
            json:()=>{
                return Promise.resolve(MOCK_DATA)
            }
        }
    )
})


it("should load restaurant Menu Component" ,async ()=>{


    await act ( async()=>render(
    <Provider store={appstore}>
        <RestaurantMenu/>
    </Provider>
    ))

    const accordianHeader=screen.getByText("Biryani (5)");
    fireEvent.click(accordianHeader)
})