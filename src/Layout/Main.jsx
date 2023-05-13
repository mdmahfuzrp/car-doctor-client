import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='max-w-[1200px] mx-auto px-2'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;