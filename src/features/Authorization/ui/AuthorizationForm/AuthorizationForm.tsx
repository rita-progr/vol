import cls from './AuthorizationForm.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Input} from "shared/ui/Input/Input.tsx";

interface AuthorizationFormProps {
    className?: string;
}

export const AuthorizationForm = ({className}: AuthorizationFormProps) => {
    return (
        <div className={classNames(cls.AuthorizationForm, {}, [className])}>
            <MyText text = {'Вход'} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
            <Input placeholder={'Пароль'}/>
            <Input placeholder={'Логин'}/>
        </div>
    )
}