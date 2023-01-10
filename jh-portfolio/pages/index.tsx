import Head from "next/head"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai"
import Image from "next/image"
import justin from "../public/jh-1000x750.jpg"
import languages from "../public/icons8-language-64.png"
import frameworks from "../public/icons8-framework-64.png"
import systems from "../public/icons8-systems-64.png"
import web1 from "../public/project.png"
import web2 from "../public/project.png"
import web3 from "../public/project.png"
import web4 from "../public/project.png"
import { useState } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Head>
        <title>Justin Harris Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-2 flex justify-between ">
            <h1 className="text-xl font-burtons">developed by jh</h1>
            <ul className="flex items-center">
              {/* <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li> */}
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://docs.google.com/document/d/1v12Q8dt1ZT4hIGjDwPRxEdfZfvx3T_1OdG6XkW5oylg/edit?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-1 mt-n-12">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Justin Harris
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Software Engineer</h3>
            <p className="text-md py-3 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Meticulously detail-oriented, curious, energetic leader. Obsessed
              with leveraging team talent for innovative ideas and digital
              solutions.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600">
            <a href="mailto:justin.r.harris@gmail.com">
              <AiFillMail />
            </a>

            <a href="https://github.com/justinharris23" target="_blank">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/justin-harris1/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
            <Image
              src={justin}
              alt="an image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 mt-10">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem Ipsum, Lorem Ipsum, In 2023 I completed the Software
              Engineering class at General Assembly, a 4 Month immersive program
              where we created and deployed Full Stack Applications with User
              Interactive Client Side webpages and Server Side Databases. During
              the program we've learned the following languages, frameworks, and
              developer tools:
              {/* <span className="text-teal-500"> agencies </span> ipsum Lorem
              ipsum Lorem ipsum Since the beginning Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem */}
            </p>
          </div>
          <div className="flex justify-center lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="display flex justify-center">
                <Image src={languages} alt="design" width={75} height={75} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Languages</h3>
              <p className="py-2">Javascript</p>
              {/* <h4 className="py-4 text-teal-600">Languages used</h4> */}
              <p className="text-gray-800 py-1">HTML/CSS</p>
              <p className="text-gray-800 py-1">SQL</p>
              <p className="text-gray-800 py-1">Python</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="display flex justify-center">
                <Image src={frameworks} alt="design" width={75} height={75} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Frameworks & Libraries
              </h3>
              <p className="py-2">React</p>
              {/* <h4 className="py-4 text-teal-600">Frameworks used</h4> */}
              <p className="text-gray-800 py-1">Sequelize</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">Django</p>
            </div>
            <div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <div className="display flex justify-center">
                  <Image src={systems} alt="design" width={75} height={75} />
                </div>
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Developer Tools & Systems
                </h3>
                <p className="py-2">Node.js</p>
                {/* <h4 className="py-4 text-teal-600">Tools & Systems used</h4> */}
                <p className="text-gray-800 py-1">Git and Github</p>
                <p className="text-gray-800 py-1">PostgreSQL</p>
                <p className="text-gray-800 py-1">VSCode</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 mt-10">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              <span className="text-teal-500"> agencies </span>
              ipsum Lorem ipsum Lorem ipsum Lorem{" "}
              <span className="text-teal-500"> agencies </span> ipsum Lorem
              ipsum Lorem ipsum Since the beginning Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt="web2"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="web3"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="web4"
                className="rounded-lg object-cover"
                width="100%"
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
