import cls from './GoodsDetailsPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {BunDetails} from "entities/BunDetails";
import {useNavigate, useParams} from "react-router-dom";
import Back from 'shared/assets/icons/back.svg?react'
import {useCallback} from "react";

interface GoodsDetailsPageProps {
    className?: string;
}

const GoodsDetailsPage = ({className}: GoodsDetailsPageProps) => {
    const navigate = useNavigate();

    const onNavigate = useCallback(()=>{
        navigate(-1)
    },[navigate])

    const {id} = useParams<{id: string}>();

    if(!id){
        return null
    }
    return (
        <div className={classNames(cls.GoodsDetailsPage, {}, [className])}>
            <div className={cls.flex}  onClick = {onNavigate} >
                <Back className={cls.back}/>
            </div>
            <BunDetails/>
        </div>
    )
}
export default GoodsDetailsPage;