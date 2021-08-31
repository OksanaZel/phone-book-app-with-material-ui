import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';

export const StyledNavContainer = styled.div`
display: flex;
align-items: center;
`;

export const StyledIconButton = styled(IconButton)`
color: #fff;
`;

export const Link = styled(NavLink)`
display: block;
margin-right: 25px;
  text-decoration: none;
  font-weight: 500;
  color: #fff;
  font-size: 20px;
  line-height: 1.88;
  letter-spacing: 0.06em;
`;

export const Button = styled.button`
display: block;
  text-decoration: none;
  font-weight: 500;
  color: #fff;
  font-size: 20px;
`;