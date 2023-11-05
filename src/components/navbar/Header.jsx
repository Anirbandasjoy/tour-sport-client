import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineInstagram, AiOutlineClockCircle } from 'react-icons/ai'
import { BsFacebook, BsTelephoneForward } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthProvider"
import { useContext } from 'react'
import profileImage from "../../assets/profile.png"
const Header = () => {
    const navigate = useNavigate()

    const { logOut, user } = useContext(AuthContext);

    const hanleLogOut = () => {
        logOut()
            .then(() => {
                alert("Logged Out Successfully")
                localStorage.removeItem("location")
                navigate("/login")

            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className='flex flex-col md:flex-row justify-between items-center py-3 ' data-aos="zoom-in">

            <div className='flex dark:text-white  flex-col md:flex-row mb-6 md:mb-0 text-xs items-center  gap-5 list-none'>
                <div className='flex items-center gap-2'>
                    <BsTelephoneForward />
                    <li>(+088) 01772838734</li>
                </div>
                <div className='flex items-center gap-2'>
                    <HiOutlineMail />
                    <li>adj@gmail.com</li>
                </div>
                <div className='flex items-center gap-2'>
                    <AiOutlineClockCircle />
                    <li> Sut – Fri 9.00 am – 6.00 pm</li>
                </div>
                {
                    user && <div className='flex items-center gap-2'>
                        <CgProfile />
                        <li>{user?.displayName}</li>
                    </div>
                }

            </div>
            <div className='flex items-center gap-3 '>
                <button className=" bg-gray-100">
                    <AiFillTwitterCircle className='text-gray-500 hover:text-teal-400 duration-300' size={19} />
                </button>
                <button className=" bg-gray-100">
                    <BsFacebook className='text-gray-500  hover:text-cyan-700 duration-300' size={19} />
                </button>
                <button className=" bg-gray-100">
                    <AiFillLinkedin className='text-gray-500  hover:text-cyan-700 duration-300' size={19} />
                </button>
                <button className=" bg-gray-100">
                    <AiOutlineInstagram className='text-gray-500  hover:text-cyan-700 duration-300' size={19} />
                </button>


                {
                    user ? <Link onClick={hanleLogOut} className=" bg-red-500 py-1 px-3 text-white font-bold shadow-md rounded-sm text-sm">
                        Logout
                    </Link> : <Link to="/login" className=" bg-red-500 py-1 px-3 text-white font-bold shadow-md rounded-sm text-sm">
                        Login
                    </Link>
                }
                <div className=" rounded-full">
                    <div className="w-8 cursor-pointer ring-1 rounded-full">
                        {
                            user ? <img className='rounded-full p-0.5' src={user?.photoURL} /> : <img className='rounded-full p-0.5' src={profileImage} />
                        }
                    </div>
                </div>

            </div>

        </div>




    )
}

export default Header