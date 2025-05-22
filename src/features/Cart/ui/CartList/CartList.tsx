import cls from './CartList.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {GoodsItem} from "features/Cart";
import {MyText, TextAlign} from "shared/ui/MyText/MyText.tsx";
import {useState} from "react";
import {useGetCartQuery} from "features/Cart/api/CartApi.tsx";
import {useSelector} from "react-redux";
import {StateSchema} from "app/providers/StoreProvider";
import {LoadingPage} from "pages/LoadingPage";
import {CartItem} from "features/Cart/ui/CartItem/CartItem.tsx";

interface CartListProps {
    className?: string;
}

// const items:GoodsItem[] = [
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         calories: 400,
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

export const CartList = ({className}: CartListProps) => {
    // const [items, setItems] = useState<GoodsItem[]>([]);
    const localId = localStorage.getItem("cartProductIds") || ""
    const idProduct: string[] = JSON.parse(localId);
    const {data, isLoading} = useGetCartQuery(idProduct);

    console.log(data)
    if(isLoading){
        return <LoadingPage/>
    }
    return (
        <div className={classNames(cls.CartList, {}, [className])}>
            {data && data?.resp &&  data?.resp.length > 0 ? null :  <MyText text = {'Товары еще не добавлены в корзину'} align={TextAlign.CENTER}/>}
            {data?.resp.map((item: GoodsItem) => (
                <CartItem item={item} key = {item.id} />
            ))}
        </div>
    )
}