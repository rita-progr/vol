import cls from './OrderGoods.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Input} from "shared/ui/Input/Input.tsx";
import {OrderGoodsCards} from "features/OrderGoods/ui/OrderGoodsCards/OrderGoodsCards.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {ItemCard} from "../../model/types/OrderGoodsSchema.ts";
import {Modal} from "shared/ui/Modal/Modal.tsx";
import {useCallback, useState} from "react";


interface OrderGoodsProps {
    className?: string;
}

const items: ItemCard[] = [
    {
        id:1,
        title: 'Булочка',
        price: 300
    },
    {
        id:1,
        title: 'Булочка',
        price: 300
    },
    {
        id:1,
        title: 'Булочка',
        price: 300
    },

    {
        id:1,
        title: 'Булочка',
        price: 300
    },
    {
        id:1,
        title: 'Булочка',
        price: 300
    },
    {
        id:1,
        title: 'Булочка',
        price: 300
    },
    {
        id:1,
        title: 'Булочка',
        price: 300
    },

    {
        id:1,
        title: 'Булочка',
        price: 300
    },
    {
        id:1,
        title: 'Булочка',
        price: 300
    },
    {
        id:1,
        title: 'Булочка',
        price: 300
    },
    {
        id:1,
        title: 'Булочка',
        price: 300
    },

    {
        id:1,
        title: 'Булочка',
        price: 300
    },
]

export const OrderGoods = ({className}: OrderGoodsProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = useCallback(() => {
       setIsOpen(false);
    },[])

    const onOpen = useCallback(() => {
        setIsOpen(true);
    },[])

    return (
        <div className={classNames(cls.OrderGoods, {}, [className])}>
            <div className={cls.flex}>
                {/*<Input placeholder={"Введите название товара"}  className={cls.item}/>*/}
                <Button theme={ButtonTheme.PRIMARY}
                        onClick={onOpen}
                        className={cls.btn}><MyText text={'Добавить товар'} size={TextSize.SMALL}/>
                </Button>
            </div>
            <OrderGoodsCards items={items}/>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className={cls.card}>
                    <MyText text = {'Добавление товара'} size={TextSize.XMEDIUM} align={TextAlign.CENTER}/>
                    <div className={classNames(cls.flex,{},[cls.block])}>
                            <Input type={'file'} placeholder={'Выберите файл'} classNameInput = {cls.inputImg} />
                        <div className={cls.flexCol}>
                            <Input placeholder={'Введите название товара'}/>
                            <Input placeholder={'Введите описание товара'}/>
                            <div className={cls.flex}>
                                <Input placeholder={'Ккал'} classNameInput={cls.inp}/>
                                <Input placeholder={'Б'}/>
                                <Input placeholder={'Ж'}/>
                                <Input placeholder={'У'}/>
                            </div>
                            <Input placeholder={'Состав товара'}/>
                        </div>
                    </div>
                    <Button theme={ButtonTheme.PRIMARY}
                            onClick={onClose}
                            className={cls.btnForm}><MyText text={'Добавить товар'} size={TextSize.SMALL}/>
                    </Button>

                </div>
            </Modal>
        </div>
    )
}