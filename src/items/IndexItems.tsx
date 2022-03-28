import { Link } from "react-router-dom";

export default function IndexItems(){
    return(
        <>
        <h3>Items</h3>
        <Link className="btn btn-primary" to="/items/create">Create item</Link>
        </>
    )
}