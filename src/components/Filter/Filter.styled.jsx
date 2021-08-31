import styled from "@emotion/styled/macro";
import InputBase from '@material-ui/core/InputBase';

export const SearchIconWrapper = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.div`
position: relative;
border-radius: 4px;
border: 1px solid lightblue;
width: 400px;

&:hover {
    outline: none;
    border: 1px solid #1976d2;
}
`;

export const StyledInputBase = styled(InputBase)`
padding-left: 40px;
width: 100%;
height: 54px;
`;


