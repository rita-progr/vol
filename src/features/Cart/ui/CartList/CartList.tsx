import cls from './CartList.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface CartListProps {
    className?: string;
}

export const CartList = ({className}: CartListProps) => {
    return (
        <div className={classNames(cls.CartList, {}, [className])}>

        </div>
    )
}