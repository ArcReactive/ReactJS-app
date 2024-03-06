import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import "./styles/global.scss"
import Dashboard from "./pages/dashboard/dashboard";
import Members from "./pages/members/members";
import UpcommingBirthdays from "./pages/upcommingBirthdays/upcommingBirthdays";
import EmailCampaign from "./pages/campaigns/email/emailCampaign";
import SmsCampaign from "./pages/campaigns/sms/smsCampaign";
import OfferCampaign from "./pages/campaigns/offers/offerCampaign";
import RecentSms from "./pages/recentSms/recentSms";
import UserAccount from "./pages/userAccount/userAccount";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";
import Login from "./pages/login/login";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/members",
          element: <Members />,
        },
        {
          path: "/upcommingBirthdays",
          element: <UpcommingBirthdays />,
        },
        {
          path: "/campaigns",
          children: [
            {
              path: "sms",
              element: <SmsCampaign />,
            },
            {
              path: "email",
              element: <EmailCampaign />,
            },
            {
              path: "offer",
              element: <OfferCampaign />,
            }
          ],
        },
        {
          path: "/recentSms",
          element: <RecentSms />,
        },
        {
          path: "/userAccount",
          element: <UserAccount />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);

  return <RouterProvider router={router} />;

}

export default App
