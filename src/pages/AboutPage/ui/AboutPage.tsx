import cls from './AboutPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface AboutPageProps {
    className?: string;
}

const AboutPage = ({className}: AboutPageProps) => {
    return (
        <div className={classNames(cls.AboutPage, {}, [className])}>

        </div>
    )
}

export default AboutPage;