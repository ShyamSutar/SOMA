import React from "react";
import pic from "../images/author-image1.jpg";
import 'tw-elements';

export default function About() {
  return (
    <>
      <div className="mt-20">
        <div className="container mx-auto">
          <div className="grid grid-rows-3 grid-cols-4 gap-4">
            <div className="col-span-1">
              <div className="mt-4 w-56 mx-auto">
              <img src={pic} alt="" />
              </div>
            </div>
            <div className="col-span-2">
              <h5 className="text-2xl font-bold leading-tight tracking-tighter m-2">
                Shyam Sutar
              </h5>
              <h6 className="text-sm m-2 text-blue-700 font-bold">
                Web Developer
              </h6>
              <p className="m-2 mb-5">
                RANKINGS: <span>1/10</span>
              </p>

              <ul
                class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
                id="tabs-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <a
                    href="#tabs-home"
                    class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
                    id="tabs-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-home"
                    role="tab"
                    aria-controls="tabs-home"
                    aria-selected="true"
                  >
                    ABOUT
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    href="#tabs-profile"
                    class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
                    id="tabs-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-profile"
                    role="tab"
                    aria-controls="tabs-profile"
                    aria-selected="false"
                  >
                    TIMELINE
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1 mt-2 mx-auto">
              {/* <input type="submit" className="" value="Edit Profile"/> */}
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Edit Profile
                </span>
              </button>
            </div>

            <div className="col-span-1 ml-20">
              <div>
                <p>WORK LINK</p>
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

            <div className="col-span-3">
              <div class="tab-content" id="tabs-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="tabs-home"
                  role="tabpanel"
                  aria-labelledby="tabs-home-tab"
                >

                <div className="grid grid-cols-12">

                  <div className="col-span-6">
                    <label>User ID</label>
                  </div>

                  <div className="col-span-6">
                    <p>75448987478494897</p>
                  </div>

                  <div className="col-span-6 mt-3">
                    <label>Name</label>
                  </div>

                  <div className="col-span-6">
                    <p>Shyam Sutar</p>
                  </div>

                  <div className="col-span-6 mt-3">
                    <label>Name</label>
                  </div>

                  <div className="col-span-6">
                    <p>Shyam Sutar</p>
                  </div>

                  <div className="col-span-6 mt-3">
                    <label>Name</label>
                  </div>

                  <div className="col-span-6">
                    <p>Shyam Sutar</p>
                  </div>

                  <div className="col-span-6 mt-3">
                    <label>Name</label>
                  </div>

                  <div className="col-span-6">
                    <p>Shyam Sutar</p>
                  </div>

                </div>
                  
                </div>
                <div
                  class="tab-pane fade"
                  id="tabs-profile"
                  role="tabpanel"
                  aria-labelledby="tabs-profile-tab"
                >
                  

                  <div className="grid grid-cols-12">

<div className="col-span-6">
  <label>Use  ID</label>
</div>

<div className="col-span-6">
  <p>75448987478494897</p>
</div>

<div className="col-span-6 mt-3">
  <label>Name</label>
</div>

<div className="col-span-6">
  <p>Shyam Sutar</p>
</div>

<div className="col-span-6 mt-3">
  <label>Name</label>
</div>

<div className="col-span-6">
  <p>Shyam Sutar</p>
</div>

<div className="col-span-6 mt-3">
  <label>Name</label>
</div>

<div className="col-span-6">
  <p>Shyam Sutar</p>
</div>

<div className="col-span-6 mt-3">
  <label>Name</label>
</div>

<div className="col-span-6">
  <p>Shyam Sutar</p>
</div>

</div>


                </div>
                <div
                  class="tab-pane fade"
                  id="tabs-messages"
                  role="tabpanel"
                  aria-labelledby="tabs-profile-tab"
                >
                  Tab 3 content
                </div>
                <div
                  class="tab-pane fade"
                  id="tabs-contact"
                  role="tabpanel"
                  aria-labelledby="tabs-contact-tab"
                >
                  Tab 4 content
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

// <div className="grid grid-row">
// left side url

//   <div className="col-span-4">
// <div>
//   <p>
//     WORK LINK
//   </p>
//     <a href="/">Youtube</a>
//     <br />

//     <a href="/">Instagram</a>
//     <br />

//     <a href="/">Real Fact</a>
//     <br />

//     <a href="/">Github</a>
//     <br />

//     <a href="/">Web Developer</a>
//     <br />

//     <a href="/">Software Engineer</a>
//     <br />
// </div>
//   </div>

// right side data toggle

//   <div className="col-span-8 pl-5">
//     <div>

//     </div>
//   </div>

// </div>
