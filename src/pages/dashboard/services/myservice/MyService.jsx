import PropTypes from "prop-types";
const MyService = ({ service }) => {
    const { serviceImage, serviceName, servicePrice, serviceDsc, serviceProviderImage, serviceProviderName } = service || {};

    return (
        <div className="details">
            <div className="flex flex-col  cursor-pointer  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 relative dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full flex-1 rounded-t-lg h-full md:h-auto md:w-60 md:rounded-none md:rounded-l-lg" src={serviceImage} />
                <div className=" overlay  hidden lg:block md:w-[18.7rem]  rounded-t-lg h-96  object-cover  md:h-full  absolute ">
                </div>
                <div className="flex flex-col flex-1 justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>
                    <h1 className="lg:text-xl text-[#ff976a] font-bold text-sm">${servicePrice} <span className="text-gray-500"> / </span> <span className="lg:text-sm text-xs text-gray-500 ">Per Person</span> </h1>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{serviceDsc.slice(0, 80)}</p>
                    <div className="flex items-center mb-3 ">
                        <div className="flex items-center gap-2">
                            <img className="w-6 rounded-full" src={serviceProviderImage} alt={serviceProviderName} />
                            <h2 className="dark:text-gray-400 text-sm">{serviceProviderName}</h2>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

MyService.propTypes = {
    service: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired
}

export default MyService;
