import cls from './CartPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {CartList} from "features/Cart";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {useState} from "react";
import {PlaceAnOrder} from "features/PlaceAnOrder";
import {SelectBakery} from "entities/Bakery";
import {useFetchOrderMutation} from "pages/CartPage/api/OrderApi.tsx";

interface CartPageProps {
    className?: string;
}

const CartPage = ({className}: CartPageProps) => {
    const [addOrder, {isLoading}] = useFetchOrderMutation();
    const [open, setOpen] = useState(false);
    return (
        <div className={classNames(cls.CartPage, {}, [className])}>
            <MyText title={'Корзина'} size = {TextSize.LARGE} className={cls.title}/>
             <CartList className={cls.select}/>
            <SelectBakery />
            <Button theme={ButtonTheme.PRIMARY} className={cls.btn} >
                <MyText text={'Оформить заказ'} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
            </Button>
            <PlaceAnOrder isOpen={open} onClose={()=>setOpen(false)}/>
        </div>
    )
}
export default CartPage;