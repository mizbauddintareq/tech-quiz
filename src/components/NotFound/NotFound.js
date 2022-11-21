import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="w-11/12 mx-auto mt-8">
      <div class="page_404">
        <div class="text-center">
          <div class="four_zero_four_bg"></div>

          <div class="mt-12">
            <Link
              to="/"
              className="border-0 btn  bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
