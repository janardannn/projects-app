import { Disclosure } from "@headlessui/react";

import { githubSvg } from "../bottombar/Github";

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

export default function () {
    return (
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
                            <p>If you are a developer feel free to go through the source code at:</p>
                            <div className="underline my-1 w-fit">
                                <a target="blank" href="https://github.com/janardannn/projects-app">
                                    <div className="flex items-center ml-2 text-md">
                                        <div>{githubSvg(20)}</div>
                                        /projects-app
                                    </div>
                                </a>
                            </div>
                            <p>Create PRs for issues or features!</p>
                            <p>Keep Coding!</p>
                        </Disclosure.Panel>
                    </>
                )
            }}


        </Disclosure>
    )
}