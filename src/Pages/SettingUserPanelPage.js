import { Button } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

import './SettingUserPanelPage.css'
const SettingUserPanelPage = () => {
  return (
    <>
    <ul className="SettingUserPanelPage_container">
      <li style={{ marginTop: "1%" }}>
        <Link to="changephoto" style={{ textDecoration: "none" }}>
          <Button>Change photo</Button>
        </Link>
      </li>
      <li style={{ marginTop: "1%" }}>
        <Link to="changepassword" style={{ textDecoration: "none" }}>
          <Button>Change Password</Button>
        </Link>
      </li>
      <li style={{ marginTop: "1%" }}>
        <Link to="changecolor" style={{ textDecoration: "none" }}>
          <Button>Change Color</Button>
        </Link>
      </li>
      <li style={{ marginTop: "1%" }}>
        <Link to="changeemail" style={{ textDecoration: "none" }}>
          <Button>Change email</Button>
        </Link>
      </li>
      <li style={{ marginTop: "1%" }}>
        <Link to="active-goo-au" style={{ textDecoration: "none" }}>
          <Button>Active google Authentication</Button>
        </Link>
      </li>
      <li style={{ marginTop: "1%" }}>
        <Link to="active2af" style={{ textDecoration: "none" }}>
          <Button>Active 2af</Button>
        </Link>
      </li>
      <li style={{ marginTop: "1%" }}>
        <Link to="deleteaccount" style={{ textDecoration: "none" }}>
          <Button>Delete account</Button>
        </Link>
      </li>
    </ul>
    <Outlet/>
    </>
  );
};

export default SettingUserPanelPage;
