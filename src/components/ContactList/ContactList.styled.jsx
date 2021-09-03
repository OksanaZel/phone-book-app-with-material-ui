import styled from "@emotion/styled/macro";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

export const StyledTitle = styled(Typography)`
text-align: center;
font-size: 26px;
font-weight: 500;
line-height: 32px;
`;

export const StyledIconButton = styled(IconButton)`
&:not(:last-child){
  margin-right: 15px;
}
`;

export const StyledListItemText = styled(ListItemText)`
text-align: center;
`;


export const StyledAvatar = styled(Avatar)`
background-color: #1976d3;
`;

export const ContactListContainer = styled(List)`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export const ContactListItem = styled(ListItem)`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
max-width: 450px;
`;