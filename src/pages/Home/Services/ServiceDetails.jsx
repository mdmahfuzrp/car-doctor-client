import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../../../Shared/Banner/Banner';
import bannerImg from '../../../assets/images/banner/4.jpg';
import { FaArrowRight, FaFileInvoice } from 'react-icons/fa';
import logo from '../../../assets/light-logo.png';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, img, title, description, facility, price } = service;
    return (
        <div>
            {/* Banner */}
            <div className='mb-14'>
                <Banner bannerTitle="Service Details" bannerImg={bannerImg} des="Home/Service Details"></Banner>
            </div>

            {/* Bottom Details */}
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='col-span-3 pe-6 space-y-7'>
                    <img className='rounded-xl max-h-[400px] w-full object-cover' src={img} alt="" />
                    <h1 className='text-xl sm:text-3xl md:text-4xl font-bold'>{title}</h1>
                    <p className='text-[16px] text-[#737373] leading-7'>{description}</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6'>
                        {
                            facility.map((f, index) => <div
                                key={index}
                                className="card bg-[#f3f3f35e] border-t-4 shadow-sm border-error">
                                <div className="card-body">
                                    <h2 className="card-title text-[#444444]">{f.name}</h2>
                                    <p className='text-[#737373]'>{f.details}</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <h1 className='text-xl sm:text-3xl md:text-4xl font-bold'>3 Simple Steps to Process</h1>
                    <p className='text-[16px] text-[#737373] leading-7'>{description}</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6'>
                        <div className="card p-5 items-center border">
                            <div className="avatar placeholder mb-4">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
                                    <span className="text-3xl">1</span>
                                </div>
                            </div>
                            <div className="card-body items-center p-0">
                                <h2 className="card-title text-[#444444] -mb-2">STEP ONE</h2>
                                <p className='text-[#737373] text-center'>It uses a dictionary of over 200 .</p>
                            </div>
                        </div>
                        <div className="card p-5 items-center border">
                            <div className="avatar placeholder mb-4">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
                                    <span className="text-3xl">2</span>
                                </div>
                            </div>
                            <div className="card-body items-center p-0">
                                <h2 className="card-title text-[#444444] -mb-2">STEP TWO</h2>
                                <p className='text-[#737373] text-center'>It uses a dictionary of over 200 .</p>
                            </div>
                        </div>
                        <div className="card p-5 items-center border">
                            <div className="avatar placeholder mb-4">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
                                    <span className="text-3xl">3</span>
                                </div>
                            </div>
                            <div className="card-body items-center p-0">
                                <h2 className="card-title text-[#444444] -mb-2">STEP THREE</h2>
                                <p className='text-[#737373] text-center'>It uses a dictionary of over 200 .</p>
                            </div>
                        </div>
                    </div>
                    <div className="mockup-window border bg-base-300">
                        <iframe width="100%" height="500px" src="https://www.youtube.com/embed/VTDB3mKx7jM" title="YouTube video player" allow="web-share" allowFullScreen></iframe>
                    </div>
                </div>
                {/* Right Side Details */}
                <div className='space-y-7'>
                    <div className='p-5 rounded-xl bg-[#151515]'>
                        <h1 className='text-[25px] text-white'>Download</h1>
                        <div className='flex justify-between w-full items-center mt-5 mb-3'>
                            <div className='flex items-center justify-start'>
                                <span className='text-white'><FaFileInvoice size={21} /></span>
                                <div className='ms-3'>
                                    <h1 className='text-[18px] text-white'>Our Brochure</h1>
                                    <p className='text-[16px] text-[#A2A2A2]'>Download</p>
                                </div>
                            </div>
                            <div className='bg-error p-2 rounded-md cursor-pointer'><span className='text-white'><FaArrowRight size={17} /></span></div>
                        </div>
                        <div className='flex justify-between w-full items-center'>
                            <div className='flex items-center justify-start'>
                                <span className='text-white'><FaFileInvoice size={21} /></span>
                                <div className='ms-3'>
                                    <h1 className='text-[18px] text-white'>Our Brochure</h1>
                                    <p className='text-[16px] text-[#A2A2A2]'>Download</p>
                                </div>
                            </div>
                            <div className='bg-error p-2 rounded-md cursor-pointer'><span className='text-white'><FaArrowRight size={17} /></span></div>
                        </div>
                    </div>
                    <div className='p-5 rounded-xl bg-[#151515] flex flex-col items-center'>
                        <img className='w-24' src={logo} alt="" />
                        <p className='text-[18px] text-center text-white mt-3'>Need Help? We Are Here To Help You</p>
                        <div className='flex justify-center w-full items-center mt-5 mb-3'>
                            <div className='bg-white rounded-lg p-4 py-5 pb-10'>
                                <h1 className='text-[18px] text-black font-medium text-center'>Car Doctor Special</h1>
                                <p className='text-[16px] text-[#535252] text-center'>Save up to <span className='text-black'>60%</span> off</p>
                            </div>
                        </div>
                        <button className='btn btn-error -mt-10 text-white'>Get A Quote</button>
                    </div>
                    <div>
                        <h1 className='font-bold text-[35px]'>Price: ${price}</h1>
                        <Link to={`/checkout/${_id}`} className='btn btn-error text-white w-full rounded-none'>Proceed Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;