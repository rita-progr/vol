import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";

export enum RouteType {
    MAIN = 'main'
}

export const RoutePath: Record<RouteType,string> = {
    [RouteType.MAIN]: '/'
}

export const RouteConfig:Record<RouteType, RouteProps> = {
    [RouteType.MAIN]:{
        path:RoutePath.main,
        element:<MainPage/>
    }
}