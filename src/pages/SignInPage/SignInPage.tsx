import React from "react";
import {useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import SignBasePage from "../SignBasePage/SignBasePage";
import EntryForm from "./components/EntryForm";
import {useAppDispatch} from "../../hooks/store/useReduxHooks";
import {setUser} from "../../store/slices/userSlice";

const SignInPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <SignBasePage>
            <EntryForm handleClick={handleLogin} />
        </SignBasePage>
    );
};

export default SignInPage;
