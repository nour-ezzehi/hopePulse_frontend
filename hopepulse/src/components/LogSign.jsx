import { Link } from "react-router-dom";
import Logo from "./Logo";

const LogSign = ({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}) => {
    return(
        <div className="container mx-auto">
          <div className="mb-8">
            <div className="flex justify-center mt-32">
              <Link to="/">
                <Logo scrollToTop={false}/>
              </Link>
            </div>
            <h2 className="mt-2 text-center text-2xl text-grayish">
              {heading}
            </h2>
            <p className="text-center text-sm text-grayish mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="text-lg font-medium text-primary hover:text-secondary">
                {linkName}
            </Link>
            </p>
          </div>
        </div>
    )
};

export default LogSign;
