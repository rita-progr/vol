import cls from './MainPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MainPageMain} from "./MainPageMain/MainPageMain.tsx";
import {MainPageAsync} from "./MainPageInfo/MainPage.async.tsx";
import {MainPageBakery} from "./MainPageBakery/MainPageBakery.tsx";
import {ServiceList} from "widgets/ServiceList";
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
            <ServiceList/>
            <MainPageMap/>
        </div>
    )
}

export default MainPage;