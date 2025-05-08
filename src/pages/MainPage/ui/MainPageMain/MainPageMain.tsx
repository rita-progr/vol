import cls from './MainPageMain.module.scss';
import bakeryImg from 'shared/assets/images/bread.png'
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import Image from 'shared/assets/icons/smth.svg?react'

export const MainPageMain = () => {
    return (
        <div className={cls.MainPageMain}>
            <img src={bakeryImg} alt="" className={cls.img}/>
            <div className={cls.title}>
                <MyText text={'Булочная Вольчека'} size={TextSize.LARGE} className={cls.text}/>
                <MyText text = {'Радовать вас и ваших близких - наш конёк !'}/>
                <Image className = {cls.icon}/>
                <Button theme = {ButtonTheme.PRIMARY} className={cls.btn} ><MyText text={'Читать подробнее'} size={TextSize.EXTRA_SMALL} className={cls.textBtn}/></Button>
            </div>
        </div>
    )
}