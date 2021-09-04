import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../Filter";
import BasicModal from "../Modal";
import ContactForm from "../ContactForm";
import ContactItem from "../ContactItem";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ContactListContainer, StyledTitle, StyledBox} from "./ContactList.styled";
import { phoneBookActions, phoneBookOperations, phoneBookSelectors} from "redux/contacts";

export default function ContactList() {
    const [isShowModal, setIsShowModal] = useState(false);
    const dispatch = useDispatch();
    
    const toggleModal = () => {
        setIsShowModal(!isShowModal);
        
        if (isShowModal) {
            dispatch(phoneBookActions.editContact(''));
        }
    }

    const onHandleClick = (id) => {
        dispatch(phoneBookActions.editContact(id));
        toggleModal();
    }

    useEffect(() => {
        dispatch(phoneBookOperations.fetchContacts());
    }, [dispatch]);

    const contacts = useSelector(phoneBookSelectors.getVisibleContacts);

    return (
        <>
            <StyledBox>
                <Fab onClick={toggleModal} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Filter />
            </StyledBox>

            <BasicModal open={isShowModal} onClick={toggleModal} onClose={toggleModal}>
                    <ContactForm/>
            </BasicModal>

            <StyledTitle>
            Contacts List
            </StyledTitle>
            
            <ContactListContainer>
                {contacts.length > 0 && contacts.map(({ id, name, number }) => (
                    <ContactItem key={id}
                        name={name}
                        number={number}
                        onEdit={()=>onHandleClick(id)}
                        onDelete={() => dispatch(phoneBookOperations.deleteContact(id))}
                    />))}
            </ContactListContainer>
            </>
    )
}