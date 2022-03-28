export interface storageDTO{
    id: number;
    title: string;
}


export interface storageCreationDTO {
    title: string;
    itemIds?: number[];
    storageIds?: number[];
}

export interface landingPageDTO {
    inWarehouse?: storageDTO[];
}
