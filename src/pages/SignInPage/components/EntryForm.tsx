import React from "react";
import { Link } from "react-router-dom";

import useValidationForm from "../../../hooks/useValidationForm";

interface EntryFormProps {
    handleClick: (email: string, pass: string) => void;
}

const EntryForm = ({handleClick}: EntryFormProps) => {
    const [email, setEmail] = React.useState<string>('');
    const [pass, setPass] = React.useState<string>('');

    const {emailValid, passValid} = useValidationForm(email, pass);

    return (
        <div className="relative -top-[50px] mx-auto">
            <div className="flex flex-col items-center justify-center mb-4">
                <div className="text-3xl pb-4 text-white">Logging into your account</div>
                <div className="text-sm text-white">
                    Log in to access your subscription and favourites list
                </div>
            </div>

            <div
                className="flex flex-col justify-center border border-[#565c67] bg-[rgba(31,33,37,.8)] rounded-lg px-8 max-w-sm mx-auto h-96"
            >
                <form>
                    <div className="mb-4">
                        <input
                            className={
                                `${email.length < 8 ? ''
                                    : emailValid ? 'border border-green-600' : 'border border-red-600'} 
                            w-full h-10 py-2.5 px-4 bg-[rgba(17,17,19,.8)] rounded text-sm text-white outline-none`}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            className={
                                `${pass.length < 5 ? ''
                                    : passValid() ? 'border border-green-600' : 'border border-red-600'}
                            w-full h-10 py-2.5 px-4 bg-[rgba(17,17,19,.8)] rounded text-sm text-white outline-none`}
                            type="password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <button
                        className="flex items-center justify-center h-10 w-full mb-6 rounded-lg text-base bg-[#565c67] hover:opacity-80"
                        type="button"
                        onClick={() => handleClick(email, pass)}
                    >
                        Log in
                    </button>
                </form>

                <div className="flex justify-center items-center text-sm text-white">
                    <div>Don't have an account?</div>
                    <Link className="ml-1.5 text-[#feba2b]" to="/signup">Sign up!</Link>
                </div>
            </div>
        </div>
    );
};

export default EntryForm;
