import {rtkApi} from "shared/api/rtkApi.tsx";

const CardApi = rtkApi.injectEndpoints({
    endpoints: (build)=>({
        getCart: build.mutation({
            query:()=>({
                url: '/client/get-info',
                method: 'POST',
            })
        })
    })
})

export const {
    useGetCartMutation
} = CardApi