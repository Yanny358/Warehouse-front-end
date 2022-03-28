import { storageDTO } from "../storages/storages.model";

export interface itemDTO{
    id: number;
    title: string;
    picture: string;
    
}

export interface itemCreationDTO{
    title: string;
    picture?: File;
    pictureURL?: string;
    serialNumber?: number;
    storageIds?: number[];
}

export interface itemsPostGetDTO{
    storages: storageDTO[];
}