import axios from "axios";
import { useContext, useState } from "react";
import { urlAccounts } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthForm from "./AuthForm";
import { getClaims, saveToken } from "./HandleJWT";
import AuthenticationContext  from "./AuthenticationContext";
import { useHistory } from "react-router-dom";

export default function Register(){
    const [errors, setErrors] = useState<string[]>([]);
    const {update} = useContext(AuthenticationContext);
    const history = useHistory();

    async function register(credentials: userCredentials){
        try{
            setErrors([]);
            const response = await axios.post<authenticationResponse>(`${urlAccounts}/create`, credentials);
            saveToken(response.data);
            update(getClaims());
            history.push('/');

        }
        catch(error){
            setErrors(error.response.data);
        }
    }

    return(
        <>
            <h3>Register</h3>
            <DisplayErrors errors={errors} />
            <AuthForm
            model={{email: '', password: ''}}
            onSubmit={async values => await register(values)}
            />
        </>
    )
}