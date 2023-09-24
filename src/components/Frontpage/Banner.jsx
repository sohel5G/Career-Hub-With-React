import { Link } from 'react-router-dom';
import user from '../../../public/images/user.png'

const Banner = () => {
    return (
        <section className='bg-[#F4F2FF] -mt-[79px] pt-[70px]'>
            <div className='md:flex container mx-auto px-10 items-center'>
                <div className='flex-1'>
                    <h1 className="text-myBlack loading-[150px] text-6xl font-bold">One Step <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-primary0 to-primary100 text-transparent bg-clip-text"> Dream Job</span></h1>
                    <p className="text-xl py-8">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Link className="btn bg-gradient-to-r from-primary0 to-primary100 text-white" to={'/'}> Get Started </Link>
                </div>
                <div className='flex-1'>
                    <img src={user} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;