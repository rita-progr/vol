import cls from './ProfileCard.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {CardWithPin} from "shared/ui/CardWithPin/CardWithPin.tsx";

interface ProfileCardProps {
    className?: string;
    avatar?: string;
    firstName?: string;
}

export const ProfileCard = ({className, avatar, firstName}: ProfileCardProps) => {
    return (
        <CardWithPin className={classNames(cls.ProfileCard, {}, [className])}>
            {avatar ? <img src={avatar} className={cls.img} alt=""/> : <div className={cls.mockAvatar}/>}
            {firstName && firstName?.length > 0 ? <MyText text={firstName}
                                                          size={TextSize.LARGE}
                                                          align={TextAlign.CENTER}/> : null}

        </CardWithPin>
    )
}