import cls from './OrderGoodsCards.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CardWithPin} from "shared/ui/CardWithPin/CardWithPin.tsx";
import {ItemCard} from "../../model/types/OrderGoodsSchema.ts";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";

interface OrderGoodsCardProps {
    className?: string;
    items?: ItemCard[];
}

export const OrderGoodsCards = ({className, items}: OrderGoodsCardProps) => {
    return (
        <div className={classNames(cls.OrderGoodsCard, {}, [className])}>
            {items && items.length > 0 ? (
                items.map((item) => (
                    <CardWithPin className={cls.pin} key = {item.id}>
                        {item.img ? <img src={item.img} alt="карточка товара" className={cls.img}/> : <div className={cls.mockImg}/>}
                        <MyText text={item.title} size={TextSize.MEDIUM}/>
                        <MyText text={`${item.price.toString()} р`} size={TextSize.SMALL}/>
                        <Button className={cls.btn} theme={ButtonTheme.PRIMARY}><MyText text={'Удалить товар'} size={TextSize.SMALL} align={TextAlign.CENTER}/></Button>
                    </CardWithPin>
                ))
            ):(
                <MyText title={'Упс ! Товары не найдены'} size={TextSize.XMEDIUM} align={TextAlign.CENTER}/>
            )}

        </div>
    )
}