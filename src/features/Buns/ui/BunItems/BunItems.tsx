import cls from './BunItems.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {Card} from "shared/ui/Card/Card.tsx";
import {GoodsItem} from "features/Cart";
import {Link} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {useGetBunsMutation} from "features/Buns/api/BunsApi.tsx";
import {LoadingPage} from "pages/LoadingPage";
import {useEffect, useState} from "react";


interface BunItemsProps {
    className?: string;
    addItemToCart:(item: GoodsItem) => void;
    category:string;
}

// const items:GoodsItem[] = [
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
// ]

export const BunItems = ({className, addItemToCart, category}: BunItemsProps) => {
    const [getBuns, {isLoading, data}] = useGetBunsMutation();
    const [items, setItems] = useState<GoodsItem[]>([]);
    console.log(data)

    useEffect(()=>{
        getBuns(category);
    },[category, getBuns])

    useEffect(() => {
        if(data){
            setItems(data.menu)
            console.log('jij' + data)
        }
    }, [data]);

    if(isLoading){
        return <LoadingPage/>
    }

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