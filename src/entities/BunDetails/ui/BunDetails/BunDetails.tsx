import cls from './BunDetails.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface BunDetailsProps {
    className?: string;
}

export const BunDetails = ({className}: BunDetailsProps) => {
    return (
        <div className={classNames(cls.BunDetails, {}, [className])}>

        </div>
    )
}