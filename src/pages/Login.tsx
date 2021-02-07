import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import { publicFetch } from '../utils/fetch';
import { useAuth } from '../context/AuthContext';
import { Redirect } from 'react-router-dom';

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
        error: {
            color: '#ff0000',
        },
    })
);

interface FormData {
    email: string;
    password: string;
}

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [redirectAfterLogin, setRedirectAfterLogin] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const auth = useAuth();
    const { register, handleSubmit, errors } = useForm<FormData>();
    const { container, form, submitButton, error } = useStyles();

    const onSubmit = async (data: FormData) => {
        try {
            setLoginError(false);
            setLoading(true);
            const response = await publicFetch.post('users/login', data);
            if (response && response.data) {
                auth.setAuthState({
                    token: response.data.idToken,
                    expiresIn: response.data.expiresIn,
                    userInfo: {
                        displayName: response.data.displayName,
                        email: response.data.email,
                    },
                });
            }
            setLoading(false);
            setRedirectAfterLogin(true);
        } catch (error) {
            setLoading(false);
            setLoginError(true);
        }
    };

    return (
        <>
            {redirectAfterLogin ? <Redirect to="/" /> : null}
            <Container className={container} maxWidth="xs">
                <form className={form} onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div>
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
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'You must provide a valid email address!',
                                },
                            })}
                            error={errors.email ? true : false}
                            helperText={errors.email ? errors.email.message : undefined}
                        />
                        <TextField
                            required
                            id="password-input"
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            inputRef={register({
                                required: 'You must provide a password.',
                                minLength: {
                                    value: 6,
                                    message: 'Your password must be greater than 6 characters',
                                },
                            })}
                            error={errors.password ? true : false}
                            helperText={errors.password ? errors.password.message : undefined}
                            fullWidth
                        />
                        <Button type="submit" fullWidth className={submitButton}>
                            {loading ? 'Loading...' : 'Login'}
                        </Button>
                        {loginError && (
                            <span className={error}>Please check your email or password.</span>
                        )}
                    </div>
                </form>
            </Container>
        </>
    );
};

export default Login;
