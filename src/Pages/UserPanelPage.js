import { Outlet } from "react-router-dom";
import React from "react";
import Wrapper from "../components/Wrapper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const UserPanelPage = () => {
  return (
    <Wrapper>
      <div className="firstSection">
        <ul className="columnNavigator">
          <li>
          <Button><Link to="setting">Setting</Link></Button>
          </li>
          <li>
          <Button><Link to="history">History</Link></Button>
          </li>
          <li>
          <Button><Link to="newsuggestion">New Suggestions</Link></Button>
          </li>
          <li>
          <Button><Link to="orderpersuit">Order-Persuit</Link></Button>
          </li>
          
        </ul>
      </div>
      <div className="secondSection">
      <div></div>
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default UserPanelPage;
