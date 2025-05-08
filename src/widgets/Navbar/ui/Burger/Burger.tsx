import cls from './Burger.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface BurgerProps {
    className?: string;
}

export const Burger = ({className}: BurgerProps) => {
    return (
        <div className={classNames(cls.Burger, {}, [className])}>
            <span className={cls.line}></span>
            <span className={cls.line}></span>
            <span className={cls.line}></span>
        </div>
    )
}