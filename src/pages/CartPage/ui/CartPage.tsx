import cls from './CartPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";

interface CartPageProps {
    className?: string;
}

const CartPage = ({className}: CartPageProps) => {
    return (
        <div className={classNames(cls.CartPage, {}, [className])}>
            <MyText title={'Корзина'} size = {TextSize.LARGE}/>
        </div>
    )
}
export default CartPage;