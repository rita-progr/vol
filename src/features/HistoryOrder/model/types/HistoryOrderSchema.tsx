interface OrderInfo{
    name:string;
    quantity: string;
}

export interface HistoryOrderSchema {
    id: string;
    orderInfo:OrderInfo[];
    price:string;
    createdAt: string;
}