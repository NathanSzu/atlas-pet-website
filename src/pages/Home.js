import React from 'react'
import dogvid from './assets/dogEating.mp4'
import BackgroundVid from '../components/BackgroundVid'
import CardCategory from "../components/CategoryCard";
import websiteData from "../utils/SiteData";

export default function Home({ Helmet }) {

    // Shortened for ease of use
    const dataset = websiteData.petCategories

    return (
        <main>
            <Helmet>
                <title>Home | Atlas Pet</title>
            </Helmet>

            <BackgroundVid src={dogvid} />
            <div className="jumbotron">
                <div className="wrapper">
                    <div className="top-row">
                        <h1 className="display-4 main-txt header-size-small"><strong>We Know Animals</strong></h1>
                        <div className="hr"></div>
                        <p className="lead main-txt text-size-small">Atlas Pet was built on a passion for animals of all shapes. For more than 30 years we have worked hard to keep competitive prices and we pride ourselves on our friendly and knowledgeable staff. So whether you've been stopping in for years, or today is your first visit, we're ready to bring you our best. </p>
                    </div>
                    <div className="row-overlay"></div>
                </div>
            </div>

            <div className="row mr-2 ml-2">
                {dataset.map((data) => (
                    <div className="col-md-2" key={data.id}>
                        <div className='home-categories'>
                            <CardCategory
                                src={data.link}
                                alt={data.category}
                            // category={data.category}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}