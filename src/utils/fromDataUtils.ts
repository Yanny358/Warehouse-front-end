import { itemCreationDTO } from "../items/items.model";

export function convertItemToFormData(item: itemCreationDTO){
    console.log("in fromdatautils")
    const formData = new FormData();

    formData.append('title', item.title);

    if(item.picture){
        formData.append('picture', item.picture);
    }

    if(item.serialNumber){
        formData.append('serialNumber', String(item.serialNumber));
    }

    formData.append('storages', JSON.stringify(item.storageIds));

    return formData;
}