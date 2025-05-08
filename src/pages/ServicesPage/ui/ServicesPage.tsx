import cls from './ServicesPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface ServicesPageProps {
    className?: string;
}

export const ServicesPage = ({className}: ServicesPageProps) => {
    return (
        <div className={classNames(cls.ServicesPage, {}, [className])}>

        </div>
    )
}