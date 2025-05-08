import cls from './MainPageBakery.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {BunItems} from "entities/Buns";
import {MyText, TextAlign, TextSize, TextTheme} from "shared/ui/MyText/MyText.tsx";

interface MainPageBakeryProps {
    className?: string;
}

export const MainPageBakery = ({className}: MainPageBakeryProps) => {
    return (
        <div className={classNames(cls.MainPageBakery, {}, [className])}>
            <MyText title = {'Наш хлеб'} align={TextAlign.CENTER} size={TextSize.LARGE} theme={TextTheme.SECONDARY} className={cls.text}/>
            <BunItems/>
        </div>
    )
}