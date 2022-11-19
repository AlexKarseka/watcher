import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../../hooks/store/useReduxHooks";
import { setUser } from "../../store/slices/userSlice";

import SignBasePage from "../SignBasePage/SignBasePage";
import RegisterForm from "./components/RegisterForm";

const SignUpPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch(console.error)
    }

    return (
        <SignBasePage>
            <RegisterForm handleClick={handleRegister} />
        </SignBasePage>
    );
};

export default SignUpPage;
