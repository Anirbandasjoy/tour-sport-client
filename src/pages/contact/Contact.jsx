import Lottie from "lottie-react"
import contactAnimation from "../../assets/animation/contacts.json"
import ContactForm from "./ContactForm"

const Contact = () => {
    return (
        <div className="mt-40">
            <div className="flex flex-col lg:flex-row items-center gap-9" id="contact">
                <div className="flex-1  mx-auto">
                    <Lottie className="" loop={true} animationData={contactAnimation} />
                </div>
                <div className="flex-1 ">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact