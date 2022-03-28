import { Form, Formik } from "formik"
import Button from "../utils/Button"

export default function FilterItems() {

    const initialValues: filterItemsForm = {
        title: '',
        serialNumber: 0
    }

    return (
        <>
            <h3>Filter Items</h3>
            <Formik initialValues={initialValues}
                onSubmit={values => console.log(values)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="row gx-3 align-items-center">
                            <div className="col-auto">
                                <input type="text" className="form-control" id="title"
                                    placeholder="Title of the item"
                                    {...formikProps.getFieldProps("title")}
                                />
                            </div>
                            <div className="col-auto">
                                <input type="text" className="form-control" id="serialNumber"
                                    placeholder="Serial number of the item"
                                    {...formikProps.getFieldProps("serialNumber")}
                                />
                            </div>
                            <div className="col-auto">
                                <Button className="btn btn-primary"
                                    onClick={() => formikProps.submitForm()}
                                >Filter</Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

interface filterItemsForm {
    title: string;
    serialNumber: number;

}