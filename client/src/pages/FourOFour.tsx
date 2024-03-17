import FourOFourImg from "../assets/404.png"

export default function () {
    return (
        <div>
            <img src={FourOFourImg} alt="404" className="w-[275px] lg:w-[435px]" />
            <div className="text-center text-xl">Uhhhh Ohhh!</div>
        </div>
    )
}