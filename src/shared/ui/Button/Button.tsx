import cls from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, ReactNode} from "react";

export enum ButtonTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    theme?:ButtonTheme;
}

export const Button = ({className, children, theme = ButtonTheme.CLEAR}: ButtonProps) => {
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])}>
            {children}
        </button>
    )
}