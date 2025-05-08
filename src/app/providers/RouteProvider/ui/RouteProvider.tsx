import {Route, RouteProps, Routes, useLocation} from "react-router-dom";
import {Suspense, useCallback} from "react";
import './RouteProvider.scss';
import {RouteConfig} from "shared/config/route/routeConfig.tsx";


export const RouteProvider = () => {
    const location = useLocation();

    const renderWithRouter = useCallback((route: RouteProps)=>{
        const element = (
            <Suspense fallback={'loading...'}>
                <div key = {location.pathname} className={'fade-in'}>
                    {route.element}
                </div>
            </Suspense>
        )
        return (
            <Route key = {route.path} path={route.path} element={element} />
        )
    }, [location.pathname])

    return (
            <Routes location={location} key = {location.pathname}>
                {Object.values(RouteConfig).map(renderWithRouter)}
            </Routes>
    )
}