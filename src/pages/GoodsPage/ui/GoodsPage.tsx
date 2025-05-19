import cls from './GoodsPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useNavigate, useParams} from "react-router-dom";
import {BunItems} from "features/Buns";
import {MyText, TextAlign, TextSize, TextTheme} from "shared/ui/MyText/MyText.tsx";
import {usePrintTitle} from "shared/lib/hooks/usePrintTitle.tsx";
import Back from 'shared/assets/icons/back.svg?react'
import {useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {CartActions, GoodsItem} from "features/Cart";

interface GoodsPageProps {
    className?: string;
}



const GoodsPage = ({className}: GoodsPageProps) => {
    const {id} = useParams<{id: string}>();
    const title = usePrintTitle(id);
    const navigate = useNavigate();

    const onNavigate = useCallback(()=>{
        navigate(-1)
    },[navigate])

    const dispatch = useAppDispatch();

    const addItemToCart = useCallback((item: GoodsItem)=>{
        dispatch(CartActions.addItem(item))
    },[dispatch])

    if(!id){
        return null;
    }



    return (
        <div className={classNames(cls.GoodsPage, {}, [className])}>
            <div className={cls.flex} onClick={onNavigate}>
                <Back className={cls.back}/>
                {/*<MyText text={'Назад'} size={TextSize.EXTRA_SMALL} theme={TextTheme.SECONDARY}/>*/}
            </div>
            <MyText title={title}
                    size={TextSize.LARGE}
                    align={TextAlign.CENTER}
                    theme={TextTheme.SECONDARY}
                    className={cls.text}/>
            <BunItems addItemToCart={addItemToCart}/>
        </div>
    )
}
export default GoodsPage