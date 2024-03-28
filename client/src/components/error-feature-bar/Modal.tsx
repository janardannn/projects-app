import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";

import { errorSvg } from "./Error";
import { featureSvg } from "./Feature";
import { githubSvg } from "../bottombar/Github";

type ModalProps = {
    type: "error" | "feature",
    title: string,
    url: string
}

const dropDownSvg = (size: number) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd">
            </path>
        </svg>

    )
}
export default function Modal({ type, title, url }: ModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    const reportErrorText = type === "error" ? "Report an Error at: " : "Request A Feature";
    const describeText = type === "error" ? "Please describe the issue that you are facing below:" : "Please describe the feature that you would like to suggest below:";
    const buttonColor = type === "error" ? "bg-orange-700" : "bg-green-700";
    return (
        <div className="">
            <button onClick={() => setIsOpen(true)}>{title}</button>

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50">
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/65" aria-hidden="true" />

                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    {/* The actual dialog panel  */}
                    <Dialog.Panel className="mx-auto w-fit rounded-md p-4 bg-[#1b1a1a]">
                        <div className="flex items-center mb-8">
                            {/* <div className="w-[7px] h-full mr-2 bg-orange-700">.</div> */}
                            <div className="mr-2">
                                {type === "error" ? errorSvg(35) : featureSvg(35)}
                            </div>
                            <Dialog.Title className="text-2xl font-semibold">{title}</Dialog.Title>
                        </div>
                        {/* ... */}
                        {type === "error" ?
                            <div className="flex mb-4">
                                <div className="mr-2 font-semibold">{reportErrorText}</div>
                                <div className="break-all">{url}</div>
                            </div>
                            :
                            <div></div>
                        }

                        <div className="mb-6">
                            <div className="mb-1 font-semibold">{describeText}</div>
                            <textarea className="bg-black/40 w-full p-2 rounded-md" placeholder="Describe the issue that you are facing"></textarea>
                        </div>

                        <div className="mb-8 break-words">
                            <Disclosure>
                                {({ open }) => {
                                    return (
                                        <>
                                            <Disclosure.Button className="flex justify-between p-2 bg-[#3a3838] w-full rounded-md text-left">
                                                <div>
                                                    Are you a developer?
                                                </div>
                                                <div className={open ? 'rotate-180 transform' : ''}>
                                                    {dropDownSvg(20)}
                                                </div>
                                            </Disclosure.Button>

                                            <Disclosure.Panel className="p-2 bg-[#2a2a2a] w-full rounded-md text-opacity-100 bg-opacity-65">
                                                If you are a developer feel free to go through the source code at:
                                                <div className="underline my-1 w-fit">
                                                    <a target="blank" href="https://github.com/janardannn/projects-app">
                                                        <div className="flex items-center ml-2 text-md">
                                                            <div>{githubSvg(20)}</div>
                                                            /projects-app
                                                        </div>
                                                    </a>
                                                </div>
                                                Create PRs for issues or features!
                                                <div />
                                                Keep Coding!
                                            </Disclosure.Panel>
                                        </>
                                    )
                                }}


                            </Disclosure>
                        </div>

                        <div className="flex justify-between">
                            <button className={"px-2 py-1 rounded-md bg-slate-800 hover:" + buttonColor}>{type === "error" ? "Report" : "Suggest"}</button>
                            <button className="px-2 py-1 rounded-md bg-slate-800 hover:bg-red-700" onClick={() => {
                                setIsOpen(false)
                            }}>Close</button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}