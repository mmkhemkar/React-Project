import { fireEvent, render ,screen} from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // ✅ Import this
import "@testing-library/jest-dom";
import Hedaer from "../Header";

test("should render header component with login button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const loginBtn = screen.getByRole("button",{name:"Login"});
  expect(loginBtn).toBeInTheDocument()
});


test("should render cart item in Header component",()=>{
    render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      //const cart = screen.getByText("Cart - (0 items)");
      const cart = screen.getByText(/Cart/);
      expect(cart).toBeInTheDocument()
})


test("should Change login button to logout on click of button",()=>{
    render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );
      const loginBtn = screen.getByRole("button",{name:"Login"});

      fireEvent.click(loginBtn);
      const Logout = screen.getByRole("button",{name:"Logout"})
      expect(Logout).toBeInTheDocument()
})
