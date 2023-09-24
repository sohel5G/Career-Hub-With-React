import { useEffect, useState } from "react";
import Job from "./Job";


const Jobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const loadJobs = async () => {
            const res = await fetch('../../../public/data/jobs.json')
            const data = await res.json();
            setJobs(data);
        }
        loadJobs()
    }, [])

    return (
        <>
            <div className="grid grid-cols-2 gap-5">
                {
                    jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className={`text-center ${dataLength === jobs.length && 'hidden'}`}>
                <button onClick={() => setDataLength(jobs.length)} className='bg-gradient-to-r from-primary0 to-primary100 btn text-white mt-16 capitalize'>Show all Jobs</button>
            </div>
        </>

    );
};

export default Jobs;




