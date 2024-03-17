'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import "swiper/css";
import 'swiper/css/effect-coverflow';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "./project_styles.css";

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

function Projects() {

    return (
            <div className="flex flex-col items-center space-y-5">
                <h1 className="pt-10 pb-10 text-3xl text-black dark:text-white">Projects</h1>
                <div className="container rounded-lg bg-gray-600">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        speed={900}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.arrow-next',
                            prevEl: '.arrow-prev',
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container"
                    >
                        <SwiperSlide>
                        <div className="flex flex-col justify-center h-full px-10 py-8 text-black">
                            <h1 className="mb-4">
                            I enjoy the process of creating things using code and the learning
                            that comes from it!
                            </h1>
                            <h1 className="mb-4">Here are some projects I have worked on:</h1>
                            <h1>Scroll for more -{">"}</h1>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="overflow-y-scroll flex flex-col items-center h-full px-10 py-8 text-black">
                                <h1 className="mb-4 font-bold text-lg"> Doon Chatbot:</h1>
                                <img alt="doon" src="/images/Doon_pic.png" className="w-full pb-2"/>
                                <p className="mb-3">
                                    Doon is a chatbot accessible through Telegram. It allows its users
                                    to set up sophisticated notifications which trigger based on
                                    Blockchain activity. It was built in{" "}
                                    <span className="font-bold">Python</span> and utilitzes a{" "}
                                    <span className="font-bold">MySQL</span> database.
                                </p>
                                <p className="mb-3">
                                    Doon was built in a team of 4 for a 6-week apprenticeship called {" "}
                                    <a
                                        className="underline font-bold"
                                        target="_blank"
                                        href="https://bcamp.dev/"
                                        rel="noopener noreferrer"
                                    >
                                        BCamp
                                    </a>
                                    .
                                    <br />
                                    </p>
                                <p>
                                    Since the apprenticeship was sponsored by{" "}
                                    <a
                                        className="underline font-bold"
                                        target="_blank"
                                        href="https://usemoon.ai/"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}
                                        Moon Wallet
                                    </a>
                                    , we also worked with Moon`&apos;`s developing codebase to build a UI for
                                    Moon Wallet in the form of a{" "}
                                    <span className="font-bold">DApp</span> (decentralized
                                    application) which was used to showcase our product and allow
                                    users to pay for Doon`&apos;`s services using Ethereum.
                                </p>
                                <p className="mt-3">
                                    In this project, I designed the chatbot`&apos;`s database and backend
                                    architecture, worked on the chatbot code, created the Moon
                                    Wallet UI for our website which involved communication with a
                                    professional working on the codebase, and was the Scrum master for our team.
                                </p>
                                <p className="mt-3 self-start">
                                    <a
                                        className="underline"
                                        target="_blank"
                                        href="https://youtu.be/MDUJ4z0LjP4"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}
                                        Check out a video demo here!
                                    </a>
                                </p>
                                <p className="mt-3 self-start">
                                    <a
                                        className="underline"
                                        target="_blank"
                                        href="https://github.com/0xBcamp/Kyle-janus-dragon"
                                        rel="noopener noreferrer"
                                    >
                                        {" "}
                                        Check out our codebase here!
                                    </a>
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="overflow-y-scroll text-black flex flex-col justify-center h-full px-10 py-8">
                                <h1 className="mb-4 font-bold text-lg">Full Stack Notion Clone</h1>
                                <p className="mb-3">
                                    A <span className="font-bold">full stack</span> application that recreates the functionality and styling of Notion.
                                </p>
                                <p className="mb-3">
                                    To code this, I followed{" "}
                                        <a
                                        className="underline"
                                        target="_blank"
                                        href="https://devpost.com/software/academiq"
                                        rel="noopener noreferrer"
                                    >
                                        this tutorial
                                    </a>
                                    {" "} by Code with Antonio.
                                </p>
                                <div className="mb-3">
                                    The application utilizes several libraries, the most notable of which include:
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                        <li>
                                            <span className="font-bold">Convex</span> for the database,
                                        </li>
                                        <li>
                                            <span className="font-bold">Edge Store</span> for handling users`&apos;` file uploads,
                                        </li>
                                        <li>
                                            and <span className="font-bold">Clerk</span> for user authentication.
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-3">
                                    Check out the deployed application <a>here</a>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-black overflow-y-scroll flex flex-col h-full px-10 py-8">
                                <h1 className="mb-4 font-bold text-lg">AcademIQ:</h1>
                                <p className="mb-3">
                                    AcademIQ is a Chrome extension that aims to aid the research
                                    process by finding and recommending the most relevant scholarly
                                    papers from arXiv.org to the webpage currently being viewed.
                                </p>
                                <p className="mb-3">
                                    I worked in a team of four and was responsible for the{" "}
                                    <span className="font-bold">front end</span> of the project.
                                </p>
                                <p className="mb-3">
                                    It was an entry in HackDartmouth VIII and won 3rd place!
                                </p>
                                <a
                                    className="underline"
                                    target="_blank"
                                    href="https://devpost.com/software/academiq"
                                    rel="noopener noreferrer"
                                >
                                    Check it out here!
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-black flex flex-col justify-center h-full px-10 py-8">
                                <h1 className="mb-4 font-bold text-lg">This website:</h1>
                                <p className="mb-3">
                                    This is my third iteration of a personal website created using{" "}
                                    <span className="font-bold">Next.js</span>.
                                </p>
                                <p className="mb-3">
                                    For this website, the libraries I used to help design the front end included {" "}
                                    <span className="font-bold">Flowbite</span> and <span className="font-bold">Swiper</span>.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="bg-gray-600 opacity-70 rounded-lg slider-controller items-center justify-between static h-full">
                        <div className="arrow-prev cursor-pointer">
                            <FaArrowLeft
                                className="arrow"
                                size={30}
                            />
                        </div>
                        <div>
                            <div className="swiper-pagination flex justify-center"/>
                        </div>
                        <div className="arrow-next cursor-pointer">
                            <FaArrowRight
                                className="arrow"
                                size={30}
                            />
                        </div>
                </div>
                {/*Copyright info*/}
                <footer className="text-black dark:text-white text-xs flex justify-center">
                    © 2024 Daniel Ha created using Next.js
                </footer>
            </div>
    );
};
export default Projects;