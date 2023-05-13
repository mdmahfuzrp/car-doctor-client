import React from 'react';
import './Banner.css';

const Banner = ({ bannerTitle, des, bannerImg }) => {
    return (
        <div id='bannerImg' className="relative bg-black card w-full max-h-[300px] rounded-xl image-full object-cover">
            <figure className='h-full'><img className='object-cover w-full rounded-xl' src={bannerImg} alt="Shoes" /></figure>
            <div className="card-body p-0 justify-center">
                <h2 className="card-title text-4xl ms-4">{bannerTitle}</h2>

                <div id='banner-route' className='absolute bottom-0 right-1/2 bg-error py-2 px-5'>
                    <h1 className='font-medium'>{des}</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;