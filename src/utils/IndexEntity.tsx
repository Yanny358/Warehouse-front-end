import axios, { AxiosResponse } from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import GenericList from "./GenericList";

export default function IndexEntity<T>(props: indexEntityProps<T>) {

    const [entities, setEntities] = useState<T[]>();

    useEffect(() => {
        loadData();
    }, []);

    function loadData(){
        axios.get(props.url)
            .then((response: AxiosResponse<T[]>) => {
                setEntities(response.data);
            })
    }

    async function deleteEntity(id: number) {
        try{
            await axios.delete(`${props.url}/${id}`);
            loadData();
        }
        catch(error : any){
            if(error && error.response){
                console.error(error.response.data);
            }
        }
        
    }

    const buttons = (editUrl: string, id: number) => <>
        <Link className="btn btn-success" to={editUrl}>Edit</Link>
        <Button onClick={(() => deleteEntity(id))} className="btn btn-danger">Delete</Button>
    </>

    return (
        <>
            <h3>{props.title}</h3>
            {props.createURL ? <Link className="btn btn-primary" to={props.createURL}>Create {props.entityName}</Link> : null}
            

            <GenericList list={entities}>
                <table className="table table-striped">
                    {props.children(entities!, buttons)}
                </table>

            </GenericList>

        </>

    )
}

interface indexEntityProps<T> {
    url: string;
    createURL?: string;
    title: string;
    entityName?: string;
    children(entities: T[],
        buttons: (editUrl: string, id: number) => ReactElement): ReactElement;
}