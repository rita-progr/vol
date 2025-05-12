import cls from './OrderFilter.module.scss';
import {Button} from "shared/ui/Button/Button.tsx";
import Filter from 'shared/assets/icons/Filter.svg?react'
import {useCallback, useState} from "react";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";

interface OrderFilterProps {
    className?: string;
}


export const OrderFilter = ({className}: OrderFilterProps) => {

    const items = [
        {
            text: 'Готовы'
        },
        {
            text: 'В обработке'
        },
        {
            text: 'Все заказы'
        },
    ]

    const [visible, setVisible] = useState(false);


    const onClickFilter = useCallback(()=>{
        setVisible(!visible);
    },[visible])

    return (
        <div className={cls.relative}>
            <Button className={cls.btn} onClick={onClickFilter}>
                <Filter/>
            </Button>
            {visible && (
                <div className={cls.modal}>
                    {items.map(item=>(
                        <div key={item.text} className={cls.text}>
                            <MyText text = {item.text} size={TextSize.SMALL}/>
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
}