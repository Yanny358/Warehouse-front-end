import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlStorages } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import StorageForm from "./StorageForm";
import { storageCreationDTO, storageDTO } from "./storages.model";

export default function CreateStorage() {
    const history = useHistory();
    const [errors, setErrors] = useState<string[]>([]);

    async function create(storage: storageCreationDTO) {
        try{
            await axios.post(urlStorages, storage);
            history.push('/storages')
        }
        catch (error : any) {
            if(error && error.response){
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Create Storage</h3>

            <DisplayErrors errors={errors} />
            <StorageForm model={{title: '' }}
                onSubmit={async value => {
                    await create(value);
                }}
                
            />
        </>
    )
}