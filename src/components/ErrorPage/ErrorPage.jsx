import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center">
            <div>
                <h2 className="text-5xl py-12 text-center">Oops!!! </h2>
                <Link className="btn bg-gradient-to-r from-primary0 to-primary100 text-white" to="/">Go back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;