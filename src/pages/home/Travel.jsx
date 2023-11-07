import { FcElectroDevices, FcGlobe, FcProcess, FcRating } from "react-icons/fc"
import image1 from "../../assets/image/1.jpg"
import image2 from "../../assets/image/2.jpg"
import image3 from "../../assets/image/3.jpg"
import image4 from "../../assets/image/4.jpg"

const Travel = () => {
    return (
        <div className="mt-20">
            <div className="text-center space-y-6">
                <h3 className="text-sm lg:text-lg text-[#808080] font-bold">TRAVIO SPECIALS</h3>
                <h1 className="text-2xl lg:text-5xl dark:text-gray-400 text-[#172a47] font-bold">Why Travel with Tutive?</h1>
            </div>
            <div className="mt-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4">

                    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative">
                            <img className="w-full mb-5" src={image1} alt="" />
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-10">
                                <FcElectroDevices size={80} className="text-gray-400 bg-white rounded-full p-3" />
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">2000+ Our Worldwide Guide</h5>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative">
                            <img className="w-full mb-5" src={image2} alt="" />
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-10">
                                <FcGlobe size={80} className="text-gray-400 bg-white rounded-full p-3" />
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">100% Trusted Tour Agency</h5>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative">
                            <img className="w-full mb-5" src={image3} alt="" />
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-10">
                                <FcRating size={80} className="text-gray-400 bg-white rounded-full p-3" />
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">10+ Years of Travel Experience</h5>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative">
                            <img className="w-full mb-5" src={image4} alt="" />
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-10">
                                <FcProcess size={80} className="text-gray-400 bg-white rounded-full p-3" />
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">99% of Our Travelers are Happy</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Travel