import Lottie from "lottie-react";
import error from "../lottie/errorAnimation.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center pt-8">
        <Link
          className="font-bold text-3xl border-2 p-2 
          border-[#333367] text-white rounded-lg bg-[#333367] 
          hover:text-[#333367] hover:bg-white duration-500 ease-in-out"
          to="/"
        >
          Go Back To Home Page
        </Link>
      </div>
      <Lottie animationData={error} loop={true} />
    </div>
  );
};
export default ErrorPage;
