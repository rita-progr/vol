import {rtkApi} from "shared/api/rtkApi.tsx";
import {OrderManagmentSchema} from "features/OrderManagment/model/types/orderSchema.ts";

export const OrderManagmentApi = rtkApi.injectEndpoints({
    endpoints: (build)=>({
        getAllOrders: build.query<OrderManagmentSchema, void>({
            query:()=>({
                url: '/client/get-orders',
                method: 'POST',
            })
        })
    })
})

export const { useGetAllOrdersQuery} = OrderManagmentApi;