import cls from './HistoryOrderPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {HistoryOrder} from "features/HistoryOrder";

interface HistoryOrderPageProps {
    className?: string;
}

const HistoryOrderPage = ({className}: HistoryOrderPageProps) => {
    return (
        <div className={classNames(cls.HistoryOrderPage, {}, [className])}>
            <HistoryOrder/>
        </div>
    )
}

export default HistoryOrderPage;