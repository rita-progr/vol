import cls from './MapBakery.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface MapBakeryProps {
    className?: string;
}

export const MapBakery = ({className}: MapBakeryProps) => {
    return (
        <div className={classNames(cls.MapBakery, {}, [className])}>

        </div>
    )
}