
export type Products = {
    id: number
    name: string;
    description: string
    price: string
    images: string[]
    qty_aval: number
    shop_id: number
    shop_name: string
    category_id: number
    category_name: string
    sub_category_id: number
    sub_category_name: string
    created_at: string
    updated_at: string
};


export type UserData = {
    id: number
    lastname: string
    firstname: string
    phone: string
    address: string
    email: string
    isLoggedIn: boolean
    is_admin: boolean
    created_at: string
    updated_at: string
}

export type UserResponse = {
    data: UserData
    message: string
    status: string
    statusCode: number
    token: string
}