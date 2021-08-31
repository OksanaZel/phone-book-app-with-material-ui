import React from "react";
import { useSelector } from "react-redux";
import {authSelectors} from "redux/auth";
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import {StyledAppBar, StyledBox, StyledToolbar} from "./AppBar.styled"

function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <StyledBox>
      <StyledAppBar>
        <StyledToolbar>
          <Navigation />
          {isLoggedIn ? <UserMenu />: <AuthNav />}
        </StyledToolbar>
      </StyledAppBar>
    </StyledBox>
    )
}

export default AppBar;