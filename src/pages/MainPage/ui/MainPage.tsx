import cls from './MainPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MainPageMain} from "./MainPageMain/MainPageMain.tsx";
import {MainPageAsync} from "./MainPageInfo/MainPage.async.tsx";
import {MainPageBakery} from "./MainPageBakery/MainPageBakery.tsx";
import {MainPageServices} from "pages/MainPage/ui/MainPageServices/MainPageServices.tsx";
import {MainPageMap} from "pages/MainPage/ui/MainPageMap/MainPageMap.tsx";


interface MainPageProps {
    className?: string;
}

const MainPage = ({className}: MainPageProps) => {
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <MainPageMain/>
            <MainPageAsync/>
            <MainPageBakery/>
            <MainPageServices/>
            <MainPageMap/>
        </div>
    )
}

export default MainPage;