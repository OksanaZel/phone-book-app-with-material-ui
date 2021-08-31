import React from "react";
import { StyledBox, StyledContainer } from "../components/App/App.styled";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import BasicModal from "../components/Modal/";

function ContactsView() {
      return (
        <StyledContainer>
          <StyledBox>
          <BasicModal/>
          <Filter />
          </StyledBox>
          <ContactList />
          </StyledContainer>
  )
}

export default ContactsView;