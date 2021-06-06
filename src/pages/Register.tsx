import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Button,
  Container,
  Checkbox,
  TextField,
  Link,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { publicFetch } from '../utils/fetch';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      backgroundColor: '#fff',
      padding: theme.spacing(3),
      borderRadius: theme.shape.borderRadius,
      marginTop: theme.spacing(-5),
      boxShadow: '0px 0px 16px 16px rgba(0, 0, 0, 0.04)',
      '& .MuiTextField-root': {
        margin: theme.spacing(1, 0, 2, 0),
      },
    },
    submitButton: {
      backgroundColor: 'var(--primary-bg)',
      marginTop: theme.spacing(3),
      color: theme.palette.primary.main,
      textTransform: 'capitalize',
    },
    emailverify: {
      textAlign: 'center',
      padding: '20px',
      margin: '10px',
    },
    error: {
      color: '#ff0000',
      padding: '5px',
      textAlign: 'center',
    },
    success: {
      color: '#4355b7',
      padding: '5px',
      textAlign: 'center',
    },
    textField: {
      width: '100%',
      margin: '1rem 0rem',
    },
  })
);

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAndConditionChecked: boolean;
}

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [redirectAfterRegisteration, setRedirectAfterRegisteration] = useState(false);
  const [registerationStatus, setRegisterationStatus] = useState('');
  const [registerationStatusCode, setRegisterationStatusCode] = useState(0);

  const { register, handleSubmit, errors } = useForm<FormData>();
  const { container, form, submitButton, error, emailverify, textField, success } = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAndConditionChecked, setTermsAndConditions] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState('');

  const onSubmit = async (data: FormData) => {
    const custData = {
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      termsAndConditionChecked,
    };

    try {
      if (data.password === data.confirmPassword) {
        setRegisterationStatus('Password match. Go ahead and register!!');
        setRegisterationStatusCode(200);
      } else {
        throw new Error("Password don't match.!!");
      }
      setLoading(true);
      const response = await publicFetch.post('users/register', custData);
      console.log(response); // eslint-disable-line no-console

      if (response && response.data) {
        setVerifyEmail(response.data.verify_link);
        setRegisterationStatus(response.data.message);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);

      if (err.response !== undefined) {
        setRegisterationStatus(err.response.data.message);
        setRegisterationStatusCode(err.response.data.status);
      } else if (err.message !== undefined) {
        setRegisterationStatus(err.message);
        setRegisterationStatusCode(450);
      }
    }
  };
  return (
    <>
      {redirectAfterRegisteration ? <Redirect to="/" /> : null}
      <Container className={container} maxWidth="xs">
        <form className={form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <TextField
              required
              fullWidth
              id="name-input"
              label="Name"
              type="text"
              name="name"
              variant="outlined"
              autoComplete="name"
              inputRef={register({
                required: 'You must provide the name!',
                pattern: {
                  value: /^([^0-9_]*)$/,
                  message: 'You must provide a valid name!',
                },
              })}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : undefined}
            />
            <TextField
              required
              fullWidth
              id="username-input"
              label="Username"
              type="text"
              name="username"
              variant="outlined"
              autoComplete="name"
              inputRef={register({
                required: 'You must provide the username!',
                pattern: {
                  value: /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,
                  message: 'You must provide a valid username!',
                },
              })}
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : undefined}
            />
            <TextField
              required
              fullWidth
              id="email-input"
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              autoComplete="email"
              inputRef={register({
                required: 'You must provide the email address!',
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line max-len
                  message: 'You must provide a valid email address!',
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : undefined}
            />
            <FormControl className={textField} variant="outlined">
              <InputLabel htmlFor="password-input">Password</InputLabel>
              <OutlinedInput
                required
                id="password-input"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                labelWidth={70}
                inputRef={register({
                  required: 'You must provide a password.',
                  minLength: {
                    value: 6,
                    message: 'Your password must be greater than 6 characters',
                  },
                })}
                error={!!errors.password}
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className={textField} variant="outlined">
              <InputLabel htmlFor="confirm-password-input">Confirm Password</InputLabel>
              <OutlinedInput
                required
                id="confirm-password-input"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="confirm-password"
                labelWidth={133}
                inputRef={register({
                  required: 'You must provide a password.',
                  minLength: {
                    value: 6,
                    message: 'Your password must be greater than 6 characters',
                  },
                })}
                error={!!errors.confirmPassword}
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {errors.confirmPassword ? errors.confirmPassword.message : undefined}
            </FormControl>
            <Checkbox
              color="primary"
              name="termsAndConditionChecked"
              onChange={() => setTermsAndConditions(!termsAndConditionChecked)}
              required
            />
            <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
            <label>Accept terms and conditions </label>
            <Button type="submit" fullWidth className={submitButton}>
              {loading ? 'Loading...' : 'Register'}
            </Button>
            {verifyEmail ? (
              <div className={emailverify}>
                <Link
                  rel="noopener noreferrer"
                  href={verifyEmail}
                  target="_blank"
                  onClick={() => setRedirectAfterRegisteration(true)}
                >
                  Click here to verify your Email
                </Link>
              </div>
            ) : null}
            {registerationStatus && (
              <div className={registerationStatusCode === 200 ? success : error}>
                <p>{registerationStatus}</p>
              </div>
            )}
          </div>
        </form>
      </Container>
    </>
  );
};

export default Register;
