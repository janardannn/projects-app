import Error from "./Error";
import Feature from "./Feature";

// import { useLocation } from "react-router-dom";

export default function () {

    return (
        <div className="flex justify-center">
            <div className="flex justify-between items-center">
                <Error />
                <div className="mx-2 lg:mx-6" />
                <Feature />
                {/* <Modal title="Report An Error" body="None" url={window.location.href} /> */}
            </div>
        </div>
    )
}