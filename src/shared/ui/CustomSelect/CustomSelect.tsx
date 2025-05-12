import cls from './CustomSelect.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

export interface IMenuItem{
    value: string;
    text: string;
}

interface CustomSelectProps {
    className?: string;
    value?: string;
    onChange: (value: string) => void;
    label: string;
    menuItems?: IMenuItem[]
}

export const CustomSelect = ({className, value, onChange, label, menuItems}: CustomSelectProps) => {

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value);
    };

    return (
        <div className={classNames(cls.CustomSelect, {}, [className])}>
            <Box sx={{ minWidth: 350, width: '100%' }} >
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                    <Select
                        labelId="select-label"
                        className={cls.select}
                        id="simple-select"
                        value={value}
                        label={label}
                        onChange={handleChange}
                    >
                        {menuItems && menuItems.map((item)=>(
                            <MenuItem value={item.value} className={cls.selectItem}>{item.text}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}