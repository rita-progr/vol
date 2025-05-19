import {rtkApi} from "shared/api/rtkApi.tsx";

const AuthorizationApi = rtkApi.injectEndpoints({
    endpoints:(build) => ({
        registerUser: build.mutation({
            query:({email, password})=>({
                url: '/auth/sign-up',
                method: 'POST',
                body: {
                    "info":{
                        email,
                        password
                    }
                },

            })
        }),
        fetchConfirmCode: build.query({
            query: (email)=>({
                url:'/auth/send-code',
                method: 'POST',
                body: {email}
            })
        }),
        loginUser: build.mutation({
            query:({email, password})=>({
                url: '/auth/login',
                method: 'POST',
                body: {
                    email,
                    password
                }
            })
        }),
    })
})

export const {
    useRegisterUserMutation,
    useFetchConfirmCodeQuery,
    useLoginUserMutation
} = AuthorizationApi