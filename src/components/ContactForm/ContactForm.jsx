import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { phoneBookOperations, phoneBookSelectors } from "redux/contacts";
import * as Yup from 'yup';
import { useFormik } from "formik";
import CssBaseline from '@material-ui/core/CssBaseline';
import { StyledTitle, StyledButton, StyledFormContainer, StyledFormWrapper, StyledTextField, StyledForm, StyledBox } from "./ContactForm.styled";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(phoneBookSelectors.getContacts);

   const formik = useFormik({
     initialValues: {
       name: '',
       number: '',
     },
     validationSchema: Yup.object({
       name: Yup.string()
         .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
           'Name can only consist of letters, apostrophes, dashes and spaces.')
         .notOneOf(contacts.map(contact => contact.name), "This contact is already exist in your list")
         .required('Required'),
       number: Yup.string()
         .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +')
         .required('Required'),
     }),
     onSubmit: (values, { setSubmitting, resetForm }) => {
       dispatch(phoneBookOperations.addContact({ name: values.name, number: values.number })),
         setSubmitting(false),
         resetForm()
     },
   });
  
  const { resetForm, handleSubmit, handleChange, isSubmitting, values, touched, errors } = formik;
  return (
    <StyledFormContainer>
      <CssBaseline />
      <StyledFormWrapper>

        <StyledTitle>
          Add contact
        </StyledTitle>

        <StyledForm onSubmit={handleSubmit}>

          <StyledTextField
          fullWidth
          name="name"
          type="text"
          label="Name"
          value={values.name}
          onChange={handleChange}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />

          <StyledTextField
          fullWidth
          name="number"
          type="text"
          label="Number"
          value={values.number}
          onChange={handleChange}
          error={touched.number && Boolean(errors.number)}
          helperText={touched.number && errors.number}
          />

          <StyledBox>
            <StyledButton variant="contained" type="button" onClick={resetForm}>Reset form</StyledButton>
            <StyledButton variant="contained" type="submit" disabled={isSubmitting}>Add contact</StyledButton>
          </StyledBox>

        </StyledForm>
        </StyledFormWrapper>
    </StyledFormContainer>
  );
}