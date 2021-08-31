import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
font-size: 14px;
font-weight: 400;
line-height: 20px;
color: #1976d2;
`;

export const StyledTitle = styled(Typography)`
font-size: 24px;
font-weight: 400;
line-height: 32px;
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 16px;
  margin-left: auto;
  min-width: 200px;
  padding: 2px 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: #1976d2;
`;

export const StyledFormContainer = styled(Container)`
  max-width: 500px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: white;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

export const StyledFormAvatar = styled(Avatar)`
  color: white;
  background-color: #1976d2;
  margin-bottom: 8px;
`;

export const StyledForm = styled.form`
width: 400px;
`;

export const StyledTextField = styled(TextField)`
display: flex;
flex-direction: column;
max-width: 400px;
margin-top: 16px;
margin-bottom: 16px;
`;

