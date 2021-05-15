import React, { Fragment } from 'react'

import {Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';

function Login() {

    const {register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data:any) => {
        console.log(data)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid   
                    container   
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center">
                    <Grid item xs={12}>
                        <h1>Login</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email" {...register("email",{required:{
                            value:true, 
                            message:"The email is required"
                        }})}/> 
                        <br/>
                        <span>{errors.email?.type === 'required' && errors.email.message}</span>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type="password" {...register("password",{
                            required:{
                                value:true,
                                message:"The password is required"
                            }
                            })}/> 
                        <br/>
                        <span>{errors.password?.type === 'required' && errors.password.message}</span>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                        Primary
                    </Button>
                </Grid>
            </form>
        </Fragment>
    )
}

export default Login;