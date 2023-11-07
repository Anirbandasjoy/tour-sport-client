import about from "../../assets/image/about.jpg"
import about2 from "../../assets/image/about-2.jpg"
import { useNavigate } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"
import { useState } from "react"
const About = () => {
    const [loopCount, setLoopCount] = useState(-1);

    const handleLoopComplete = () => {

        setLoopCount((prevLoopCount) => prevLoopCount + 1);
    };
    const navigate = useNavigate()
    return (
        <div className="mt-72">
            <div className="flex flex-col lg:flex-row  justify-center gap-20 lg:gap-8 max-w-5xl mx-auto">
                <div className="flex-1 relative">
                    <img className="border-[1rem] w-3/4  rounded-md shadow-2xl border-white" src={about} alt="image" />
                    <img className="absolute w-3/4 sm:w-2/4 -bottom-20 rounded-md border-[.8rem] border-white right-1" src={about2} alt="image2" />
                </div>
                <div className="flex-1 space-y-6 p-2">
                    <h3 className="text-sm lg:text-lg text-gray-400 font-bold">ABOUT TRAVIO</h3>
                    <h1 className="text-2xl font-bold text-[#061a3a] dark:text-gray-400 lg:text-5xl ">World  <span style={{ color: 'red', fontWeight: 'bold' }}>

                        <Typewriter
                            words={['Best Travel  Agency Company Since 2023']}
                            loop={loopCount}
                            cursor
                            cursorStyle='❤️'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopComplete={handleLoopComplete}
                        />
                    </span></h1>
                    <p className="text-sm mt-10 lg:text-lg text-gray-600 dark:text-gray-200">Unforgettable experiences await you as we turn your travel dreams into reality. Explore, enjoy and create memories that will last a lifetime.”</p>

                    <button onClick={() => navigate("/all-services")} className=" p-4 px-6 text-white duration-700 font-semibold rounded-sm capitalize bg-[#ff7c5b] hover:bg-[#061a3a]">Find Tours</button>

                </div>
            </div>
        </div>
    )
}

export default About