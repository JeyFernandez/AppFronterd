export interface Category {
    id: string
    name: string
    description: string
    slug: string
}
export interface Products {
    id: string
    name: string
    detalle: string
    catidad: number
}
export interface Clients {
    id: string
    name: string
    avatar: string

}


interface Metadata {
    nextPage: number
    currentPage: number
    perPage: number
}
export interface ListProductsResponse {
    data: [Products] | []
    metadata: Metadata
}
export interface ListClinetsResponse {
    data: [Clients] | []
    metadata: Metadata
}

export interface ListCategoriesResponse {
    data: [Category] | []
}