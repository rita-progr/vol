import cls from './SelectBakery.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CustomSelect} from "shared/ui/CustomSelect/CustomSelect.tsx";

interface SelectBakeryProps {
    className?: string;
}

const menuItems = [
    {
        value: 'Пекарня1',
        text: 'Пекарня1'
    },
    {
        value: 'Пекарня2',
        text: 'Пекарня2'
    },
    {
        value: 'Пекарня3',
        text: 'Пекарня3'
    },
    {
        value: 'Пекарня4',
        text: 'Пекарня4'
    },
    {
        value: 'Пекарня5',
        text: 'Пекарня5'
    },

    {
        value: 'Пекарня6',
        text: 'Пекарня6'
    },  {
        value: 'Пекарня7',
        text: 'Пекарня7'
    },

    {
        value: 'Пекарня8',
        text: 'Пекарня8'
    },
]

export const SelectBakery = ({className}: SelectBakeryProps) => {

    return (
        <CustomSelect onChange={(a)=>console.log(a)} label={'Выберите пекарню'} menuItems={menuItems} value={''}/>
    )
}