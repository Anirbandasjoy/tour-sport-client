import PropTypes from "prop-types";

const Service = ({ service }) => {
    console.log(service)
    const { serviceImage, serviceName } = service || {}
    return (
        <div>

            <div className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-52 md:rounded-none md:rounded-l-lg" src={serviceImage} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>

        </div>
    )
}

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service;
