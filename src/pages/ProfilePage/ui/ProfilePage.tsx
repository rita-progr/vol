import cls from './ProfilePage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ProfileCard} from "entities/Profile";
import {CardWithPin} from "shared/ui/CardWithPin/CardWithPin.tsx";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import Time from 'shared/assets/icons/time.svg?react';
import Cart from 'shared/assets/icons/card.svg?react'
import {Link} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <ProfileCard firstName={"Рита"} className={cls.card}/>
            <div className={cls.card}>
                <CardWithPin className={cls.history}>
                    <MyText text={"История заказов"} size={TextSize.LARGE}/>
                    <Time/>
                </CardWithPin>
                <Link to={RoutePath.cart}  className={cls.history} >
                    <CardWithPin className={cls.history}>
                        <MyText text={"В корзину"} size={TextSize.LARGE}/>
                        <Cart className = {cls.cart}/>
                    </CardWithPin>
                </Link>

            </div>
        </div>
    )
}
export default ProfilePage;