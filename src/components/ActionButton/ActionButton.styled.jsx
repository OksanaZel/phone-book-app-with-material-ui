import styled from "@emotion/styled";
import Fab from '@material-ui/core/Fab';

export const StyledFab = styled(Fab)`
background-color: #1976d2;
color: #fff;
&:hover{
    color: #1976d2;
    background-color: #fff;
}
&:not(:last-child){
  margin-right: 15px;
}
`;
