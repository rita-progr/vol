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
        id,
        className,
        createdAt,
        price,
        status,
        orderInfo,
    } = props;

    return (
        <div className={classNames(cls.orderCard, {}, [className])}>
            <PushPin className = {cls.pushPin}/>
            <PinPain className = {cls.pinPain}/>
                <MyText text = {`Номер заказа: ${id}`} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
                <MyText text = {`Время заказа: ${createdAt}`} size={TextSize.SMALL} align={TextAlign.CENTER}/>
                <div className={cls.flex}>
                    <MyText text = {`Детали заказа:`} size={TextSize.SMALL} align={TextAlign.CENTER}/>
                    {orderInfo && orderInfo.map(item=>(
                        <MyText text ={`${item.name} - ${item.quantity} шт.`}/>
                    ))}
                </div>

                <MyText text = {`Цена заказа: ${price} р`} size={TextSize.SMALL} align={TextAlign.CENTER}/>
                <MyText text = {`Статус заказа:`}
                        size={TextSize.SMALL}
                        align={TextAlign.CENTER}/>
                <Button className={classNames(cls.btn, {})}
                >
                    <MyText text={status} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
                </Button>
        </div>
    )
}