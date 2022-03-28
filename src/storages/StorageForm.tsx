import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { storageCreationDTO, storageDTO } from "./storages.model";
import * as Yup from 'yup';

export default function StorageForm(props: storageForm) {
 
    return (
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                title: Yup.string().required('This field is required')
                .max(50, "Max length is 50 characters").firstLetterUppercase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField field="title" displayName="Title" />

                    <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    <Link className="btn btn-secondary" to="/storages"> Cancel </Link>
                </Form>
            )}

        </Formik>
    )
}

interface storageForm {
    model: storageCreationDTO;
    onSubmit(values: storageCreationDTO, actions: FormikHelpers<storageCreationDTO>): void;
}