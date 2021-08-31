import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "redux/auth";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { UserMenuContainer, StyledIconButton, StyledTitle } from "./UserMenu.styled";

function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return (
        <UserMenuContainer>
            <StyledTitle>Welcome, {name}</StyledTitle>
            <StyledIconButton type='button' onClick={() => dispatch(authOperations.userLogOut())}>
                <ExitToAppIcon/>
            </StyledIconButton>
        </UserMenuContainer>
    )
}

export default UserMenu;
