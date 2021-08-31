import styled from "@emotion/styled";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

export const StyledBox = styled(Box)`
display: flex;
padding-left: 24px;
padding-right: 24px;
justify-content: space-around;
margin-bottom: 25px;
`;

export const StyledContainer = styled(Container)`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
`;


export const MainPageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
export const MainPageImg = styled.img`

`;

export const MainPageTitle = styled.h1`
font-weight: 600;
margin-bottom: 24px;
color: #00276a;
`;
