import Banner from "./Banner";
import User from "./User";

export default function () {
    return (
        <div className="flex justify-center my-2 mb-10">
            <div className="flex w-screen lg:w-[70vw] justify-between p-8 items-center">
                <Banner />
                <User username={"diksha"} />
            </div>
        </div>
    )
}