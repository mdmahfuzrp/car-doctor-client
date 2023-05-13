import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
    const { img, price, title } = service;

    return (
        <div className="card bg-base-100 border p-6">
            <figure className="">
                <img src={img} className="rounded-xl" alt="" />
            </figure>
            <div className="card-body text-center flex-row justify-between mt-5 items-center p-0">
                <div className='text-left'>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className='font-semibold text-error'>Price: ${price}</p>
                </div>
                <div className=''>
                    <Link className=''><FaArrowRight className='hover:text-error' /></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;