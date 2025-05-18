
export interface GoodsItem{
    id: number;
    img?: string;
    title: string;
    price: number;
    count?: number;
    description?: string;
    protein?: number;
    fats?: number;
    carb?: number;
    calories?: number;
    composition?: string;
}

export interface CartSchema {
    isLoading: boolean;
    error?: string|null;
    goods: GoodsItem[];

}