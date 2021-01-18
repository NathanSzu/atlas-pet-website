import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { ClientContext } from "../utils/ClientContext";


function CategoryCard({ src, alt }) {
    const context = useContext(ClientContext)

    return (
        <div className="card-anim">

            <Link to="/Shop-Category" >
                <img className="img-top"
                    onClick={(e) => {
                        context.changeCategory(e.target.alt)
                    }}
                    src={src}
                    alt={alt}
                />
            </Link>
        </div>
    )
}

export default CategoryCard;