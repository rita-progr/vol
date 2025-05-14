import cls from './AuthorizationFormRegister.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Input} from "shared/ui/Input/Input.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {Link} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";

interface AuthorizationFormProps {
    className?: string;
}

export const AuthorizationFormRegister = ({className}: AuthorizationFormProps) => {
    return (
        <div className={classNames(cls.AuthorizationForm, {}, [className])}>
            <MyText text = {'Регистрация'}
                    size={TextSize.XMEDIUM}
                    align={TextAlign.CENTER}
                    className={cls.title}/>
            <Input placeholder={'example@mail.ru'} label={'Введите почту'}/>
            <Input placeholder={'1234567890'} label={'Введите пароль'}/>
            <Input placeholder={'1234567890'} label={'Повторите пароль'}/>
            <div className={cls.btnCont}>
                <Button theme={ButtonTheme.PRIMARY} className={cls.btn}>
                    <MyText text={'Войти'} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
                </Button>
                <div className={cls.text}>
                    <MyText text={'Уже есть аккаунт? '} size={TextSize.EXTRA_SMALL}/>
                    <div className={cls.links}>
                        <Link to = {RoutePath.login} >
                            <MyText text={'Войти'} size={TextSize.EXTRA_SMALL} className={cls.textLink}/>
                        </Link>
                        /
                        <MyText text={'Войти как пекарня'} size={TextSize.EXTRA_SMALL} className={cls.textLink}/>
                    </div>

                </div>
            </div>

        </div>
    )
}