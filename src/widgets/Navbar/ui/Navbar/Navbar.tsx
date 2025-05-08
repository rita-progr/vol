import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Burger} from "../Burger/Burger.tsx";
import Logo from 'shared/assets/icons/logo.svg?react';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Logo className = {cls.logo}/>
            <Burger/>
        </div>
    )
}