import React from "react";
import { Camera, Pencil, CalendarDays, MapPin, Hotel } from "lucide-react";

const ProfilePage = () => {
  return (
    <>
      <div className="ml-[6rem]">
        <h2 className="text-2xl font-bold ">Estimates</h2>
        <p className="text-gray-600 ">Dashboard / Estimates</p>
      </div>

      <div className="flex flex-col ">
        <div
          className="relative mt-[3rem] ml-[6rem] w-[85%] bg-cover h-[10rem] rounded-lg mb-6"
          style={{
            backgroundImage:
              "url('https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-02.jpg')",
          }}
        >
          <div className="relative flex items-center  justify-center">
            <label className="">
              <img
                src="https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/profiles/avatar-02.jpg"
                className="w-28 h-28 border-white  border-2 mt-[5rem] rounded-full "
              />
              <input
                type="file"
                className=" absolute inset-0 opacity-0 cursor-pointer"
              />

              <span className="absolute bottom-2  bg-white p-1 rounded-full shadow-md flex right-[39rem]  items-center  justify-center">
                <Pencil className="" />
              </span>
            </label>
          </div>

          <button className="absolute gap-1 flex flex-row top-[6rem] right-4 p-2 bg-gray-200 rounded-sm hover:bg-gray-300 ">
            <Camera className="text-sm  text-black font-semibold w-4 h-4" />
            <span className="text-sm text-black font-semibold">
              Update Cover
            </span>
          </button>
        </div>

        <p className="flex  justify-center items-center  mt-2 ">
          <h1 className="text-[2rem] font-semibold text-black">
            Charles Hafner{" "}
          </h1>
        </p>
        <div className="flex flex-row justify-center items-center  mt-2 gap-2 ">
          <p className="flex flex-row gap-1 font-semibold text-sm text-gray-600">
            {" "}
            <Hotel className="w-[12px] h-[21px] font-bold" />
            <span>Hafner Pvt Ltd.</span>
          </p>
          <p className="flex flex-row gap-1 font-semibold text-sm text-gray-600">
            <MapPin className="w-[12px] h-[21px]" />{" "}
            <span> West Virginia, US</span>
          </p>
          <p className="flex flex-row gap-1 ml-1 font-semibold text-sm text-gray-600 ">
            {" "}
            <CalendarDays className="w-[12px] h-[21px]" />
            <span>Joined November 2017</span>
          </p>
        </div>

        <div className="flex flex-row ml-[6rem] mt-11 gap-6 w-full">
          <div className="flex flex-col justify-start  w-[30%] ">
            <div className="bg-white p-4 rounded-lg shadow mb-6 ">
              <h2 className="font-bold text-lg">Complete your profile</h2>
              <div className="flex items-center mt-2 gap-4">
                <div className="flex-grow bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-purple-600 h-2 rounded-full w-3/12"></div>
                </div>
                <p className="text-gray-600">30%</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="flex justify-between  border-b border-gray p-4 items-center">
                <h2 className="font-bold text-lg">Profile</h2>
                <button className="text-blue-500">Edit</button>
              </div>

              <ul className="space-y-2 p-4  text-gray-600">
                <li>
                  <strong>About</strong>
                </li>
                <li className="text-sm font-semibold">Charles Hafner <br></br>Hafner Pvt Ltd.</li>
                <strong className=""> Contacts</strong>
            
                <li className="text-sm font-semibold">charleshafner@example.com <br></br>+1 (304) 499-13-66 <br></br></li>
                <strong>Address</strong>
               
               
                <li className="text-sm font-semibold">4663 Agriculture Lane, <br></br> Miami, <br></br>
                Florida, <br></br>33156, United States</li>

                
              </ul>
            </div>
          </div>

          <div className="w-[55%] h-[51vh] overflow-y-scroll">
            <div className="bg-white  rounded-lg shadow">
              <h2 className="font-bold text-lg mb-4 border-b border-gray p-4">Activity</h2>
              <div className="relative  p-[2px]">
                <div className="absolute top-0 left-4 w-px bg-gray-300 h-full"></div>
                <ul className="space-y-4 text-gray-600 pl-[10px] ">
                  <li className="relative pl-6 flex flex-col">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">Nov 16</span> 
                   <span className="text-sm font-semibold"><strong>Brian Johnson</strong> has paid the invoice <strong>#DF65485</strong> </span>


                  </li>
                  <li className="relative pl-6 flex flex-col">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">Nov 16</span> 
                   <span className="text-sm font-semibold"><strong>Brian Johnson</strong> has paid the invoice <strong>#DF65485</strong> </span>


                  </li>
                  <li className="relative pl-6 flex flex-col">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">Nov 16</span> 
                   <span className="text-sm font-semibold"><strong>Brian Johnson</strong> has paid the invoice <strong>#DF65485</strong> </span>


                  </li>
                  <li className="relative pl-6 flex flex-col">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">Nov 16</span> 
                   <span className="text-sm font-semibold"><strong>Brian Johnson</strong> has paid the invoice <strong>#DF65485</strong> </span>


                  </li>
                  <li className="relative pl-6 flex flex-col">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">Nov 16</span> 
                   <span className="text-sm font-semibold"><strong>Brian Johnson</strong> has paid the invoice <strong>#DF65485</strong> </span>


                  </li>
                  <li className="relative pl-6 flex flex-col">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">Nov 16</span> 
                   <span className="text-sm font-semibold"><strong>Brian Johnson</strong> has paid the invoice <strong>#DF65485</strong> </span>


                  </li>
                  <li className="relative pl-6 flex flex-col">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">Nov 16</span> 
                   <span className="text-sm font-semibold"><strong>Brian Johnson</strong> has paid the invoice <strong>#DF65485</strong> </span>


                  </li>
                  <li className="relative pl-6 flex flex-col">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">Nov 16</span> 
                   <span className="text-sm font-semibold"><strong>Brian Johnson</strong> has paid the invoice <strong>#DF65485</strong> </span>


                  </li>
                  <li className="relative pl-6 flex flex-col">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">Nov 16</span> 
                   <span className="text-sm font-semibold"><strong>Brian Johnson</strong> has paid the invoice <strong>#DF65485</strong> </span>


                  </li>
                  <li className="relative pl-6 flex flex-col">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">Nov 16</span> 
                   <span className="text-sm font-semibold"><strong>Brian Johnson</strong> has paid the invoice <strong>#DF65485</strong> </span>


                  </li>
                  <li className="relative pl-6 flex flex-col">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">Nov 16</span> 
                   <span className="text-sm font-semibold"><strong>Brian Johnson</strong> has paid the invoice <strong>#DF65485</strong> </span>


                  </li>
                  <li className="relative pl-6 flex flex-col">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-purple-600 rounded-full"></span>
                    <span className="text-gray-600">Nov 16</span> 
                   <span className="text-sm font-semibold"><strong>Brian Johnson</strong> has paid the invoice <strong>#DF65485</strong> </span>


                  </li>
                  <li>

                  </li>
                  <li>

                  </li>
                </ul>
              </div>
              </div>
              </div>
          
        
















        </div>

        <div className="container mx-auto px-6"></div>
      </div>
    </>
  );
};

export default ProfilePage;
