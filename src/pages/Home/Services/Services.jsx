import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="my-7">
            <div className="space-y-2 text-center">
                <h3 className="text-error text-lg font-medium">Services</h3>
                <h1 className="text-[45px] font-semibold">Our Service Area</h1>
                <p className="md:max-w-[690px] mx-auto text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            
            <div className="grid md:grid-cols-2 my-5 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;