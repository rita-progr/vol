import cls from './orderCard.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import PushPin from 'shared/assets/icons/pushpin.svg?react'
import PinPain from 'shared/assets/icons/pinPain.svg?react';
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Button} from "shared/ui/Button/Button.tsx";
import {IOrder} from "../../model/types/orderSchema.ts";

interface orderCardProps extends IOrder{
    className?: string;
}

export const OrderCard = (props: orderCardProps) => {

    const {
        className,
        orderNumber,
        time,
        price,
        status,
        ingredients,
    } = props;

    return (
        <div className={classNames(cls.orderCard, {}, [className])}>
            <PushPin className = {cls.pushPin}/>
            <PinPain className = {cls.pinPain}/>
                <MyText text = {`Номер заказа: ${orderNumber}`} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
                <MyText text = {`Время заказа: ${time}`} size={TextSize.SMALL} align={TextAlign.CENTER}/>
                <MyText text = {`Детали заказа: ${ingredients}`} size={TextSize.SMALL} align={TextAlign.CENTER}/>
                <MyText text = {`Цена заказа: ${price}`} size={TextSize.SMALL} align={TextAlign.CENTER}/>
                <MyText text = {`Статус заказа:`} size={TextSize.SMALL} align={TextAlign.CENTER}/>
                <Button className={cls.btn}>
                    <MyText text={status} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
                </Button>
        </div>
    )
}