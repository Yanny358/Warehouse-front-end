import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import { itemCreationDTO } from "./items.model";
import ImageField from "../forms/ImageField";
import MultipleSelector, { multipleSelectorModel } from "../forms/MultipleSelector";
import { useState } from "react";
import { storageDTO } from "../storages/storages.model";


export default function ItemForm(props: itemFormProps) {

    const[selectedStorages, setSelectedStorages] = useState(mapToModel(props.selectedStorages));
    const[nonSelectedStorages, setNonSelectedStorages] = useState(mapToModel(props.nonSelectedStorages));

    function mapToModel(items:{id: number, title: string}[]): multipleSelectorModel[]{
        console.log('GOT HERE')
        return items.map(item => {
            return {key: item.id, value: item.title}
        })
    }

    return (
        <Formik initialValues={props.model}
            onSubmit={(values, actions) => {
                values.storageIds = selectedStorages.map(item => item.key);
                props.onSubmit(values, actions)
            }}

            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUppercase()
            })}
        >

            {(formikProps) => (
                <Form>
                    <TextField field="title" displayName="Title" />
                    <TextField field="serialNumber" displayName="Serial Number" />
                    <ImageField displayName="Picture" field="picture" imageURL={props.model.pictureURL} />

                    <MultipleSelector
                    displayName="Storages"
                    nonSelected={nonSelectedStorages}
                    selected={selectedStorages}
                    onChange={(selected, nonSelected) =>{
                        setSelectedStorages(selected);
                        setNonSelectedStorages(nonSelected);
                    }}
                    />


                    <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    <Link className="btn btn-secondary" to="/items"> Cancel </Link>
                </Form>
            )}

        </Formik>
    )
}

interface itemFormProps {
    model: itemCreationDTO;
    onSubmit(values: itemCreationDTO, actions: FormikHelpers<itemCreationDTO>): void;
    selectedStorages: storageDTO[];
    nonSelectedStorages: storageDTO[];
}