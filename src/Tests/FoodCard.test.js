import React from "react"

import {render,cleanup} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import FoodCard from "../components/FoodCard"

afterEach(cleanup)



it("render the img in the dom",()=>{
    const {getByTestId} = render(<FoodCard meal={"meal name"} img={"img url"} id={1} gtdetails={console.log} />)
    expect(getByTestId('img')).toBeInTheDocument()
})

it("have a function the run after you click the div",()=>{
    render(<FoodCard meal={"meal name"} img={"img url"} id={1} gtdetails={console.log} />)
    let gtdetails = jest.fn();
    gtdetails('hello');
    expect(gtdetails.mock.calls[0][0]).toBe('hello');
})
it("render the img in the dom",()=>{
    const {getByTestId} = render(<FoodCard meal={"meal name"} img={"img url"} id={1} gtdetails={console.log} />)
    expect(getByTestId('meal')).toHaveTextContent("meal name")
})