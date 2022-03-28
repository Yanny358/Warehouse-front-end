import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlItems } from "../endpoints";
import { storageDTO } from "../storages/storages.model";
import DisplayErrors from "../utils/DisplayErrors";
import { convertItemToFormData } from "../utils/fromDataUtils";
import Loading from "../utils/Loading";
import ItemForm from "./ItemForm";
import { itemCreationDTO, itemsPostGetDTO } from "./items.model";

export default function CreateItem() {
    
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState<string[]>([]);
    const history = useHistory();
    const [nonSelectedStorages, setNonSelectedStorages] = useState<storageDTO[]>([]);
    console.log("IN CREATE ITEM");
useEffect(() =>{
    axios.get(`${urlItems}/postget`).then((response: AxiosResponse<itemsPostGetDTO>) => {
        setNonSelectedStorages(response.data.storages);
        setLoading(false);
        
    })
}, [])

    async function create(item: itemCreationDTO){
        try{
            const formData = convertItemToFormData(item);
            const response = await axios({
                method: 'post',
                url: urlItems,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            })
            history.push(`/item/${response.data}`);

        } catch(error : any) {
            setErrors(error.response.data)
        }
    }

    return (
        <>
            <h3>Create Item</h3>
            <DisplayErrors errors={errors} />
            {loading ? <Loading /> :
            <ItemForm model={{title: ''}}
                onSubmit={async values => await create(values)}
                nonSelectedStorages={nonSelectedStorages}
                selectedStorages={[]}
            /> }
        </>
    )
}