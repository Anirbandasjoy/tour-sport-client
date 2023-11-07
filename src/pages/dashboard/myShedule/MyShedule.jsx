import { Helmet } from "react-helmet"
import Booking from "./Booking"
import PendingWork from "./PendingWork"

const MyShedule = () => {
    return (
        <div className="lg:pb-52 pb-20">
            <Helmet>
                <title>Dashboard-MyShedule| Tour sport</title>
            </Helmet>
            <Booking />
            <PendingWork />
        </div>
    )
}

export default MyShedule