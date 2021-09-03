import styled from '@emotion/styled';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export const StyledTitle = styled(Typography)`
font-size: 24px;
font-weight: 400;
line-height: 32px;
`;

export const StyledBox = styled(Box)`
display: flex;
align-items: center;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
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
  max-width: 600px;
  padding: 24px;
  background-color: white;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
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

