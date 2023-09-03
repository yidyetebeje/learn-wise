"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Slider from "./Slider";

interface Title {
  title: string;
  setOpen: () => void;
  open: boolean;
  setTitle: (e: string) => void;
}

export default function Example({ title, setOpen, open, setTitle }: Title) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-3xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          <div className="flex gap-5 border-b border-gray-200">
                            <button
                              onClick={() => setTitle("Quiz")}
                              className={`flex ${
                                title === "Quiz"
                                  ? "border-b-2 border-blue-400"
                                  : ""
                              }`}
                            >
                              Quiz
                            </button>
                            <button
                              onClick={() => setTitle("Key Points")}
                              className={`flex ${
                                title === "Key Points"
                                  ? "border-b-2 border-blue-400"
                                  : ""
                              }`}
                            >
                              Key Points
                            </button>
                            <button
                              onClick={() => setTitle("Summary")}
                              className={`flex ${
                                title === "Summary"
                                  ? "border-b-2 border-blue-400"
                                  : ""
                              }`}
                            >
                              Summary
                            </button>
                          </div>
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={setOpen}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      {title == "Quiz" && (
                        <div className=" h-full flex flex-col">
                          <h1 className="text-xl text-center py-5">Quiz</h1>
                          <Slider />
                        </div>
                      )}
                      {title == "Key Points" && (
                        <div className="flex flex-col gap-5 py-2">
                          <h1 className="text-center text-lg py-3 border border-black rounded-md">
                            KEY POINTS
                          </h1>
                          <div className="rounded-md px-5 py-5 flex flex-col gap-2 border border-black">
                            <div className="px-3 rounded-md border border-black">
                              Key Word
                            </div>
                            <div className="px-3 leading-6 rounded-md border border-black">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptas quam laborum voluptate
                              quibusdam assumenda quidem corrupti architecto
                              quae officia. Quis sunt enim autem ab facere. Quam
                              excepturi recusandae tenetur facilis.
                            </div>
                          </div>
                          <div className="rounded-md px-5 py-5 flex flex-col gap-2 border border-black">
                            <div className="px-3 rounded-md border border-black">
                              Key Word
                            </div>
                            <div className="px-3 leading-6 rounded-md border border-black">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Voluptas quam laborum voluptate
                              quibusdam assumenda quidem corrupti architecto
                              quae officia. Quis sunt enim autem ab facere. Quam
                              excepturi recusandae tenetur facilis.
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
