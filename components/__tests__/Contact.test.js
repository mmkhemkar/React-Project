import { render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("should load contact us component",() => {
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("should input field resnde",()=>{
    render(<Contact/>);
    const result = screen.getByRole("button");
    expect(result).toBeInTheDocument();
})

test("should be render 2nd input",()=>{
    render(<Contact/>);
    const result = screen.getByPlaceholderText("contact");
    expect(result).toBeInTheDocument()
})

test("should button render in contact component",()=>{
    render (<Contact/>);
    const res = screen.getByText("submit")
    expect(res).toBeInTheDocument()
})

it("should get all inputs",()=>{
    render(<Contact/>);
    const res = screen.getAllByRole("textbox");
    expect(res.length).toBe(2)
})