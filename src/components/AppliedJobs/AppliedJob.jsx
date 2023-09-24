import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import location2 from '../../../public/icons/location2.png'
import money from '../../../public/icons/money.png'


const AppliedJob = ({ jobInLocalStore }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary, id } = jobInLocalStore;

    return (
        <div className='border-2 p-5 my-6 grid grid-cols-4'>
            <div className='flex justify-center items-center bg-[#F4F4F4] rounded-xl'>
                <img className='w-32' src={logo} alt="" />
            </div>
            <div className='col-span-2 flex justify-center items-center'>
               <div>
                    <h3 className='text-lg font-semibold py-3'>{job_title}</h3>
                    <h4 className='py-2'>{company_name}</h4>
                    <p className='py-4'><span className='border-2 mr-3 px-4 py-2 text-primary100'>{remote_or_onsite}</span> <span className='border-2 px-4 py-2 text-primary100'>{job_type}</span></p>
                    <p className='py-3 flex'><span className='mr-6 flex gap-3'><img src={location2} alt="" />{location}</span> <span className='flex gap-3'> <img src={money} alt="" />{salary}</span></p>
               </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link className='bg-gradient-to-r from-primary0 to-primary100 btn text-white mt-5' to={`/job/${id}`}> <button>View Details</button> </Link>
            </div>
        </div>
    );
};

export default AppliedJob;

AppliedJob.propTypes = {
    jobInLocalStore: PropTypes.object.isRequired
}