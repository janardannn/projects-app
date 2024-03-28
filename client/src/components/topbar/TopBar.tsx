import Banner from "./Banner";
import User from "./User";

export default function () {
    return (
        <div className="flex justify-center mt-2">
            <div className="flex w-screen md:w-[80vw] justify-between p-6 items-center">
                <Banner />
                <User username={"diksha"} />
            </div>
        </div>
    )
}