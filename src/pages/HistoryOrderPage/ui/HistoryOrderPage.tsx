import cls from './HistoryOrderPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface HistoryOrderPageProps {
    className?: string;
}

const HistoryOrderPage = ({className}: HistoryOrderPageProps) => {
    return (
        <div className={classNames(cls.HistoryOrderPage, {}, [className])}>

        </div>
    )
}

export default HistoryOrderPage;