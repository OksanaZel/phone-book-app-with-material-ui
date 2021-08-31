import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ContactListContainer, ContactListItem, StyledAvatar, StyledListItemText, StyledIconButton, StyledTitle} from "./ContactList.styled";
import { phoneBookOperations, phoneBookSelectors} from "redux/contacts";

export default function ContactList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(phoneBookOperations.fetchContacts());
    }, [dispatch]);

    const contacts = useSelector(phoneBookSelectors.getVisibleContacts);

    return (
        <>
            <StyledTitle>
            Contacts List
          </StyledTitle>
            <ContactListContainer>
                {contacts.length > 0 && contacts.map(({ id, name, number }) => (
                <ContactListItem key={id}>
                    <ListItemAvatar>
                        <StyledAvatar>
                            <AccountCircleIcon />
                        </StyledAvatar>
                    </ListItemAvatar>
                    
                    <StyledListItemText primary={name} secondary={number} />
                        
                    <StyledIconButton edge="end" aria-label="edit" /*onClick={() => dispatch(phoneBookOperations.deleteContact(id))}*/>
                       <EditIcon color="primary" fontSize="medium" />
                    </StyledIconButton>
                    
                    <StyledIconButton edge="end" aria-label="delete" onClick={() => dispatch(phoneBookOperations.deleteContact(id))}>
                        <DeleteIcon color="primary" fontSize="medium" />
                        </StyledIconButton>
                        
                    </ContactListItem>  
                ))}
            </ContactListContainer>
            </>
    )
}
