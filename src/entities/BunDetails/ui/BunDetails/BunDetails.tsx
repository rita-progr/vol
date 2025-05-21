import cls from './BunDetails.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {GoodsItem} from "features/Cart";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";

interface BunDetailsProps {
    className?: string;
    id?: string;
}

const item:GoodsItem = {
        id:123232,
        title: 'Булочка',
        description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
        img:'',
        price: 500,
        proteins: 30,
        calories: 400,
        fats: 30,
        carbohydrates: 100,
        composition: 'Вода, соль, масло'
    }


export const BunDetails = ({className, id}: BunDetailsProps) => {
    const {img, carbohydrates, fats, proteins, title, description, price, calories, composition} = item;
    if(!item){
        return   <div className={classNames(cls.BunDetails, {}, [className])}>
                    <MyText title={'Товар не найден'} size={TextSize.XMEDIUM}/>
                 </div>
    }

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.BunDetails}>
                {img && img.length > 0 ? <img src="" alt=""/> : <div className={cls.mockImg}/>}
                <div className={cls.flexCol}>
                    <MyText text={title} className={cls.title} size={TextSize.XMEDIUM}/>

                    <MyText text={description} size={TextSize.SMALL}/>
                    <div className={cls.flex}>
                        <MyText text={'Состав: '} size={TextSize.SMALL}/>
                        <MyText text={composition} size={TextSize.SMALL}/>
                    </div>
                    <MyText text={'Пищевая ценность: '}/>
                    <div className={cls.flex}>
                        <div className={cls.item}>
                            <MyText text={'Белки'} size={TextSize.SMALL}/>
                            <MyText text={`${proteins} г`} size={TextSize.MEDIUM}/>
                        </div>
                        <div className={cls.item}>
                            <MyText text={'Жиры'} size={TextSize.SMALL}/>
                            <MyText text={`${fats} г`} size={TextSize.MEDIUM}/>
                        </div>
                        <div className={cls.item}>
                            <MyText text={'Углеводы'} size={TextSize.SMALL}/>
                            <MyText text={`${carbohydrates} г`} size={TextSize.MEDIUM}/>
                        </div>
                        <div className={cls.item}>
                            <MyText text={'Ккал'} size={TextSize.SMALL}/>
                            <MyText text={`${calories}`} size={TextSize.MEDIUM}/>
                        </div>
                    </div>

                </div>
            </div>
            <div className={cls.Buy}>
                <Button theme={ButtonTheme.PRIMARY} className={cls.btn}>
                    <MyText text={'Добавить в корзину'} size={TextSize.MEDIUM}/>
                </Button>
                <div className={cls.Price}>
                    <MyText text={'Цена:'} size={TextSize.MEDIUM}/>
                    <MyText text={`${price} p`} size={TextSize.MEDIUM}/>
                </div>

            </div>


        </div>
    )
}