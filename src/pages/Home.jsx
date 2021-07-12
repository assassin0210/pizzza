import React from 'react'
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/action/filters";
import {fetchPizzas} from "../redux/action/pizzas";


const categoryItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'},
]



function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    //const { category, sortBy } = useSelector(({ filters }) => filters);



    React.useEffect(() => {

            dispatch(fetchPizzas());

    }, [])



     const onSelectCotegory = (index) => {
        dispatch(setCategory(index))
         console.log(setCategory(index))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCotegory}
                    items={categoryItems}/>
                <SortPopup
                    items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map((obj) => (
                    <PizzaBlock key={obj.id} {...obj} isLoading={true} /> ))
                    :Array(12).fill(0).map((_,index)=>(<PizzaLoadingBlock key={index}/>))}




            </div>
        </div>
    )
}

export default Home

