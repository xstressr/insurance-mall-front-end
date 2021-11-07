import Admin from "../components/admin";
import Home from "../components/home-page";
import Login from "../components/login";
import Register from "../components/register";
import Seller from "../components/seller";
import Vip from "../components/vip";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/admin",
    component: Admin
  },
  {
    path: "/seller",
    component: Seller
  },
  {
    path: "/vip",
    component: Vip
  }
]

export default routes