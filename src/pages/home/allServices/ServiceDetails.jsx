import { Link, useLoaderData, useParams } from "react-router-dom"
import { IoLocationOutline } from "react-icons/io5"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const service = useLoaderData();
    const [open, setOpen] = useState(false)
    const { serviceProviderImage, serviceProviderName, serviceProviderLocation, serviceImage, serviceName, servicePrice, serviceProviderEmail } = service.data || {}
    const url = `http://localhost:5000/api/v1/my-services?email=${serviceProviderEmail}`
    const { data } = useFetch(url);
    const [anotherServices, setAnotherServices] = useState(data)
    useEffect(() => {
        const remaining = data.filter((service) => service._id !== id)
        setAnotherServices(remaining)
    }, [data, id])
    const handleBookingSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const serviceProviderEmail = form.serviceProviderEmail.value;
        const buyerEmail = form.yourEmail.value;
        const serviceImage = form.serviceImageUrl.value;
        const servicePrice = form.servicePrice.value;
        const serviceTakingDate = form.serviceTakingDate.value;
        const message = form.message.value;
        const bookingData = { serviceProviderEmail, buyerEmail, serviceImage, servicePrice, serviceTakingDate, message }
        try {
            const res = await axios.post("http://localhost:5000/api/v1/booking", bookingData)
            if (res.status === 201) {
                if (res.data.insertedId) {
                    alert("Booking Placed Successfully")
                    console.log(res.data)
                }
            }
        } catch (error) {
            console.log(error)
        }
        form.reset()
    }
    return (
        <div className="pb-20">
            <div className="bg-blue-100 dark:bg-blue-200   h-36 w-full flex justify-center items-center">
                <h1 className="lg:text-4xl text-2xl text-blue-400 dark:text-blue-600 font-bold">Service Details</h1>
            </div>
            <div className="lg:w-1/4 w-full sm:w-3/4   mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-full mx-auto w-14" src={serviceProviderImage} alt={serviceProviderName} />
                <Link>
                    <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{serviceProviderName}</h5>
                </Link>
                <div className="flex justify-center items-center gap-2">
                    <IoLocationOutline className=" text-gray-800 dark:text-white text-lg mb-3" />
                    <p className="mb-3  font-normal text-blue-400">{serviceProviderLocation}</p>
                </div>
            </div>

            <div className="details mt-20">

                <div className="flex flex-col  cursor-pointer  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 relative dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full flex-1 rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-l-lg" src={serviceImage} />
                    {/* <div className=" overlay w-full hidden sm:block md:w-60 rounded-t-lg h-96  object-cover  md:h-full absolute ">
                    </div> */}
                    <div className="flex flex-1 flex-col justify-between p-4 leading-normal">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>
                            <h1 className="lg:text-xl text-[#ff976a] font-bold text-sm">${servicePrice} <span className="text-gray-500"> / </span> <span className="lg:text-sm text-xs text-gray-500 ">Per Person</span> </h1>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div className="flex items-center mb-3 ">
                                <div className="flex items-center gap-2">
                                    <img className="w-6 rounded-full" src={serviceProviderImage} alt={serviceProviderName} />
                                    <h2 className="dark:text-gray-400 text-sm">{serviceProviderName}</h2>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setOpen(!open)}
                            data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                            className="text-white rounded-md    bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Book Now
                        </button>


                    </div>
                </div>

            </div>

            {/* modal code start */}

            <div className="">

                <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={open ? "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full" : "fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"}>
                    <div className="relative w-full max-w-4xl mx-auto max-h-full">

                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" onClick={() => setOpen(!open)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="px-6 py-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">Booking This Service </h3>
                                <form className="space-y-6" onSubmit={handleBookingSubmit}>
                                    <div>
                                        <label htmlFor="serviceProviderEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Provider Email</label>
                                        <input type="email" name="serviceProviderEmail" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required defaultValue={serviceProviderEmail} readOnly />
                                    </div>
                                    <div>
                                        <label htmlFor="yourEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                        <input type="email" name="yourEmail" id="yourEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required defaultValue={user && user?.email} readOnly />
                                    </div>
                                    <div>
                                        <label htmlFor="serviceImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Image Url</label>
                                        <input type="url" name="serviceImageUrl" id="serviceImageUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required defaultValue={serviceImage} readOnly />
                                    </div>
                                    <div>
                                        <label htmlFor="servicePrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Price</label>
                                        <input type="text" name="servicePrice" id="servicePrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required defaultValue={servicePrice} readOnly />
                                    </div>
                                    <div>
                                        <label htmlFor="serviceTakingDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Taking Date</label>
                                        <input type="date" name="serviceTakingDate" id="serviceTakingDate" className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required placeholder="Service Taking Date" />
                                    </div>

                                    <div>

                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                        <textarea id="message" name="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." required></textarea>

                                    </div>

                                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purhase Now</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* modal code end */}


            <div className="">
                <div className="mt-10 max-w-4xl   ">
                    <div className="grid grid-cols-1 lg:grid-cols-3   gap-4">
                        {
                            anotherServices?.map(service => {
                                const { serviceImage, serviceName, servicePrice, serviceProviderImage, serviceProviderName, _id } = service || {}
                                return <div key={_id} className="details">
                                    <div className="flex flex-col sm:flex-row lg:flex-col  cursor-pointer  bg-white border border-gray-200 rounded-lg shadow   hover:bg-gray-100 relative dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img className="object-cover w-full lg:w-full sm:w-60 rounded-t-lg  h-full md:h-auto  md:rounded-none md:rounded-l-lg" src={serviceImage} />
                                        <div className=" overlay w-full lg:w-full rounded-bl-md hidden sm:block md:w-60 rounded-t-lg h-96  object-cover sm:h-[14.3rem] lg:h-[12rem] absolute ">
                                        </div>
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>
                                            <h1 className="lg:text-xl text-[#ff976a] font-bold text-sm">${servicePrice} <span className="text-gray-500"> / </span> <span className="lg:text-sm text-xs text-gray-500 ">Per Person</span> </h1>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                            <div className="flex items-center mb-3 ">
                                                <div className="flex items-center gap-2">
                                                    <img className="w-6 rounded-full" src={serviceProviderImage} alt={serviceProviderName} />
                                                    <h2 className="dark:text-gray-400 text-sm">{serviceProviderName}</h2>
                                                </div>
                                            </div>

                                            <Link to={`/service-details/${_id}`}
                                                className="text-white rounded-md    bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ServiceDetails