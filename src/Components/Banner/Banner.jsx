import React from 'react'
import bannerImage from '../../assets/pngwing 1.png'
export default function Banner() {
    return (


        <div>
            <div className="hero px-20 bg-[#F3F3F3] my-4 rounded-xl py-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerImage} />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="btn btn-primary">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
