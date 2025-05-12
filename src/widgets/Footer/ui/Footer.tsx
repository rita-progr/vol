import cls from './Footer.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface FooterProps {
    className?: string;
}

export const Footer = ({className}: FooterProps) => {
    return (
        <div className={classNames(cls.Footer, {}, [className])}>

        </div>
    )
}