import cls from './BunItems.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Card} from "shared/ui/Card/Card.tsx";
import {useCallback} from "react";

interface BunItemsProps {
    className?: string;
}

const items = [
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи'
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи'
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи'
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи'
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи'
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи'
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи'
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи'
    },
    {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи'
    },
]

export const BunItems = ({className}: BunItemsProps) => {

 const addItemToCart = useCallback(()=>{
     console.log('click')
 },[])
    return (
        <div className={classNames(cls.BunItems, {}, [className])}>
            {items && items.map(item=>(
                <Card title={item.title} description={item.description} key={item.id} addItemToCart={addItemToCart}/>
            ))}
        </div>
    )
}