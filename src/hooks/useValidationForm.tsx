const useValidationForm = (email: string, pass: string) => {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const emailValid = EMAIL_REGEXP.test(email);

    const passValid = () => {
        return pass.length >= 6;
    };

    return {
        emailValid,
        passValid
    }
}

export default useValidationForm;
