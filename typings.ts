

export type Product = {
    id: number;
    name: string;
    description: string
    price: string
    image: string
    qty_aval: number
    shop_name: string
    category_name: string
    sub_category_name: string
};

export type Item = {
    id: number;
    name: string;
    description: string
    price: string
    totalPrice: string
    image: string
    count: number
    shop_name: string
    category_name: string
    sub_category_name: string
};

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
    lastname: string
    firstname: string
    phone: string
    address: string
    email: string
    isLoggedIn: string
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

export type Paginations = {
    Page: number
    Limit: number
}

export type Shipping = {
    lastname: string
    firstname: string
    phone: string
    address: string
    city: string
    state: string
    postal_code: string
    country: string
}

export type PaystackConfig = {
    reference: string
    email: string
    amount: number  // amount must be in Kobo
    publicKey: string
}