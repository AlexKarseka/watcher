import { useAppSelector } from "./useReduxHooks";

const useAuth = () => {
    const {email, token, id} = useAppSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
};

export default useAuth;