import cls from './MainPageServices.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import backgr from 'shared/assets/images/organic-whole-grain-baguette-placed-linen-fabric 1.jpg';
import Bread from 'shared/assets/icons/bread.svg?react';
import Cake from 'shared/assets/icons/cake.svg?react';
import Cupcake from 'shared/assets/icons/cupcake.svg?react';
import IceCream from 'shared/assets/icons/iceCream.svg?react'
import React from "react";
import {MyText, TextAlign, TextSize, TextTheme} from "shared/ui/MyText/MyText.tsx";


interface MainPageServicesProps {
    className?: string;
}

interface ItemIcons{
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
}

const items: ItemIcons[] = [
    {
        icon: Bread,
        title: 'Булочные изделия'
    },
    {
        icon: Cake,
        title: 'Торты, пироги'
    },
    {
        icon: Cupcake,
        title: 'Пирожные'
    },
    {
        icon: IceCream,
        title: 'Мороженое'
    },
]

export const MainPageServices = ({className}: MainPageServicesProps) => {
    return (
        <div className={classNames(cls.MainPageServices, {}, [className])}>
            <img src={backgr} alt="" className={cls.img}/>
            <div className={cls.container}>
                <MyText title={'Наши услуги'}
                        align={TextAlign.CENTER}
                        size={TextSize.LARGE}
                        theme={TextTheme.SECONDARY}
                        className={cls.title}/>
                <div className={cls.itemsService}>
                    {items.map(item => (
                        <div key={item.title} className={cls.item}>
                            <item.icon/>
                            <MyText text={item.title} align={TextAlign.CENTER}/>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}