import React from "react";
import { Link } from "../Navigation/Navigation.styled";
import { AuthNavContainer } from "./AuthNav.styled";

function AuthNav() {
    return (
        <AuthNavContainer>
            <Link to="/login">Sign In</Link>
        </AuthNavContainer>
    )
}

export default AuthNav;