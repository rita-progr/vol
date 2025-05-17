import cls from './MainPageMain.module.scss';
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Button, ButtonRadius, ButtonTheme} from "shared/ui/Button/Button.tsx";
import Logo from 'shared/assets/icons/logo.svg?react';
import wheatImg from 'shared/assets/images/mainPage/wheat.png'

import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {Link} from "react-router-dom";

export const MainPageMain = () => {
    return (
        <div className={cls.MainPageMain}>
            <div className={cls.title}>
                <div className={cls.img}>
                    <img src={wheatImg} alt=""/>
                </div>
                <div className={cls.img2}>
                    <img src={wheatImg} alt=""/>
                </div>
                <div className={cls.img3}>
                    <img src={wheatImg} alt=""/>
                </div>
                <div className={cls.img4}>
                    <img src={wheatImg} alt=""/>
                </div>
                <Logo className={cls.logo}/>
                <MyText text={'Булочная Вольчека'} size={TextSize.LARGE} className={cls.text}/>
                <MyText text={'Радовать вас и ваших близких - наш конёк !'}/>
                <Link className={cls.btn} to={RoutePath.about}>
                    <Button theme={ButtonTheme.PRIMARY}  radius={ButtonRadius.SMALL} ><MyText text={'Читать подробнее'}
                                                                                                                 size={TextSize.EXTRA_SMALL}
                                                                                              className={cls.textBtn}/></Button>
                </Link>

            </div>
        </div>
    )
}