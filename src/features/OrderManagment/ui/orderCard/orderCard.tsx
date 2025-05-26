import cls from './orderCard.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import PushPin from 'shared/assets/icons/pushpin.svg?react'
import PinPain from 'shared/assets/icons/pinPain.svg?react';
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Button} from "shared/ui/Button/Button.tsx";
import {IOrder, StatusEnum} from "../../model/types/orderSchema.ts";
import {useChangeStatusMutation} from "../../api/OrderManagmentApi.tsx";
import {useCallback, useState} from "react";
import {LoadingPage} from "pages/LoadingPage";

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

    const [localStatus, setLocalStatus] = useState(status);

    const [changeStatus,{isLoading, isError}] = useChangeStatusMutation();

    const onChangeStatus = useCallback(async (id: string) => {
        const newStatus = localStatus === StatusEnum.PENDING
            ? StatusEnum.READY
            : StatusEnum.PENDING;

        setLocalStatus(newStatus);

        try {
            const response = await changeStatus({ id, status: newStatus }).unwrap();
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    }, [changeStatus, localStatus]);

    if(isLoading){
        return <LoadingPage/>
    }

    if(isError){
        return <MyText text={'Произошла ошибка'} size={TextSize.USERNAME} align={TextAlign.CENTER}/>
    }
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
                <Button
                    className={classNames(cls.btn, {})}
                    onClick={()=>onChangeStatus(id)}
                >
                    <MyText text={status} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
                </Button>
        </div>
    )
}