import cls from './SideBar.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {useCallback, useEffect, useState} from "react";
import {SideBarItems} from "widgets/Sidebar/ui/SideBarItem/SideBarItems.tsx";
import {ItemsListInterface} from "../../model/types/SideBarSchema.ts";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {useSelector} from "react-redux";
import {getCollapsed} from "../../model/selectors/getSidebar.ts";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {sideBarActions} from "widgets/Sidebar";
import {Logout} from "features/Authorization";


interface SideBarProps {
    className?: string;
}

const itemsList:ItemsListInterface[] = [
    {
        id:1,
        path: RoutePath.main,
        title: 'Главная',
        className: ''
    },
    {
        id:2,
        path: RoutePath.catalog,
        title: 'Каталог товаров',
        className: ''
    },
    {
        id:3,
        path: RoutePath.cart,
        title: 'Корзина',
        className: ''
    },
    {
        id:4,
        path: RoutePath.profile,
        title: 'Профиль',
        className: ''
    },
]

const bakeryList:ItemsListInterface[] = [
    {
        id:5,
        path: RoutePath.admin,
        title: 'Админка',
        className: ''
    }
]

export const SideBar = ({className}: SideBarProps) => {
    const dispatch = useAppDispatch();
    const collapsed = useSelector(getCollapsed);
    const isBakery = localStorage.getItem("IS_BAKERY");
    const [pathList, setPathList] = useState<ItemsListInterface[]>(itemsList);

    useEffect(() => {
        if(isBakery){
            setPathList(bakeryList)
        }
    },[isBakery])


    const onCloseSideBar = useCallback(() => {
        dispatch(sideBarActions.toggleCollapsed(false))
    },[dispatch])

    return (
        <>
                <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed})}>
                <div className={cls.items}>
                    <>
                        {pathList?.map(item=>(
                            <SideBarItems key = {item.id} item={item} onClick = {onCloseSideBar}/>
                        ))}
                        <Logout/>
                    </>

               ` </div>
                </div>

        </>
    )
}