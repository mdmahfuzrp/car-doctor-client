import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import bannerImg from '../../assets/images/banner/5.jpg';
import Banner from '../../Shared/Banner/Banner';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const [error, setError] = useState('');
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    console.log(service);
    const { _id, img } = service;

    const handleServiceBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const service = form.service.value;
        const due = form.due.value;
        const customerMsg = form.customer_msg.value;

        if (name == '' || email == '' || phone == '' || date == '' || service == '' || due == '') {
            setError('Please provide information of empty field');
            return;
        }

        const bookingInfo = {
            serviceImg: img,
            serviceId: _id,
            customerName: name,
            email,
            phone,
            date,
            service,
            due,
            customerMsg
        }

        fetch('http://localhost:5000/checkout',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                form.reset();
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Booking Successful',
                    icon: 'success',
                    confirmButtonText: 'Great'
                  })
            }
        })
    }

    const handleFillUp = () =>{
        setError('');
    }

    return (
        <div>
            {/* Banner */}
            <div className='mb-10'>
                <Banner bannerTitle="Book Our Service" bannerImg={bannerImg} des="Home/Checkout"></Banner>
            </div>

            <div className='bg-[#F3F3F3] rounded-lg p-5 md:p-10 lg:p-20 mb-10'>
                <form onSubmit={handleServiceBooking} className='flex flex-col space-y-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div className="from-control w-full border rounded-lg">
                            <input type="text" onChange={handleFillUp} name="name" placeholder='Your name' defaultValue={user?.displayName} className='input w-full' id="" />
                        </div>
                        <div className="from-control w-full border rounded-lg">
                            <input type="text" onChange={handleFillUp} name="email" placeholder='Your email' defaultValue={user?.email} className='input w-full' id="" />
                        </div>
                        <div className="from-control w-full border rounded-lg">
                            <input type="text" onChange={handleFillUp} name="phone" placeholder='Mobile' defaultValue={user?.phoneNumber} className='input w-full' id="" />
                        </div>
                        <div className="from-control w-full border rounded-lg">
                            <input type="date" onChange={handleFillUp} name="date" placeholder='Select date' className='input w-full' id="" />
                        </div>
                        <div className="from-control w-full border rounded-lg">
                            <input type="text" onChange={handleFillUp} name="service" placeholder='Enter service' defaultValue={service?.title} className='input w-full' id="" />
                        </div>
                        <div className="from-control w-full border rounded-lg">
                            <input type="text" onChange={handleFillUp} name="due" placeholder='Due amount' defaultValue={`$${service?.price}`} className='input w-full' id="" />
                        </div>
                    </div>
                    <div className='border bg-white rounded-lg'>
                        <textarea onChange={handleFillUp} className="textarea w-full h-full bg-transparent text-[16px]" placeholder="Enter your message (Optional)" name="customer_msg" id="" rows="4"></textarea>
                    </div>
                    <input type="submit" className='btn btn-block btn-error text-white' value="Book Now" />

                    {
                        error && <div className='text-error flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span className='ms-1'>{error}</span>
                        </div>
                    }
                </form>
            </div>
        </div>
    );
};

export default CheckOut;