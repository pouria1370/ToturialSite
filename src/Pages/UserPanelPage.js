import { Outlet } from "react-router-dom";
import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import './UserPanelPage.css'
const UserPanelPage = () => {
  return (
    <div className="usepanelpage-container">
      
        <ul className="firstSection">
          <li style={{marginTop:'5%'}}>
            <Link to="setting" style={{textDecoration:'none'}}>
              <Button>Setting</Button>
            </Link>
          </li>
          <li style={{marginTop:'5%' }}>
            <Link to="history" style={{textDecoration:'none'}}>
              <Button >History</Button>
            </Link>
          </li>
          <li style={{marginTop:'5%'}}>
            <Link to="newsuggestion" style={{textDecoration:'none'}}>
              <Button>New Suggestions</Button>
            </Link>
          </li>
          <li style={{marginTop:'5%'}}>
            <Link to="orderpersuit" style={{textDecoration:'none'}}>
              <Button>Order-Persuit</Button>
            </Link>
          </li>
        </ul>
      <div className="secondSection">   
          <Outlet />    
      </div>
    </div>
  );
};

export default UserPanelPage;
