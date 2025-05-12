import cls from './CartIcon.module.scss';
import CardIcon from 'shared/assets/icons/card.svg?react'
import {classNames} from "shared/lib/classNames/classNames";
import {memo} from "react";

interface CartIconProps {
    className?: string;
    onClick: () => void;
}

export const CartIcon = memo(({className, onClick}: CartIconProps) => {
    return (
        <div className={cls.icon} onClick={onClick}>
            <CardIcon className={cls.iconSvg}/>
        </div>
    )
})