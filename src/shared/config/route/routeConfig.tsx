import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AdminPanel} from "pages/AdminPanel";
import {AdminOrders} from "pages/AdminOrders";

export enum RouteType {
    MAIN = 'main',
    ADMIN = 'admin',
    ADMIN_ORDERS = 'orders',
}

export const RoutePath: Record<RouteType,string> = {
    [RouteType.MAIN]: '/',
    [RouteType.ADMIN]: '/admin',
    [RouteType.ADMIN_ORDERS]: '/admin/orders',
}

export const RouteConfig:Record<RouteType, RouteProps> = {
    [RouteType.MAIN]:{
        path:RoutePath.main,
        element:<MainPage/>
    },
    [RouteType.ADMIN]:{
        path:RoutePath.admin,
        element:<AdminPanel/>
    },
    [RouteType.ADMIN_ORDERS]:{
        path:RoutePath.orders,
        element:<AdminOrders/>
    },
}