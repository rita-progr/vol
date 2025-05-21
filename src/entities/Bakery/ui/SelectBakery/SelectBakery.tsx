import cls from './SelectBakery.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CustomSelect} from "shared/ui/CustomSelect/CustomSelect.tsx";
import { useBakeryListQuery} from "entities/Bakery/api/BakeryApi.tsx";
import {useEffect, useState} from "react";
import {IBakery} from "../../model/types/BakerySchema.ts";
import {LoadingPage} from "pages/LoadingPage";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {AuthActions} from "features/Authorization";
import {useSelector} from "react-redux";
import {getAuthBakeryId} from "features/Authorization/model/selectors/authSelectors.ts";

interface SelectBakeryProps {
    className?: string;
}

const menuItems = [
    {
        id: 'Пекарня1',
        address: 'Пекарня1'
    },
    {
        id: 'Пекарня2',
        address: 'Пекарня2'
    },
    {
        id: 'Пекарня3',
        address: 'Пекарня3'
    },
    {
        id: 'Пекарня4',
        address: 'Пекарня4'
    }
]

export const SelectBakery = ({className}: SelectBakeryProps) => {
    const {isLoading, data} = useBakeryListQuery();
    const dispatch = useAppDispatch();
    const value = useSelector(getAuthBakeryId)
    // const [selectedValue, setSelectedValue] = useState<string>(menuItems[0].id);
    const [menuItems, setMenuItems] = useState<IBakery[]>()

    useEffect(()=>{
        if(data){
            setMenuItems(data?.bakery)
        }
    },[data])

    const handleChange = (value: string) => {
        // setSelectedValue(value);
        console.log(value)
        dispatch(AuthActions.setBakeryId(value));
    };

    if(isLoading){
        return <LoadingPage/>
    }

    return (
        <CustomSelect onChange={handleChange} label={'Выберите пекарню'} menuItems={menuItems} value={value}/>
    )
}