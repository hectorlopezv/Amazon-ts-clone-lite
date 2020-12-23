import React from 'react';
import Login from '../../components/Login';
import {Link} from 'react-router-dom';
import { Form, Field, FormSpy } from 'react-final-form';
export interface LoginFormProps {
    subscription: { submitting: boolean, pristine: boolean } 
}
 
const LoginForm: React.FC<LoginFormProps> = ({children, subscription, ...props}) => {
    const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))
     const required = (value: any) => (value ? undefined : 'Required');
    const onSubmit = async (values: any) => {
        //Sigin IN using authentication
        console.log(values);
        await sleep(300)
        window.alert(JSON.stringify(values))
    }

    const onCreateAccount = (values: any) => {
        //create Account
        console.log(values);
    }
    return (  
    <Login>
        <Link to="/">
            <Login.Image  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="image"/>
        </Link>
        <Login.Frame>
            <Login.Title>Sign In</Login.Title>

            <Form
                onSubmit={onSubmit}
                subscription={subscription}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="firstName" validate={required} render={(props: any)=> (
                    <div>
                        <Login.Label>E-mail</Login.Label>
                        <Login.Input type="text" {...props.input}/> 
                    </div>)}/>
                    <Field name="lastName" validate={required} render={(props: any)=> (
                    <div>
                        <Login.Label>Password</Login.Label>
                        <Login.Input type="password" {...props.input}/> 
                    </div>)} />
                    <Login.Button type="submit" disabled={submitting || pristine}>
                        Sign In
                    </Login.Button>
                    <Login.Text>
                        By signing-in you agree to the AMAZON UI CLONE  Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </Login.Text>

                    <Login.Button type="button" disabled={submitting || pristine} onClick={() => onCreateAccount(form.getState().values)}>
                        Create your Amazon Account
                    </Login.Button>
                </form>
                )}
            />

        </Login.Frame>
    </Login>);
}
 
export default LoginForm;
