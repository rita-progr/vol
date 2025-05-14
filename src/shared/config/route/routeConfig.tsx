import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AdminPanel} from "pages/AdminPanel";
import {AdminOrders} from "pages/AdminOrders";
import {CategoryPage} from "pages/CategoryPage";
import {GoodsPage} from "pages/GoodsPage";
import {GoodsDetailsPage} from "pages/GoodsDetailsPage";
import {LoginPage} from "pages/LoginPage";

export enum RouteType {
    MAIN = 'main',
    ADMIN = 'admin',
    ADMIN_ORDERS = 'orders',
    CATALOG = 'catalog',
    GOODS = 'goods',
    GOODS_DETAILS = 'goods_details',
    LOGIN = 'login',
}

export const RoutePath: Record<RouteType,string> = {
    [RouteType.MAIN]: '/',
    [RouteType.ADMIN]: '/admin',
    [RouteType.ADMIN_ORDERS]: '/admin/orders',
    [RouteType.CATALOG]: '/catalog',
    [RouteType.GOODS]: '/catalog/goods/',
    [RouteType.GOODS_DETAILS]: '/catalog/goods_details/', //:id
    [RouteType.LOGIN]: '/login',
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
    [RouteType.CATALOG]:{
        path:RoutePath.catalog,
        element:<CategoryPage/>
    },
    [RouteType.GOODS]:{
        path:`${RoutePath.goods}:id`,
        element:<GoodsPage/>
    },
    [RouteType.GOODS_DETAILS]:{
        path:`${RoutePath.goods_details}:id`,
        element:<GoodsDetailsPage/>
    },
    [RouteType.LOGIN]:{
        path:`${RoutePath.login}`,
        element:<LoginPage/>
    },
}