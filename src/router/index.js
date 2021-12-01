import Admin from "../pages/admin";
import Home from "../pages/home-page";
import Login from "../pages/login";
import Register from "../pages/register";
import Seller from "../pages/seller";
import Vip from "../pages/vip";
import SearchPolicies from "../pages/vip/c-pages/search-policies";
import UpdatePassword from "../pages/vip/c-pages/update-password";
import Claim from "../pages/vip/c-pages/claim";
import Put from "../pages/seller/put";
import Off from "../pages/seller/off";
import SearchProducts from "../pages/seller/search-products";
import Audit from "../pages/admin/audit";
import InfoPublish from "../pages/admin/info-publish";
import Product from "../pages/home-page/product";
import ClaimInfo from "../components/claim-info";
import CommonQuestions from "../components/common-questions";
import ProductNavi from "../components/navigation";
import KnowClaim from "../components/know-claim";
import Insured from "../pages/home-page/insured";
import SearchClaim from "../pages/vip/c-pages/search-claim";
import AuditClaim from "../pages/seller/audit-claim";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/app/product",
    component: Product,
    routes: [
      {
        path: "/app/product/detail",
        component: ClaimInfo
      },
      {
        path: "/app/product/know",
        component: KnowClaim
      },
      {
        path: "/app/product/navi",
        component: ProductNavi
      },
      {
        path: "/app/product/question",
        component: CommonQuestions
      }
    ]
  },
  {
    path: "/app/insured",
    component: Insured
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
    component: Admin,
    routes: [
      {
        path: "/admin/audit",
        component: Audit
      },
      {
        path: "/admin/home-info-publish",
        component: InfoPublish
      },
    ]
  },
  {
    path: "/seller",
    component: Seller,
    routes: [
      {
        path: "/seller/put",
        component: Put
      },
      {
        path: "/seller/off",
        component: Off
      },
      {
        path: "/seller/auditClaim",
        component: AuditClaim
      },
      {
        path: "/seller/searchProducts",
        component: SearchProducts
      },
    ]
  },
  {
    path: "/vip",
    component: Vip,
    routes: [
      {
        path: "/vip/search",
        component: SearchPolicies
      },
      {
        path: "/vip/claim",
        component: Claim
      },
      {
        path: "/vip/searchClaim",
        component: SearchClaim
      },
      {
        path: "/vip/updatePassword",
        component: UpdatePassword
      }
    ]
  }
]

export default routes