import React from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from "redux/auth"
import * as Yup from 'yup';
import { useFormik } from "formik";
import { StyledTitle, StyledLink, StyledButton, StyledFormContainer, StyledFormAvatar, StyledFormWrapper, StyledTextField, StyledForm } from "./LoginForm.styled";
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function LoginForm() {
  const dispatch = useDispatch();

    const formik = useFormik({
     initialValues: {
            email: '',
            password: "",
     },
     validationSchema: Yup.object({
       email: Yup.string().email('Invalid email address').required('Required'),
       password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
     }),
      onSubmit: (values, { setSubmitting, resetForm }) => {
       dispatch(authOperations.userLogIn({ email: values.email, password: values.password})),
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
          Sign in
        </StyledTitle>

        <StyledForm onSubmit={handleSubmit}>

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
          type="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
          
          <StyledButton variant="contained" type="submit" disabled={isSubmitting}>Sign In</StyledButton>

              <StyledLink to="/registration">
                {"Don't have an account? Sign Up"}
          </StyledLink>
            
        </StyledForm>
        </StyledFormWrapper>
    </StyledFormContainer>
  );
}

export default LoginForm;
