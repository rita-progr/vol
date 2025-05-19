import cls from './AuthorizationFormCode.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Input} from "shared/ui/Input/Input.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {Link} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {DynemicModuleLoader, ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader.tsx";
import {AuthReducer} from "features/Authorization/model/slices/AuthSlices.ts";
import {useEffect, useRef, useState} from "react";

interface AuthorizationFormCodeProps {
    className?: string;
}

const reducers: ReducersList = {
    auth: AuthReducer
}

export const AuthorizationFormCode = ({className}: AuthorizationFormCodeProps) => {
    const [code, setCode] = useState(['', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;

        if (/\d/.test(value) || value === '') {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Автофокус на следующее поле
            if (value && index < 3) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // Эффект для фокуса на первом поле при монтировании
    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    return (
        <DynemicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AuthorizationFormCode, {}, [className])}>
                <MyText text={'Введите код'}
                        size={TextSize.XMEDIUM}
                        align={TextAlign.CENTER}
                        className={cls.title}/>

                <div className={cls.code}>
                    {code.map((digit, index) => (
                        <Input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            value={digit}
                            onChange={(value) =>
                                handleChange({target: {value}} as React.ChangeEvent<HTMLInputElement>, index)
                            }
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            type="text"
                            maxLength={1}
                            className={cls.codeInput}
                            autoFocus={index === 0}
                        />
                    ))}
                </div>

                <div className={cls.btnCont}>
                    <Button theme={ButtonTheme.PRIMARY} className={cls.btn} onClick={() => console.log()}>
                        <MyText text={'Войти'} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
                    </Button>
                </div>

            </div>
        </DynemicModuleLoader>

    )
}