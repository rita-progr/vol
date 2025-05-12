import cls from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, memo, ReactNode} from "react";

export enum ButtonTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    theme?:ButtonTheme;
}

export const Button = memo(({className, children,onClick, theme = ButtonTheme.CLEAR}: ButtonProps) => {
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} onClick={onClick}>
            {children}
        </button>
    )
})