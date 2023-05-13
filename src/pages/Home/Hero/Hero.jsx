import img1 from '../../../assets/images/homeCarousel/1.jpg'
import img2 from '../../../assets/images/homeCarousel/2.jpg'
import img3 from '../../../assets/images/homeCarousel/3.jpg'
import img4 from '../../../assets/images/homeCarousel/4.jpg'
const Hero = () => {
    return (
        <div className="carousel w-full max-h-[600px] mt-2">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full object-cover rounded-xl" />
                <div className='absolute transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full rounded-xl'>
                    <div className="w-full md:w-2/4 lg:w-1/3 h-full text-white space-y-7 flex flex-col justify-center items-start px-5 ">
                        <h1 className='text-5xl md:text-5xl font-semibold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some</p>
                        <div className='flex'>
                            <button className="btn btn-error hover:bg-transparent hover:text-error mr-1 md:mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 bottom-0 right-5">
                    <a href="#slide4" className="btn btn-circle bg-gray-500 border-gray-500 mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-gray-500 hover:border-gray-500">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full object-cover rounded-xl" />
                <div className='absolute transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full rounded-xl'>
                    <div className="w-full md:w-2/4 lg:w-1/3 h-full text-white space-y-7 flex flex-col justify-center items-start px-5 ">
                        <h1 className='text-5xl md:text-5xl font-semibold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some</p>
                        <div className='flex'>
                            <button className="btn btn-error hover:bg-transparent hover:text-error mr-1 md:mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 bottom-0 right-5">
                    <a href="#slide1" className="btn btn-circle bg-gray-500 border-gray-500 mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-gray-500 hover:border-gray-500">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full object-cover rounded-xl" />
                <div className='absolute transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full rounded-xl'>
                    <div className="w-full md:w-2/4 lg:w-1/3 h-full text-white space-y-7 flex flex-col justify-center items-start px-5 ">
                        <h1 className='text-5xl md:text-5xl font-semibold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some</p>
                        <div className='flex'>
                            <button className="btn btn-error hover:bg-transparent hover:text-error mr-1 md:mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 bottom-0 right-5">
                    <a href="#slide2" className="btn btn-circle bg-gray-500 border-gray-500 mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle hover:bg-gray-500 hover:border-gray-500">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full object-cover rounded-xl" />
                <div className='absolute transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full rounded-xl'>
                    <div className="w-full md:w-2/4 lg:w-1/3 h-full text-white space-y-7 flex flex-col justify-center items-start px-5 ">
                        <h1 className='text-5xl md:text-5xl font-semibold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some</p>
                        <div className='flex'>
                            <button className="btn btn-error hover:bg-transparent hover:text-error mr-1 md:mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 bottom-0 right-5">
                    <a href="#slide3" className="btn btn-circle bg-gray-500 border-gray-500 mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-gray-500 hover:border-gray-500">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;