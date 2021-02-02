import React from 'react'

export default function CategoryNav({ toggleCategory, category }) {
    return (
        <div className="row category-nav">
            <button onClick={toggleCategory} className={`category-nav-btn col-sm-2 col-4 ${category === "Dog" ? 'current-category' : null}`} value="Dog">Dog</button>
            <button onClick={toggleCategory} className={`category-nav-btn col-sm-2 col-4 ${category === "Cat" ? 'current-category' : null}`} value="Cat">Cat</button>
            <button onClick={toggleCategory} className={`category-nav-btn col-sm-2 col-4 ${category === "Small Mammal" ? 'current-category' : null}`} value="Small Mammal">Small Mammal</button>
            <button onClick={toggleCategory} className={`category-nav-btn col-sm-2 col-4 ${category === "Bird" ? 'current-category' : null}`} value="Bird">Bird</button>
            <button onClick={toggleCategory} className={`category-nav-btn col-sm-2 col-4 ${category === "Reptile" ? 'current-category' : null}`} value="Reptile">Reptile</button>
            <button onClick={toggleCategory} className={`category-nav-btn col-sm-2 col-4 ${category === "Aquatic" ? 'current-category' : null}`} value="Aquatic">Aquatic</button>
        </div>
    )
}
