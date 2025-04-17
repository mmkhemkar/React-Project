// import { act, render, screen } from "@testing-library/react";
// import RestaurantMenu from "../RestaurantMenu";
// import MOCK_RESTO_MENU from "../../utils/MOCK/MOCK_RESTO_MENU.json";
// import { Provider } from "react-redux";
// import appStore from "../../utils/appStore";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom";
// import ResturantCard from "../ResturantCard";

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(MOCK_RESTO_MENU),
//   })
// );

// test("should render restaurant menu component", async () => {
//   await act(async () =>
//     render(
//         <BrowserRouter>
//       <Provider store={appStore}>
//           <ResturantCard />
//       </Provider>
//       </BrowserRouter>
//     )
//   );

//   const foodTitle = screen.getAllByTestId("resCard");

// //   const addBtn = screen.getAllByRole("button",{name:"add +"})


//   expect(foodTitle).toBeInTheDocument();
// });

