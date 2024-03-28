import { DNA, InfinitySpin } from "react-loader-spinner"

const Loaders:
    {
        [key: string]: JSX.Element
    }
    = {
    "course": < DNA
        visible={true}
        height="100"
        width="100"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
    />,
    "project": <DNA
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
    />,
    "error": <InfinitySpin
        width="100"
        color="#4fa94d"
    />,
    "product": <></>,
    "search": <></>
}
type LoaderType = {
    type: string
}

export default function Loader({ type }: LoaderType) {
    return (
        type ? Loaders[type] : <div>Loading...</div>
    )
}