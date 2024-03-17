'use client';

import { Carousel } from 'flowbite-react';

function Projects() {
  return (
    // This container centers content vertically and adds top padding
    <div className="flex flex-col items-center pt-10 min-h-screen">
      <h1 className='text-2xl pb-10'>
        Projects
      </h1>
        <div className="w-[70vw] h-[70vh] bg-gray-600 rounded-lg">
          <Carousel slide={false} draggable={false}>
            <div className=" px-10 py-8 flex flex-col bg-white h-[60vh] w-[60vw] rounded-lg text-black justify-center items-center">
              <h1 className="mb-4">
                I love the process of creating things using code 
              </h1>
              <h1 className="mb-4">Here are some projects I have worked on:</h1>
              <h1>Scroll for more -></h1>
            </div>
            <div className=" px-10 py-8 flex flex-col bg-white h-[60vh] w-[60vw] rounded-lg text-black justify-center items-center">
              <div className="overflow-y-scroll flex flex-col h-full px-10 py-8">
                <h1 className="mb-4 font-bold text-lg"> Doon Chatbot:</h1>
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
                  , we also worked with Moon's developing codebase to build a UI for
                  Moon Wallet in the form of a{" "}
                  <span className="font-bold">DApp</span> (decentralized
                  application) which was used to showcase our product and allow
                  users to pay for Doon's services using Ethereum.
                </p>
                <p className="mt-3">
                  In this project, I designed the chatbot's database and backend
                  architecture, worked on the chatbot code, created the Moon
                  Wallet UI for our website which involved communication with a
                  professional working on the codebase, and was the Scrum master for our team.
                </p>
                <p className="mt-3">
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
                <p className="mt-3">
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
            </div> 
            <div className=" px-10 py-8 flex flex-col bg-white h-[60vh] w-[60vw] rounded-lg text-black justify-center items-center">
              <div className="overflow-y-scroll justify-center flex flex-col h-full px-10 py-8">
                <h1 className="mb-4 font-bold text-lg">Full Stack Notion Clone:</h1>
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
            </div>
            <div className=" px-10 py-8 flex flex-col bg-white h-[60vh] w-[60vw] rounded-lg text-black justify-center items-center">
              <div className="overflow-y-scroll justify-center flex flex-col h-full px-10 py-8">
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
            </div>
            <div className=" px-10 py-8 flex flex-col bg-white h-[60vh] w-[60vw] rounded-lg text-black justify-center items-center">
              <div className="flex flex-col justify-center h-full px-10 py-8">
                <h1 className="mb-4 font-bold text-lg">This website:</h1>
                <p className="mb-3">
                  This is my third iteration of a personal website. It was created using{" "}
                  <span className="font-bold">Next.js</span>.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
    </div>
  );
};

export default Projects;