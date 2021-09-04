import React from "react";
import PropTypes from 'prop-types';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ContactListItem, StyledAvatar, StyledListItemText, StyledIconButton} from "./ContactItem.styled";

function ContactItem({name, number, onDelete, onEdit}) {
    return (
        <ContactListItem>
                    <ListItemAvatar>
                        <StyledAvatar>
                            <AccountCircleIcon />
                        </StyledAvatar>
                    </ListItemAvatar>
                    
                    <StyledListItemText primary={name} secondary={number} />
                        
                    <StyledIconButton edge="end" aria-label="edit" onClick={onEdit}>
                       <EditIcon color="primary" fontSize="medium" />
                        </StyledIconButton>
                    
                    <StyledIconButton edge="end" aria-label="delete" onClick={onDelete}>
                        <DeleteIcon color="primary" fontSize="medium" />
                        </StyledIconButton>
                        
                    </ContactListItem>  
    )
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default ContactItem;
