import cls from './GoodsDetailsPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {BunDetails} from "entities/BunDetails";
import {useParams} from "react-router-dom";

interface GoodsDetailsPageProps {
    className?: string;
}

const GoodsDetailsPage = ({className}: GoodsDetailsPageProps) => {
    const {id} = useParams<{id: string}>();
    if(!id){
        return null
    }
    return (
        <div className={classNames(cls.GoodsDetailsPage, {}, [className])}>
            <BunDetails/>
        </div>
    )
}
export default GoodsDetailsPage;