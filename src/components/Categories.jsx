import React from 'react'


const Categories = React.memo(function Categories ({activeCategory,items,onClickCatygory}) {


    return (
        <div className="categories" >
            <ul style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                <li onClick={() => onClickCatygory(null)}
                    className={activeCategory === null ? 'active' : ''}
                >Все
                </li>
                {items && items.map((name, index) =>
                    <li className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickCatygory(index)}
                        key={`${name}_${index}`}
                    >{name}</li>)}
            </ul>
        </div>
    )
})



export default Categories
