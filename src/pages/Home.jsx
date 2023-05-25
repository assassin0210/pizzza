import React from 'react'
import {Categories, PizzaBlock, PizzaLoadingBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/action/filters";
import {addPizzaToCart} from "../redux/action/cart";
import {usePizzas} from "../hooks/usePizzas";


const categoryItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавиту', type: 'name', order: 'asc'},
]


function Home() {
  const dispatch = useDispatch();
  const {category, sortBy} = useSelector(({filters}) => filters);
  const pizzas = usePizzas()
  const cartItems = useSelector(({cart}) => cart.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);


  const onSelectCotegory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch]);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [dispatch]);
  const handleAddPizza = obj => {
    dispatch(addPizzaToCart(obj))
  }


  return (
    <div className="container">
      <div className="content__top" style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
        <Categories
          activeCategory={category}
          onClickCatygory={onSelectCotegory}
          items={categoryItems}/>
        <SortPopup
          onClickSortType={onSelectSortType}
          activeSortType={sortBy.type}
          items={sortItems}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? pizzas.map((obj) => (
            <PizzaBlock
              onClickAddPizza={handleAddPizza}
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj} />))
          : Array(4).fill(0).map((_, index) => (<PizzaLoadingBlock key={index}/>))}
      </div>
    </div>
  )
}

export default Home

