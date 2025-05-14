import {StateSchema, ThunkExtraArgs} from "./StateSchema.ts";
import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {sideBarReducer} from "widgets/Sidebar";
import {createReducerManager} from "./reduxManager.ts";
import {$api} from "shared/api/api.ts";
import {CartReducer} from "features/Cart";

export const createReduxStore = (initialState?: StateSchema, asyncReducers?:  ReducersMapObject<StateSchema>)=>{

    const extraArg: ThunkExtraArgs = {
        api: $api,
    }

    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        sideBar: sideBarReducer,
        cart: CartReducer
    }

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: import.meta.env.DEV,
        preloadedState:initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        })
    });
    //@ts-expect-error: This is a temporary workaround for a known issue
    store.reducerManager = reducerManager;
    return store;
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']