import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const MyBookings = () => {
    const { user, logout } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const url = `http://localhost:5000/checkout?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data.error) {
                    setBookings(data)
                }
                else {
                    console.log('inside else condition');
                    navigate('/');
                }
            });
    }, [url, navigate])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Remember, you lost your booking!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#f87260',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/checkout/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const remainingBooking = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBooking);

                        Swal.fire(
                            'Deleted!',
                            'Your Booking has been deleted.',
                            'success'
                        )
                    })
            }
        })
    }

    const handleUpdateBooking = (id) => {
        fetch(`http://localhost:5000/checkout/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remainingBooking = bookings.filter(booking => booking._id !== id);
                    const updatedBooking = bookings.find(booking => booking._id === id);
                    updatedBooking.status = 'confirm';
                    const newBookings = [updatedBooking, ...remainingBooking];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div className='md:py-10'>
            <div className="overflow-x-auto w-full border rounded-lg">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service</th>
                            <th>Due Amount</th>
                            <th>Servicing Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <tr key={booking?._id}>
                                <th>
                                    <button onClick={() => handleDelete(booking._id)} className="btn btn-circle btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking?.serviceImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{booking?.service}</div>
                                            <div className="text-sm opacity-50">{booking?.customerMsg}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking?.due}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Payment with PayPal</span>
                                </td>
                                <td>{booking?.date}</td>
                                <th>
                                    {
                                        booking.status ? <div className="badge badge-outline font-medium w-full">Confirmed</div>
                                            : <button onClick={() => handleUpdateBooking(booking?._id)} className="btn btn-error btn-xs text-white w-full">Confirm</button>
                                    }
                                </th>
                            </tr>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Service</th>
                            <th>Due Amount</th>
                            <th>Servicing Date</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyBookings;