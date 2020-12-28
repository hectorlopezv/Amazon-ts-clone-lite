import React from 'react';
import Login from '../../components/Login';
import {Link} from 'react-router-dom';
import { Form, Field, FormSpy } from 'react-final-form';
import {db, auth} from '../../lib/firebase.prod';
import {useHistory} from 'react-router-dom';



export interface LoginFormProps {
    subscription: { submitting: boolean, pristine: boolean } 
}
 
const LoginForm: React.FC<LoginFormProps> = ({children, subscription, ...props}) => {
    const history = useHistory();
    const required = (value: any) => (value ? undefined : 'Required');

    const onSubmit = async (values: any) => {
        //Sigin IN using authentication and push to Home page
        //and push to the Store! and LocalStorage
        auth.signInWithEmailAndPassword(values.Email, values.Password)
        .then((auth) => {

            const previous: any = history.location;
            console.log(previous);
            if(previous?.state?.from?.pathname === '/payment'){
                history.push('/checkout')
                return;
            }
            history.push('/');
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const onCreateAccount = (values: any) => {
        //create Account
        auth.createUserWithEmailAndPassword(values.Email, values.Password)
        .then((auth: any)=> {
            auth.user.updateProfile({
                displayName: values.Email,
            });
        })
        .then(() => {
            //put it the redux store and Local Storage
            console.log(history)    
            history.push('/');
        })
        .catch(error => {
            //put Modal for the error
            console.log(error); 
        })
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
                    <Field name="Email" validate={required} render={(props: any)=> (
                    <div>
                        <Login.Label>E-mail</Login.Label>
                        <Login.Input type="text" {...props.input}/> 
                    </div>)}/>
                    <Field name="Password" validate={required} render={(props: any)=> (
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
