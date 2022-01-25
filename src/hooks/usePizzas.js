import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPizzas} from "../redux/action/pizzas";

export const usePizzas = () => {
  const dispatch = useDispatch()
  const pizzas = useSelector(({pizzas, filters}) => {
      if (filters.category === null) {
        return pizzas.items
      } else {
        return pizzas.items.filter(item => item.category === filters.category)
      }
    }
  )
  const filters = useSelector(({filters}) => filters.sortBy.type)


  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch])


  return pizzas.sort((prev, next) => {
    if (filters === "popular") {
      return prev.rating - next.rating
    } else if (filters === "price") {
      return prev.price - next.price
    } else if (filters === "name") {
      if (prev.name < next.name) return -1;
      if (prev.name < next.name) return 1;
    }
    return null
  })
}