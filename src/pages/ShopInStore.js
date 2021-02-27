import React from 'react';
import CardCategory from '../components/CategoryCard';
import websiteData from "../utils/SiteData"

export default function ShopInStore({ Helmet }) {
    // Shortened for ease of use
    const dataset = websiteData.petCategories

    return (
        <main>
            <Helmet>
                <title>Animals & Supplies | Atlas Pet</title>
            </Helmet>

            <div className="row categories">
                {dataset.map((data) => (
                    <div className="col-md-4 shop-card" key={data.id}>
                    <CardCategory
                        src={data.link}
                        alt={data.category}
                    />
                    </div>
                ))}
            </div>
        </main>
    )
}
