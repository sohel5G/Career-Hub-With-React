import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { clearLocalStore, getStoredJobIds } from "../LocalStore/LocalStore";
import AppliedJob from "./AppliedJob";
import dropdown from '../../../public/icons/dropdown.png'

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [jobsInLocalStore, setJobsInLocalStore] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleClearAll = () => {
        clearLocalStore()
        setDisplayJobs([]);
    }

    const handleJobsFilter = filter => {
        if (filter === 'All'){
            setDisplayJobs(jobsInLocalStore);
        } else if (filter === 'Remote'){
            const remoteJobs = jobsInLocalStore.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        }else{
            const OnsiteJobs = jobsInLocalStore.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(OnsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobsIds = getStoredJobIds();

        if (jobs.length > 0) {
            const jobApplied = [];
            for (const id of storedJobsIds) {
                const job = jobs.find(job => job.id === id)

                if (job) {
                    jobApplied.push(job);
                }
            }
            setJobsInLocalStore(jobApplied);
            setDisplayJobs(jobApplied);
        }
    }, [])

    return (
        <div>
            <div className="bg-[#F4F2FF] multi-bg -mt-[79px] pt-[70px]">
                <div className="container mx-auto flex justify-center items-center h-60">
                    <h1 className="text-2xl text-center">Applied Jobs</h1>
                </div>
            </div>
            <div className="container mx-auto px-10 flex justify-end py-6 mt-7">
                <div className="dropdown">
                    <label tabIndex={0} className="btn text-sm capitalize tracking-[2px] font-semibold"><span>Filter By</span><img className="w-[20px]" src={dropdown} alt="" /> </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('All')}><a className="text-base">All</a></li>
                        <li onClick={() => handleJobsFilter('Remote')}><a className="text-base">Remote</a></li>
                        <li onClick={() => handleJobsFilter('Onsite')}><a className="text-base">Onsite</a></li>
                    </ul>
                </div>
                <button onClick={handleClearAll} className="ml-5">Clear All</button>
            </div>
            <div className="container mx-auto px-10">
                {
                    displayJobs.map(jobInLocalStore => <AppliedJob key={jobInLocalStore.id} jobInLocalStore={jobInLocalStore}></AppliedJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;



