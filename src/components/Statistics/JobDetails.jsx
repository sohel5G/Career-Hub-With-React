import { useLoaderData, useParams } from "react-router-dom";
import money from '../../../public/icons/money.png';
import calendar from '../../../public/icons/calendar.png';
import phone from '../../../public/icons/phone.png';
import email from '../../../public/icons/email.png';
import location2 from '../../../public/icons/location2.png';
import { setStoredIds } from "../LocalStore/LocalStore";

const JobDetails = () => {

    const { id } = useParams();
    const idInt = parseInt(id);
    const jobs = useLoaderData()
    const job = jobs.find(job => job.id === idInt);

    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information, id:jobId } = job;

    return (
        <>
            <div className="bg-[#F4F2FF] multi-bg -mt-[79px] pt-[70px]">
                <div className="container mx-auto px-10 flex justify-center items-center h-60">
                    <h1 className="text-2xl text-center">Job Details</h1>
                </div>
            </div>
            <div className="container mx-auto px-10 py-24 grid grid-cols-3 gap-9">
                <div className="col-span-2">
                    <p className="mt-7 text-xl"><b>Job Description:</b> {job_description} </p>
                    <p className="mt-7 text-xl"><b>Job Responsibility:</b> {job_responsibility} </p>
                    <p className="mt-7 text-xl"><b>Educational Requirements:</b> {educational_requirements} </p>
                    <p className="mt-7 text-xl"><b>Experiences:</b> {experiences} </p>
                </div>
                <div>
                    <div className="bg-[#F4F2FF] py-2 px-4 rounded-xl">
                        <p className="py-5"><b>Job Details</b></p>
                        <hr />
                        <p className=" mt-3 py-3 flex gap-2"> <img src={money} alt="" className="w-5 h-5" /> <b>Salary:</b> <span>{salary}</span></p>
                        <p className="py-3 flex gap-2"> <img src={calendar} alt="" className="w-5 h-5" /> <b>Job Title:</b> <span>{job_title}</span></p>
                        <p className="py-5"><b>Contact Information</b></p>
                        <hr />
                        <p className="py-3 mt-3 flex gap-2"> <img src={phone} alt="" className="w-5 h-5" /> <b>Phone:</b> <span>{contact_information.phone}</span></p>
                        <p className="py-3 flex gap-2"> <img src={email} alt="" className="w-5 h-5" /> <b>Email:</b> <span>{contact_information.email}</span></p>
                        <p className="py-3 flex gap-2"> <img src={location2} alt="" className="w-5 h-7" /> <b>Address:</b> <span>{contact_information.address}</span></p>
                    </div>
                    <button onClick={() => setStoredIds(jobId)} className="btn bg-gradient-to-r from-primary0 to-primary100 text-white mt-5 w-full" >Apply Now</button>
                </div>
            </div>
        </>
    );
};

export default JobDetails;