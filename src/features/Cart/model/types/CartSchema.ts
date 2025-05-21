
export interface GoodsItem{
    id: string;
    photo?: string;
    name: string;
    price: string;
    count?: string;
    description?: string;
    proteins?: string;
    fats?: string;
    carbohydrates?: string;
    calories?: string;
    composition?: string;
}

export interface CartSchema {
    isLoading: boolean;
    error?: string|null;
    goods: GoodsItem[];

}