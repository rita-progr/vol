import cls from './Footer.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";

interface FooterProps {
    className?: string;
}

const catalog = ['Булочные изделия','Торты, пироги', 'Пирожные', 'Мороженое', 'Напитки']

export const Footer = ({className}: FooterProps) => {
    return (
        <div className={classNames(cls.Footer, {}, [className])}>
            <div className={cls.footerItem}>
                <MyText text={"Каталог"} size={TextSize.MEDIUM} className={cls.title}/>
                {catalog.map(ct => (
                    <MyText text={ct} key={ct} size={TextSize.SMALL}/>
                ))}
            </div>
            <div className={cls.footerItem}>
                <MyText text={"Наша компания"} size={TextSize.MEDIUM} className={cls.title}/>
                    <MyText text={'О нас'} size={TextSize.SMALL}/>
            </div>
            <div className={cls.footerItem}>
                    <MyText text={"Контакты"} size={TextSize.MEDIUM} className={cls.title}/>
                    <MyText text={'+7 927 710-95-23'}  size={TextSize.SMALL}/>
                    <MyText text={'feedback@mail.ru'}  size={TextSize.SMALL}/>
            </div>
        </div>
    )
}