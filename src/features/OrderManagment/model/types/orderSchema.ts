export interface OrderManagmentSchema {
    isLoading?: boolean;
    error?: string | null;

}

export interface IOrder{
    id: number;
    orderNumber: number;
    time?: string;
    ingredients?: string[];
    price: number;
    status?: string;
}

/**
 * сделаю через ids[]
 * */