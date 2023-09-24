import Undefinedd from '../../../public/images/Undefinedd.png'
import REST from '../../../public/images/REST.png'
import constss from '../../../public/images/constss.png'

const Blogs = () => {
    return (
        <>
            <div className="bg-[#F4F2FF] multi-bg -mt-[79px] pt-[70px]">
                <div className="container mx-auto px-10 flex justify-center items-center h-60">
                    <h1 className="text-2xl text-center">All blog Post</h1>
                </div>
            </div>
            <section className="container mx-auto mb-10">
                {/* Questions 1 */}
                <div className="border border-base-300 bg-[#F4F2FF] my-6 rounded-md mx-5">
                    <div className="text-xl font-medium p-5">
                        <h1 className="text-4xl my-6 font-semibold">
                            Discuss the scope of var, let, and const
                        </h1>
                        <img
                            className="w-full rounded-md"
                            src={constss}
                            alt="Var, Let and const variable"
                        />
                    </div>
                    <div className="p-5 text-xl leading-10">
                        <p>
                            var declarations are globally scoped or function scoped while let and
                            const are block scoped. var variables can be updated and re-declared
                            within its scope.{" "}
                        </p>
                        <p>let variables can be updated but not re-declared. </p>
                        <p>const variables can neither be updated nor re-declared.</p>
                        <p>
                            All the variables are all hoisted to the top of their scope. But while
                            var variables are initialized with undefined, let and const variables
                            are not initialized. var and let can be declared without being
                            initialized, const must be initialized during declaration
                        </p>
                    </div>
                </div>
                {/* Questions 2 */}
                <div className="border border-base-300 bg-[#F4F2FF] my-6 rounded-md mx-5">
                    <div className="text-xl font-medium p-5">
                        <h1 className="text-4xl my-6 font-semibold">
                            Tell us the use cases of null and undefined
                        </h1>
                        <img
                            className="w-full rounded-md"
                            src={Undefinedd}
                            alt="Var, Let and const variable"
                        />
                    </div>
                    <div className="p-5 text-xl leading-10">
                        <p className="text-3xl">
                            <b>null:</b>
                        </p>
                        <li>Null means an empty value or a blank value</li>
                        <li>
                            It is often used to indicate that a variable or property does not
                            currently have a meaningful value or that a value has been explicitly
                            removed or reset to nothing.
                        </li>
                        <p>
                            <strong>Use cases:</strong>
                        </p>
                        <li>
                            Initializing variables or properties to indicate that they have no value
                            yet.
                        </li>
                        <li>As a placeholder for missing or empty data</li>
                        <li>
                            As a return value to indicate that a function did not produce a
                            meaningful result.
                        </li>
                        <p className="text-3xl mt-5">
                            <b>undefined:</b>
                        </p>
                        <li>
                            Undefined means the variable has been declared, but its value has not
                            been assigned
                        </li>
                        <p>
                            <strong>Use cases:</strong>
                        </p>
                        <li>Accessing object properties that do not exist.</li>
                        <li>
                            Function parameters that have not been provided a value by the caller.
                        </li>
                        <li>
                            Variables or properties that have been explicitly set to undefined to
                            indicate their undefined state.
                        </li>
                    </div>
                </div>
                {/* Questions 3 */}
                <div className="border border-base-300 bg-[#F4F2FF] my-6 rounded-md mx-5">
                    <div className="text-xl font-medium p-5">
                        <h1 className="text-4xl my-6 font-semibold">
                            What do you mean by REST API?
                        </h1>
                        <img
                            className="w-full rounded-md"
                            src={REST}
                            alt="Var, Let and const variable"
                        />
                    </div>
                    <div className="p-5 text-xl leading-10">
                        <p>
                            Application Programme Interface abbreviated as API which is a software
                            intermediary that allows two applications to talk to each other.
                        </p>
                        <p>
                            <b>Example : </b> If user wants to book train tickets, web application
                            shows the departure time, stations like that all the informations, when
                            we look in this from the developer side, developer wants to display all
                            the train schedule informations in the web application, then developer
                            use the APIs to get these train informations from the web server where
                            all the train details and informations are stored. Then developers can
                            retrieve data from the web server using the APIs to display in the web
                            application.
                        </p>
                        <p>
                            <b>What is REST API? : </b> REpresentational State Transfer abbreviated
                            to REST. It is an API that follows a set of rules for an application and
                            services to communicate with each other.
                            <br />
                            REST APIs work by fielding requests for a resource and returning all
                            relevant information about the resource, translated into a format that
                            clients can easily interpret (this format is determined by the API
                            receiving requests). Clients can also modify items on the server and
                            even add new items to the server through a REST API.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;