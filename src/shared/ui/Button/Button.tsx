import cls from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, memo, ReactNode} from "react";

export enum ButtonTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    CLEAR = 'clear',
}

export enum ButtonRadius{
    DEFAULT = 'default',
    SMALL = 'small',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    theme?:ButtonTheme;
    radius?: ButtonRadius;
    disabled?: boolean;
}

export const Button = memo(({className, children,onClick, theme = ButtonTheme.CLEAR, disabled,  radius = ButtonRadius.DEFAULT, ...otherProps}: ButtonProps) => {
    return (
        <button disabled={disabled} className={classNames(cls.Button, {[cls.disabled]: disabled}, [className, cls[theme], cls[radius], ])} onClick={onClick} {...otherProps}>
            {children}
        </button>
    )
})