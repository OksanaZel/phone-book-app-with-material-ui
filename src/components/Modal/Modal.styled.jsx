import styled from '@emotion/styled';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: #fff;
  box-shadow: 0px 4px 10px #1976d2;
  padding: 32px;
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
`

