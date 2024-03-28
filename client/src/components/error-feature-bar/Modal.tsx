import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

import Loader from "../Loader";
import { errorSvg } from "./Error";
import { featureSvg } from "./Feature";
import DeveloperDisclosure from "./DeveloperDisclosure";

type ModalProps = {
    type: "error" | "feature",
    title: string,
    setUrl: () => void,
    values: {
        description: string,
        url: string
    },
    setValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    loader: boolean,
    error: {
        status: boolean,
        type: "failed" | "success",
        message: string
    },
    clearError: () => void,
    handleSubmit: (e: React.MouseEvent) => Promise<void>
}

export default function Modal({ type, title, setUrl, values, setValue, loader, error, clearError, handleSubmit }: ModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    const reportErrorText = type === "error" ? "Report an Error at: " : "Request A Feature";
    const describeText = type === "error" ? "Please describe the issue that you are facing below:" : "Please describe the feature that you would like to suggest below:";
    const buttonColor = type === "error" ? "bg-orange-600" : "bg-green-700";

    const handleModalClose = () => {
        setIsOpen(false);
        setValue({ target: { value: "" } } as React.ChangeEvent<HTMLTextAreaElement>);
        clearError();
    }
    const handleModalCloseWithoutClearing = () => {
        setIsOpen(false);
        clearError();
    }
    const openModal = () => {
        setUrl();
        setIsOpen(true);
    }

    return (
        <div className="">
            <button onClick={openModal}>{title}</button>
            <Dialog
                open={isOpen}
                onClose={handleModalCloseWithoutClearing}
                className="relative z-50">
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/65" aria-hidden="true" />

                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    {/* The actual dialog panel  */}

                    {/* modal starts from here */}

                    <Dialog.Panel className="mx-auto w-fit rounded-md p-4 bg-[#1b1a1a]">

                        {/* modal title */}
                        <div className="flex items-center mb-8">
                            {/* <div className="w-[7px] h-full mr-2 bg-orange-700">.</div> */}
                            <div className="mr-2">
                                {type === "error" ? errorSvg(35) : featureSvg(35)}
                            </div>
                            <Dialog.Title className="text-2xl font-semibold">{title}</Dialog.Title>
                        </div>
                        {/* ... */}

                        {/* modal title 2 */}
                        {type === "error" ?
                            <div className="flex mb-4">
                                <div className="mr-2 font-semibold">{reportErrorText}</div>
                                <div className="break-all">{values.url}</div>
                            </div>
                            :
                            <div></div>
                        }

                        <div className="mb-6">
                            <div className="mb-1 font-semibold">{describeText}</div>
                            <textarea value={values.description} onChange={setValue} className="bg-black/40 w-full p-2 rounded-md" placeholder="Describe the issue that you are facing"></textarea>
                        </div>

                        <div className="mb-8 break-words">
                            <DeveloperDisclosure />
                        </div>

                        <div className="flex justify-between">
                            <button disabled={loader} className={`px-2 py-1 rounded-md ${buttonColor} disabled:bg-gray-600`} onClick={handleSubmit}>{type === "error" ? "Report" : "Suggest"}</button>
                            <button disabled={loader} className={`px-2 py-1 rounded-md bg-red-700 disabled:bg-gray-600`} onClick={handleModalClose}>Close</button>
                        </div>

                        {
                            loader ?
                                <div className="mt-4 w-full p-4 flex justify-center items-center">
                                    <Loader type="error" />
                                </div>
                                :
                                <></>
                        }

                        {
                            error.status ?
                                (error.type === "success" ?
                                    <div className="rounded-md mt-4 w-full p-4 flex items-center justify-center bg-green-500 bg-opacity-5">
                                        <div className="text-green-500">{error.message}</div>
                                    </div>
                                    :
                                    <div className="rounded-md mt-4 w-full p-4 flex items-center justify-center bg-red-500 bg-opacity-5">
                                        <div className="text-red-500">{error.message}</div>
                                    </div>
                                )
                                :
                                <></>
                        }

                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}