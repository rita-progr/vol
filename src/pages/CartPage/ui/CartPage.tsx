import cls from './CartPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import {CartList} from "features/Cart";

interface CartPageProps {
    className?: string;
}

const CartPage = ({className}: CartPageProps) => {
    return (
        <div className={classNames(cls.CartPage, {}, [className])}>
            <MyText title={'Корзина'} size = {TextSize.LARGE} className={cls.title}/>
             <CartList/>
        </div>
    )
}
export default CartPage;