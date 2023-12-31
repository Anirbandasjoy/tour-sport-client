import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const AddService = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceProviderName = form.name.value;
        const serviceProviderEmail = form.email.value;
        const serviceProviderLocation = form.location.value;
        const serviceName = form.serviceName.value;
        const servicePrice = form.servicePrice.value;
        const serviceImage = form.imageUrl.value;
        const serviceArea = form.serviceArea.value;
        const serviceDsc = form.serviceDescription.value;
        const serviceProviderImage = form.serviceProviderImage.value;
        const serviceData = { serviceProviderName, serviceProviderEmail, serviceProviderLocation, serviceName, servicePrice, serviceImage, serviceArea, serviceDsc, serviceProviderImage }
        console.log(serviceData)
        try {
            const response = await axios.post("https://tour-sport-server.vercel.app/api/v1/service", serviceData);
            if (response.status === 201) {
                console.log("Data posted successfully:", response.data);
                toast.success("Added Successfully")
            } else {
                console.error("Server returned an error:", response.status);
            }
        } catch (error) {
            console.error("Error while posting data:", error);
        }
        form.reset()
    };

    return (
        <div className="max-w-7xl mx-auto pb-8 bg-slate-200 dark:bg-slate-900 lg:px-20">
            <Helmet>
                <title>Dashboard-AddService| Tour sport</title>
            </Helmet>
            <div className="h-[1px] w-full lg:w-3/5 mx-auto bg-slate-200 dark:bg-slate-400 mb-3"></div>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6  mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required defaultValue={user && user?.displayName} readOnly />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Emaile</label>
                        <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required defaultValue={user && user?.email} readOnly />
                    </div>
                    <div>
                        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                        <input type="text" id="location" name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required />
                    </div>

                    <div>
                        <label htmlFor="serviceProviderImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Provider Image</label>
                        <input type="url" id="serviceProviderImage" name="serviceProviderImage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required defaultValue={user && user?.photoURL} readOnly />
                    </div>
                    <div>
                        <label htmlFor="serviceName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Name</label>
                        <input type="text" id="serviceName" name="serviceName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Service Name" required />
                    </div>
                    <div>
                        <label htmlFor="servicePrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Price</label>
                        <input type="text" id="servicePrice" name="servicePrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$ Service Price" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Image URL</label>
                    <input type="url" id="imageUrl" name="imageUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Service Image URL" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="serviceArea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Area</label>
                    <input type="text" id="serviceArea" name="serviceArea" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Service Area" required />
                </div>
                <div className="mb-6">

                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Description</label>
                    <textarea id="serviceDescription" name="serviceDescription" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dsc"></textarea>

                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
            </form>
        </div>
    );
}

export default AddService;
