import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

// Screens
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen/ProductDetailScreen";
import CartScreen from "./screens/CartScreen/CartScreen";
import CheckOutScreen from "./screens/CheckOutScreen/CheckOutScreen";
import LandingPage from "./screens/LandingPage/LandingPage";
import Dashboard from "./screens/DashboardScreen/Dashboard";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import ProductManageScreen from "./screens/ProductManageScreen/ProductManageScreen";
import OrderManageScreen from "./screens/OrderManageScreen/OrderManageScreen";

function App() {
  return (
    <Router>
      {/* <Header />
      <Menu /> */}
      <main>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/product" exact>
            <ProductScreen />
          </Route>
          <Route path="/product/:id">
            <ProductDetailScreen />
          </Route>
          <Route path="/productManage">
            <ProductManageScreen />
          </Route>
          <Route path="/cart">
            <CartScreen />
          </Route>
          <Route path="/orderManage">
            <OrderManageScreen />
          </Route>
          <Route path="/checkout">
            <CheckOutScreen />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/register">
            <RegisterScreen />
          </Route>
        </Switch>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
