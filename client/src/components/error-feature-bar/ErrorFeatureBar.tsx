import Error from "./Error";
import Feature from "./Feature";

export default function () {
    return (
        <div className="flex justify-center">
            <div className="flex justify-between items-center">
                <Error />
                <div className="mx-2 lg:mx-6" />
                <Feature />
            </div>
        </div>
    )
}