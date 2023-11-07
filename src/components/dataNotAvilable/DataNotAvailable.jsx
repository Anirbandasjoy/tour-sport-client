import { MdOutlineSentimentDissatisfied } from 'react-icons/md';

const DataNotAvailable = () => {
    return (
        <div className="flex flex-col items-center    p-8 rounded-md ">
            <MdOutlineSentimentDissatisfied size={80} className="text-red-500 animate-bounce" />
            <p className="text-gray-600 text-lg mt-4 font-semibold">Oops! Data not available.</p>
        </div>
    );
};

export default DataNotAvailable;
