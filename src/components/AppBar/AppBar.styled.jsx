import styled from "@emotion/styled/macro";
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const StyledBox = styled(Box)`
flex-grow: 1;
`;

export const StyledAppBar = styled(AppBar)`
position: static;
margin-bottom: 25px;
`;

export const StyledToolbar = styled(Toolbar)`
display: flex;
justify-content: space-between;
align-items: center;
min-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;