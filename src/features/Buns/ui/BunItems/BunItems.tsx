import cls from './BunItems.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {Card} from "shared/ui/Card/Card.tsx";
import {GoodsItem} from "features/Cart";
import {Link} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";


interface BunItemsProps {
    className?: string;
    addItemToCart:(item: GoodsItem) => void;
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

export const BunItems = ({className, addItemToCart}: BunItemsProps) => {
    return (
        <div className={classNames(cls.BunItems, {}, [className])}>
            {items && items.map(item=>(
                <Link to = {`${RoutePath.goods_details}${item.id}`} key={item.id}>
                    <Card title={item.title} description={item?.description ?? ''} key={item.id} addItemToCart={()=>addItemToCart(item)}/>
                </Link>
            ))}
        </div>
    )
}