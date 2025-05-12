import cls from './ordersList.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {OrderCard} from "../orderCard/orderCard.tsx";
import {IOrder} from "../../model/types/orderSchema.ts";

interface ordersListProps {
    className?: string;
}

const items: IOrder[] = [
    {
        id:1,
        ingredients: ['Булка', 'Булка'],
        time:'2022-01-31 18:00',
        orderNumber: 555,
        price: 400,
        status: 'Готово',
    },
    {
        id:1,
        ingredients: ['Булка', 'Булка'],
        time:'2022-01-31 18:00',
        orderNumber: 555,
        price: 400,
        status: 'Готово',
    },
    {
        id:1,
        ingredients: ['Булка', 'Булка'],
        time:'2022-01-31 18:00',
        orderNumber: 555,
        price: 400,
        status: 'Готово',
    },
    {
        id:1,
        ingredients: ['Булка', 'Булка'],
        time:'2022-01-31 18:00',
        orderNumber: 555,
        price: 400,
        status: 'Готово',
    },
    {
        id:1,
        ingredients: ['Булка', 'Булка'],
        time:'2022-01-31 18:00',
        orderNumber: 555,
        price: 400,
        status: 'Готово',
    },
    {
        id:1,
        ingredients: ['Булка', 'Булка'],
        time:'2022-01-31 18:00',
        orderNumber: 555,
        price: 400,
        status: 'Готово',
    },
    {
        id:1,
        ingredients: ['Булка', 'Булка'],
        time:'2022-01-31 18:00',
        orderNumber: 555,
        price: 400,
        status: 'Готово',
    },
{
    id:1,
        ingredients: ['Булка', 'Булка'],
    time:'2022-01-31 18:00',
    orderNumber: 555,
    price: 400,
    status: 'Готово',
}
]

export const OrdersList = ({className}: ordersListProps) => {

    return (
        <div className={classNames(cls.ordersList, {}, [className])}>
            {items && items.map(item=>(
                <OrderCard key={item.id} orderNumber={item.orderNumber} price={item.price}
                           ingredients={item.ingredients} status={item.status} time={item.time} id={item.id}/>
            ))}
        </div>
    )
}