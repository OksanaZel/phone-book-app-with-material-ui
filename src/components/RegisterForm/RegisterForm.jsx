import React from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from "redux/auth";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { StyledTitle, StyledLink, StyledButton, StyledFormContainer, StyledFormAvatar, StyledFormWrapper, StyledTextField, StyledForm } from "../LoginForm/LoginForm.styled";
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function RegisterForm() {
  const dispatch = useDispatch();

    const formik = useFormik({
     initialValues: {
            name: '',
            email: '',
            password: "",
     },
     validationSchema: Yup.object({
       name: Yup.string().required('Required'),
       email: Yup.string().email('Invalid email address').required('Required'),
       password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
     }),
      onSubmit: (values, { setSubmitting, resetForm }) => {
        console.log(values);
       dispatch(authOperations.userRegistration({ name: values.name, email: values.email, password: values.password})),
         setSubmitting(false),
         resetForm()
     },
   });
    const { handleSubmit, handleChange, isSubmitting, values, touched, errors } = formik;
  return (
    <StyledFormContainer>
      <CssBaseline />
      <StyledFormWrapper>
        
        <StyledFormAvatar>
          <LockOutlinedIcon />
        </StyledFormAvatar>

        <StyledTitle>
          Sign Up
        </StyledTitle>

        <StyledForm onSubmit={handleSubmit}>

          <StyledTextField
          fullWidth
          id="name"
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
          id="email"
          name="email"
          type="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
           
          <StyledTextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
          
          <StyledButton variant="contained" type="submit" disabled={isSubmitting}>Sign Up</StyledButton>

          <StyledLink to="/login">
                {"Already have an account? Sign In"}
          </StyledLink>

        </StyledForm>
        </StyledFormWrapper>
    </StyledFormContainer>
  );
}

export default RegisterForm;
