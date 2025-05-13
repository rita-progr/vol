import cls from './GoodsDetailsPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface GoodsDetailsPageProps {
    className?: string;
}

const GoodsDetailsPage = ({className}: GoodsDetailsPageProps) => {
    return (
        <div className={classNames(cls.GoodsDetailsPage, {}, [className])}>

        </div>
    )
}
export default GoodsDetailsPage;