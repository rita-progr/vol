import cls from './SideBar.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {useCallback} from "react";
import {SideBarItems} from "widgets/Sidebar/ui/SideBarItem/SideBarItems.tsx";
import {ItemsListInterface} from "../../model/types/SideBarSchema.ts";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {useSelector} from "react-redux";
import {getCollapsed} from "../../model/selectors/getSidebar.ts";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {sideBarActions} from "widgets/Sidebar";

interface SideBarProps {
    className?: string;
}

const itemsList:ItemsListInterface[] = [
    {
        path: RoutePath.main,
        title: 'Главная',
        className: ''
    },
    {
        path: RoutePath.main,
        title: 'Каталог товаров',
        className: ''
    },
    {
        path: RoutePath.main,
        title: 'Корзина',
        className: ''
    },
    {
        path: RoutePath.main,
        title: 'Наши адреса',
        className: ''
    },
    {
        path: RoutePath.admin,
        title: 'Админка',
        className: ''
    },
    {
        path: RoutePath.main,
        title: 'Выйти',
        className: ''
    }
]

export const SideBar = ({className}: SideBarProps) => {
    const dispatch = useAppDispatch();
    const collapsed = useSelector(getCollapsed)

    const onCloseSideBar = useCallback(() => {
        dispatch(sideBarActions.toggleCollapsed(false))
    },[dispatch])

    return (
        <>
                <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed})}>
                    <div className={cls.items}>
                        {itemsList.map(item=>(
                            <SideBarItems item={item} onClick = {onCloseSideBar}/>
                        ))}
                    </div>

                </div>
        </>
    )
}