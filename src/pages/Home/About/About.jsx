import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="card lg:card-side pt-10 flex flex-col md:flex-row">

            <div className='md:w-1/2 h-full md:mt-10'>
                <div className='h-full relative mb-5 md:mb-0'>
                    <img src={person} className='w-3/4 rounded-xl' alt="Person" />
                    <img src={parts} className='absolute w-2/4 top-1/2 right-0 md:right-10 rounded-xl border-8 border-white' alt="" />
                </div>
            </div>
            <div className="card-body md:w-1/2">
                <h2 className="card-title text-error text-lg font-medium">About Us</h2>
                <div>
                    <h1 className='text-[45px] leading-[54px] font-bold'>We are qualified<br /> & of experience <br /> in this field</h1>
                    <p className='text-[#737373] text-[16px] mt-[30px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. </p>
                    <p className='text-[#737373] text-[16px] mt-[20px] mb-[30px]'>the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. </p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-error">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;