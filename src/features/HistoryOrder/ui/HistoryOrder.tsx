import cls from './HistoryOrder.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import bun from 'shared/assets/images/bun.png'

interface HistoryOrderProps {
    className?: string;
}

export const HistoryOrder = ({className}: HistoryOrderProps) => {
    return (
        <div className={classNames(cls.HistoryOrder, {}, [className])}>
            <img src={bun} alt="" className={cls.bunItem}/>
        </div>
    )
}