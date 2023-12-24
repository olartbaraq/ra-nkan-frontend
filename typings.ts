
export type Search = {
    id: number
    name: string
    description: string
    price: string,
    image: string
    qty_aval: number,
    shop_id: number,
    shop_name: string,
    category_id: number,
    category_name: string,
    sub_category_id: number,
    sub_category_name: string,
    created_at: string,
    updated_at: String
};


export type SearchResult = {
    search : Search[]
};
