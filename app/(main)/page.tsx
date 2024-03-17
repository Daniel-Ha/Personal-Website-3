import Image from "next/image";
import "@/public/images/Pic_of_me.jpeg"
const About = () => {
  return (
<div className="flex flex-col items-center justify-center min-h-screen">
            
            {/*Picture of me!*/}
            <div className="flex justify-center w-full">
                <img 
                    src="/images/Pic_of_me.jpeg"
                    alt="a pic of me" 
                    className="pb-10 pt-5 w-11/12 h-auto sm:w-3/5 md:w-1/2 lg:1/3 "
                />
            </div>

            {/*Text about me*/}
            <div className="px-4 w-full sm:w-5/6 md:w-4/5 lg:w-3/4">
                <h1 className="text-black dark:text-white text-2xl mb-4">
                    Hello! My name is Daniel Ha.
                </h1>
                <p className="text-black dark:text-white mb-5">
                    I am a prospective software engineer based out of Arroyo Grande, California. I am currently working on software projects, learning various software skills from online resources, and searching for jobs and other opporunities!
                </p>
                <p className="text-black dark:text-white mb-5">
                    Though I have a variety of interests when it comes to computer science, I am most interested in data science and artifical intelligence.
                </p>
                <p className="text-black dark:text-white mb-5">
                    In my freetime, I enjoy playing tennis, going to the gym, and playing Super Smash Bros Ultimate!
                </p>
                <p className="text-black dark:text-white mb-5">
                    Please feel free to explore my website for a more comprehensive look at my coding experience. I welcome opportunities to collaborate and contribute to computer science related projects!
                </p>
                <p className="text-black dark:text-white mb-16">
                    If you would like to contact me, I can be reached by email at dannyha@outlook DOT com!
                </p>
            </div>

            {/*Copyright info*/}
            <footer className="text-black dark:text-white text-xs flex justify-center">
                © 2024 Daniel Ha created using Next.js
            </footer>
        </div>
  );
}

export default About;