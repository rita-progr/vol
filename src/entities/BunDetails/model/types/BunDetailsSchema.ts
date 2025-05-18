import {GoodsItem} from "features/Cart";

export interface BunDetailsSchema {
    isLoading?: boolean;
    error?: string;
    buns?: GoodsItem[];
}