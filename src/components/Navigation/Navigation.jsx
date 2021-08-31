import React from "react";
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link } from "./Navigation.styled";
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {StyledIconButton, StyledNavContainer} from "./Navigation.styled"

function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
      <StyledNavContainer>
          <Link exact to="/">
            <StyledIconButton>
              <ImportContactsIcon />
            </StyledIconButton>
        </Link>
        
        {isLoggedIn &&
            <Link to="/contacts">
                Contacts
            </Link>}
        </StyledNavContainer>
    )
}

export default Navigation;