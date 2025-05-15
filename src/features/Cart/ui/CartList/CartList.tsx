import cls from './CartList.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CartItem} from "features/Cart/ui/CartItem/CartItem.tsx";
import {GoodsItem} from "features/Cart";

interface CartListProps {
    className?: string;
}

const items:GoodsItem[] = [
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
        img:'',
        price: 500,
        protein: 30,
        fats: 30,
        carb: 100
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
        img:'',
        price: 500,
        protein: 30,
        fats: 30,
        carb: 100
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
        img:'',
        price: 500,
        protein: 30,
        fats: 30,
        carb: 100
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
        img:'',
        price: 500,
        protein: 30,
        fats: 30,
        carb: 100
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
        img:'',
        price: 500,
        protein: 30,
        fats: 30,
        carb: 100
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
        img:'',
        price: 500,
        protein: 30,
        fats: 30,
        carb: 100
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
        img:'',
        price: 500,
        protein: 30,
        fats: 30,
        carb: 100
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
        img:'',
        price: 500,
        protein: 30,
        fats: 30,
        carb: 100
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
        img:'',
        price: 500,
        protein: 30,
        fats: 30,
        carb: 100
    },
]

export const CartList = ({className}: CartListProps) => {
    return (
        <div className={classNames(cls.CartList, {}, [className])}>
            {items.map((item: GoodsItem) => (
                <CartItem item={item} key = {item.id} />
            ))}
        </div>
    )
}