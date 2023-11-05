
import { FiLoader } from 'react-icons/fi';

const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <FiLoader className="text-blue-500 animate-spin text-4xl mb-4" />
            <p className="text-gray-600">Loading...</p>
        </div>
    );
};

export default Loading;
