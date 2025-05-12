import cls from './Input.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ChangeEvent, InputHTMLAttributes, memo} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}

export const Input = memo(({
                               className,
                               onChange,
                               placeholder,
                               type = 'text'
}: InputProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input type={type} onChange={onChangeHandler} placeholder={placeholder}/>
        </div>
    )
})