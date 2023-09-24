import Banner from "./Banner";
import CategoryList from "./CategoryList";
import accounts from '../../../public/icons/accounts.png'
import creative from '../../../public/icons/creative.png'
import Jobs from "./Jobs";


const Frontpage = () => {


    return (
        <>
            <Banner></Banner>
            <section className="container mx-auto px-10 py-24">
                <h1 className="text-5xl font-bold text-center">Job Category List</h1>
                <p className="text-xl text-center py-7" >Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="flex gap-7 justify-center">
                    <CategoryList img={accounts} alt={'Account iocn'} title={'Account & Finance'} subTitle={'300 Jobs Available'}></CategoryList>
                    <CategoryList img={creative} alt={'Account iocn'} title={'Account & Finance'} subTitle={'300 Jobs Available'}></CategoryList>
                    <CategoryList img={accounts} alt={'Account iocn'} title={'Marketing & Sales'} subTitle={'300 Jobs Available'}></CategoryList>
                    <CategoryList img={accounts} alt={'Account iocn'} title={'Account & Finance'} subTitle={'300 Jobs Available'}></CategoryList>
                </div>
            </section>

            <section className="container mx-auto px-10 py-24" id="FeatureJobs">
                <h1 className="text-5xl font-bold text-center">Featured Jobs</h1>
                <p className="text-xl text-center py-7" >Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div>
                <Jobs></Jobs>
                </div>
            </section>
        </>
    );
};

export default Frontpage;


