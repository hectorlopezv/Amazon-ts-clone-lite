import {auth, } from '../lib/firebase.prod';
import {useEffect, useState, useCallback} from 'react'
import {useDispatch} from 'react-redux';
import {addBasket} from '../store/Actions/User';

const useAuthListener = () => {
    const [user, setuser] = useState<string | null>(JSON.stringify(localStorage.getItem('authUser') ?? '' )  )
    const dispatch = useDispatch();
    const user_login = useCallback((user: any) => dispatch(addBasket(user)), [dispatch]);
    //Mount Listener and Unmount Listener
    useEffect(() => {
        const listener = auth.onAuthStateChanged((AuthUser: any) => {//listener executes alwalys on change
            console.log('NETRO AL MENOS');
            if(AuthUser){
                console.log('ENTRO 1')
                //the user just loggin ind / the useer was loggedin
                localStorage.setItem('authUser', JSON.stringify(AuthUser.providerData));
                setuser(AuthUser.providerData);
                //update Redux Store
                user_login(AuthUser);
            }
            else {
                console.log('entro 2')
                //the user is logout
                localStorage.removeItem('authUser');
                setuser(null);
                user_login(null);
            }
        });
        //unmount Listener when component its umounted
        return () => listener();
    }, [user_login]);

    return [user];
}

export default useAuthListener;