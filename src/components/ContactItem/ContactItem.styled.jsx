import styled from "@emotion/styled/macro";
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

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

export const ContactListItem = styled(ListItem)`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
max-width: 450px;
`;