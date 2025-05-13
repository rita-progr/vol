import cls from './GoodsPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useNavigate, useParams} from "react-router-dom";
import {BunItems} from "entities/Buns";
import {MyText, TextAlign, TextSize, TextTheme} from "shared/ui/MyText/MyText.tsx";
import {usePrintTitle} from "shared/lib/hooks/usePrintTitle.tsx";
import Back from 'shared/assets/icons/back.svg?react'
import {useCallback} from "react";

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

    if(!id){
        return null;
    }

    return (
        <div className={classNames(cls.GoodsPage, {}, [className])}>
            <Back onClick = {onNavigate} />
            <MyText title={title}
                    size = {TextSize.LARGE}
                    align={TextAlign.CENTER}
                    theme = {TextTheme.SECONDARY}
                    className={cls.text}/>
            <BunItems/>
        </div>
    )
}
export default GoodsPage