import { urlStorages } from "../endpoints";
import EditEntity from "../utils/EditEntity";
import StorageForm from "./StorageForm";
import { storageCreationDTO, storageDTO } from "./storages.model";


export default function EditStorage() {

    return (
        <>
            <EditEntity<storageCreationDTO, storageDTO>
                url={urlStorages} indexURL="/storages" entityName="Storage"
            >

                {(entity, edit) =>
                    <StorageForm model={entity}
                        onSubmit={async values => await edit(values)} />
                }
            </EditEntity>
        </>
    )
}