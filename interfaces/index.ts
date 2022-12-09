export interface Category {
    id: string
    name: string
    description: string
    slug: string
}
export interface products {
    id: string,
    name: string,
    cantidad: number,
    categories: [string]
}

interface Metadata {
    nextPage: number
    currentPage: number
    perPage: number
}
export interface ListProductsResponse {
    data: [products] | []
    metadata: Metadata
}

export interface ListCategoriesResponse {
    data: [Category] | []
    pagination: Metadata
}