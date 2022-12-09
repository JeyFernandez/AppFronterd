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


interface Metadata {
    nextPage: number
    currentPage: number
    perPage: number
}
export interface ListProductsResponse {
    data: [Products] | []
    metadata: Metadata
}

export interface ListCategoriesResponse {
    data: [Category] | []
}