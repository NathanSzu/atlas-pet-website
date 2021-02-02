import React from 'react';
import Background from '../components/Background.js';
import CardCategory from '../components/CategoryCard';
import websiteData from "../utils/SiteData"

export default function ShopInStore({ Helmet }) {
    // Shortened for ease of use
    const dataset = websiteData.petCategories

    return (
        <main className="hide-overflow">
            <Helmet>
                <title>Categories | Atlas Pet</title>
            </Helmet>

            <Background />
            <div className="row categories">
                {dataset.map((data) => (
                    <div className="col-md-4 shop-card" key={data.id}>
                    <CardCategory
                        src={data.link}
                        alt={data.category}
                        // category={data.category}
                    />
                    </div>
                ))}
            </div>
        </main>
    )
}
