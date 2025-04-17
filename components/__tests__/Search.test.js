const { render, act,screen, fireEvent } = require("@testing-library/react");
import Body from "../Body";
import MOCK_DATA from "../../utils/MOCK/mockResDataList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should rener body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const search = screen.getByPlaceholderText("Type here");

  fireEvent.change(search,{target : { value: "pizza"}})

  expect(search).toBeInTheDocument();

  const allSearchedCard = screen.getAllByTestId("resCard");

  expect(allSearchedCard.length).toBe(3);

});

test("should rener searched cards", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const search = screen.getByPlaceholderText("Type here");
    const beforeSearch = screen.getAllByTestId("resCard");
    expect(beforeSearch.length).toBe(20)
    fireEvent.change(search,{target : { value: "pizza"}})
    const allSearchedCard = screen.getAllByTestId("resCard");
    expect(allSearchedCard.length).toBe(3);
  
  });


  test("Top rated button ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
  const topRatedBtn = screen.getByText("Top Rated Restaurants");

  fireEvent.click(topRatedBtn);

  const filteredItems = screen.getAllByTestId("resCard");

  expect(filteredItems.length).toBe(6)
  
  });

  test("Top rated button ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const dynamicSerchBtn = screen.getByPlaceholderText("dynamic-search");

    expect(dynamicSerchBtn).toBeInTheDocument()
  
  });


