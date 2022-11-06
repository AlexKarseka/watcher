import React from "react";

const useValidationForm = (email: string, pass: string) => {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const emailValid = EMAIL_REGEXP.test(email);

    const passValid = () => {
        if (pass.length < 6) {
            return false;
        } else {
            return true;
        }
    };

    return {
        emailValid,
        passValid
    }
}

export default useValidationForm;
