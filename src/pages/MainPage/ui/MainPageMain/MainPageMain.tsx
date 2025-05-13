import cls from './MainPageMain.module.scss';
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import Logo from 'shared/assets/icons/logo.svg?react'

export const MainPageMain = () => {
    return (
        <div className={cls.MainPageMain}>
            <div className={cls.title}>
                <Logo className={cls.logo}/>
                <MyText text={'Булочная Вольчека'} size={TextSize.LARGE} className={cls.text}/>
                <MyText text = {'Радовать вас и ваших близких - наш конёк !'}/>
                <Button theme = {ButtonTheme.PRIMARY} className={cls.btn} ><MyText text={'Читать подробнее'} size={TextSize.EXTRA_SMALL} className={cls.textBtn}/></Button>
            </div>
        </div>
    )
}