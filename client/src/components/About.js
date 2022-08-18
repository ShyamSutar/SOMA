import React from "react";
import pic from "../images/author-image1.jpg";

export default function About() {
  return (
    <>
      <div className="mt-20">
        <div className="container mx-auto">
          <div className="grid grid-rows-3 grid-cols-12 gap-4">
            <div className="col-span-4">
              <img src={pic} alt="" />
            </div>
            <div className="col-span-6">
              <h5 className="text-2xl font-bold leading-tight tracking-tighter m-2">
                Shyam Sutar
              </h5>
              <h6 className="text-sm m-2 text-blue-700 font-bold">
                Web Developer
              </h6>
              <p className="m-2 mb-5">
                RANKINGS: <span>1/10</span>
              </p>

              <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                  <li className="mr-2">
                    <a
                      id="home-tab"
                      href="#home"
                      className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="mr-2">
                    <a
                      href="#profile"
                      id="profile-tab"
                      className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                      aria-current="page"
                    >
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-2 mt-2">
              {/* <input type="submit" className="" value="Edit Profile"/> */}
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Edit Profile 
                </span>
              </button>
            </div>

            <div className="grid grid-row">
              {/* left side url */}


                <div className="col-span-4">
                  <div>
                    <p>
                      WORK LINK
                    </p>
                      <a href="/">Youtube</a>
                      <br />
                      
                      <a href="/">Instagram</a>
                      <br />
                      
                      <a href="/">Real Fact</a>
                      <br />
                      
                      <a href="/">Github</a>
                      <br />
                      
                      <a href="/">Web Developer</a>
                      <br />
                      
                      <a href="/">Software Engineer</a>
                      <br />
                  </div>
                </div>


              {/* right side data toggle */}

                <div className="col-span-8 pl-5">
                  <div>
                      
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
