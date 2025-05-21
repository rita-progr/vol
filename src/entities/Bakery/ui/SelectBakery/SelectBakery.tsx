import cls from './SelectBakery.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CustomSelect} from "shared/ui/CustomSelect/CustomSelect.tsx";
import { useBakeryListQuery} from "entities/Bakery/api/BakeryApi.tsx";
import {useCallback, useEffect, useState} from "react";
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
    const [menuItems, setMenuItems] = useState<IBakery[]>()
    const [selectedValue, setSelectedValue] = useState<string>(value);


    useEffect(()=>{
        if(data){
            setMenuItems(data?.bakery)
        }
    },[data])

    const handleChange = useCallback((value: string) => {
        dispatch(AuthActions.setBakeryId(value));
        setSelectedValue(value);

    },[dispatch]);

    if(isLoading){
        return <LoadingPage/>
    }

    return (
        <CustomSelect onChange={handleChange} label={'Выберите пекарню'} menuItems={menuItems} value={selectedValue}/>
    )
}