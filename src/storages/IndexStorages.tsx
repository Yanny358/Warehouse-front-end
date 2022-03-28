import { urlStorages } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { storageDTO } from "./storages.model";


export default function IndexStorages() {

    return (
        <IndexEntity<storageDTO> url= {urlStorages} createURL="storages/create" title="Storages"
        entityName="Storage"
        >
            {(entities, buttons) => <>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {entities?.map(entity => <tr key={entity.id}>
                        <td>
                            {buttons(`storages/edit/${entity.id}`, entity.id)}
                        </td>
                        <td>
                            {entity.title}
                        </td>
                    </tr>)}
                </tbody>
            </>}
        </IndexEntity>
    )
}
