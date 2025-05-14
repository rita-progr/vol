import cls from './CartItem.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface CartItemProps {
    className?: string;
}

export const CartItem = ({className}: CartItemProps) => {
    return (
        <div className={classNames(cls.CartItem, {}, [className])}>

        </div>
    )
}