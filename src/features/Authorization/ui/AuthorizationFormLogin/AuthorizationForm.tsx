import cls from './AuthorizationForm.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Input} from "shared/ui/Input/Input.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {Link} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {DynemicModuleLoader, ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader.tsx";
import {AuthActions, AuthReducer} from "../../model/slices/AuthSlices.ts";
import {useCallback, useEffect, useState} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {useSelector} from "react-redux";
import {getAuthEmail, getAuthPassword, getValidateError} from "../../model/selectors/authSelectors.ts";
import {validateAuthForm} from "../../model/services/validateData/validateData.tsx";
import {useDebounce} from "shared/lib/hooks/useDebounce.tsx";
import {useLoginUserMutation} from "../../api/AuthorizationApi.tsx";
import Cookies from "js-cookie";
import {USER_COOKIES_KEY} from "shared/const/const.ts";
import {LoadingPage} from "pages/LoadingPage";

interface AuthorizationFormProps {
    className?: string;
}

const reducers: ReducersList = {
    auth: AuthReducer
}

export const AuthorizationForm = ({className}: AuthorizationFormProps) => {
    const dispatch = useAppDispatch();
    const [localEmail,setLocalEmail] = useState<string>();
    const [localPassword,setLocalPassword] = useState<string>();
    const email = useSelector(getAuthEmail);
    const password = useSelector(getAuthPassword);
    const validateError = useSelector(getValidateError);
    const debouncedEmail = useDebounce(localEmail, 2000)
    const debouncedPassword = useDebounce(localPassword, 2000)
    const [loginUser, { isLoading, isError }] = useLoginUserMutation();

    useEffect(() => {
        if(debouncedEmail !== ''){
            dispatch(AuthActions.setEmail(debouncedEmail ?? ''))
        }else{
            dispatch(AuthActions.setEmail(''))
        }
    },[debouncedEmail, dispatch])

    useEffect(() => {
        if(debouncedPassword !== ''){
            dispatch(AuthActions.setPassword(debouncedPassword ?? ''))
        }else{
            dispatch(AuthActions.setPassword(''))
        }
    },[debouncedPassword, dispatch])

    const handleEmailChange = useCallback((email: string) => {
        setLocalEmail(email);
        const errors = validateAuthForm({ email, password });
        dispatch(AuthActions.setErrors({ ...validateError, email: errors.email }));
    },[dispatch, password, validateError])

    const handlePasswordChange = useCallback((password: string) => {
        setLocalPassword(password);
        const errors = validateAuthForm({ email, password });
        dispatch(AuthActions.setErrors({ ...validateError, password: errors.password }));
    },[dispatch, email, validateError])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email, password }).unwrap();
            Cookies.set(USER_COOKIES_KEY, response.token)
        } catch (error) {
            console.error('Ошибка входа', error);
        }
    };

    if(isLoading){
       return <LoadingPage/>
    }

    return (
        <DynemicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AuthorizationForm, {}, [className])}>
                <MyText text={'Вход в систему'}
                        size={TextSize.XMEDIUM}
                        align={TextAlign.CENTER}
                        className={cls.title}/>
                <Input placeholder={'example@mail.ru'}
                       label={'Введите почту'}
                       error={validateError && validateError?.email || ''}
                       onChange={handleEmailChange}
                       value={email}/>
                <Input placeholder={'1234567890'}
                       label={'Введите пароль'}
                       error={validateError && validateError?.password || ''}
                       onChange={handlePasswordChange}
                       value={password}
                />
                <div className={cls.btnCont}>
                    <Button theme={ButtonTheme.PRIMARY} className={cls.btn} onClick={handleSubmit}>
                        <MyText text={'Войти'} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
                    </Button>
                    <div className={cls.text}>
                        <MyText text={'Еще не зарегистрированы? '} size={TextSize.EXTRA_SMALL}/>
                        <Link to={RoutePath.register}>
                            <MyText text={'Регистрация'} size={TextSize.EXTRA_SMALL} className={cls.textLink}/>
                        </Link>
                    </div>
                </div>

            </div>
        </DynemicModuleLoader>

    )
}