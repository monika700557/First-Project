import React from "react";

const InvoiceDetailsSecPage = () => {
  return (
    <div className=" relative bg-white w-[65%] m-auto shadow-md h-[115vh] border-0">


      <div className=" p-6 rounded-md   flex flex-row  justify-between">
        <div className="text-3xl  font-bold text-blue-600">Tiara</div>

        <div className="flex flex-col justify-end  items-end">
          <p className="font-semibold text-md"> Order: <span className="font-medium text-sm">: #00124</span></p>
          <p className="font-semibold text-md"> Issued: <span className="font-medium text-sm">20/07/2019</span> </p>
        </div>
      </div>

      <div className="  p-6 rounded-md  flex  py-4  flex-row justify-between">
        <div>
          <h3 className="text-xl font-bold"><span></span>Invoice From</h3>
          
           <div className="flex flex-col mt-2">
           <p className="font-semibold text-sm mt-2">9087424882</p>
          <p className="font-semibold text-sm">299 Star Trek Drive, Panama City,Address line 1, Address line 2
          </p>
          <p className="font-semibold text-sm">Zip code, City, Country</p>
           </div>
        
        </div>

        <div className="flex flex-col justify-end  items-end">
          <h3 className="text-xl font-bold">Invoice To</h3>
          <br />
          <p className="font-semibold text-sm">Walter Roberson</p>
          <p className="font-semibold text-sm">299 Star Trek Drive, Panama City,</p>
          <p className="font-semibold text-sm">Florida, 32405, USA</p>
      
        </div>
      </div>


      <hr  className="mt-0 py-4 w-[98%] m-auto "/>

      <div className="  p-4 rounded-md  flex  mt-[-3rem] flex-row justify-between">
        <div>
          <h3 className="text-xl font-bold"><span></span>Payment Method </h3>
          
           <div className="flex flex-col mt-2">
           <p className="font-semibold text-sm mt-2">Debit Card</p>
          <p className="font-semibold text-sm">XXXXXXXXXXXXXX- 3501
          </p>
          <p className="font-semibold text-sm">HDFC Bank</p>
           </div>
        
        </div>
      </div>


      <div className=" p-4 mt-[-1rem] rounded-md ">
        <h2 className="font-semibold text-xl mt-2">Items</h2>
        <table className="w-full table-auto">
          <thead className="bg-[#F7F7FF] h-[6vh] ">
            <tr className="items-start border-b-gray-200 border-b">
              <th className=" pb-2 p-4 w-[70%] text-left">Items</th>
    
          
              <th className=" pb-2 text-right w-[10%]">Quantity</th>
              <th className=" pb-2 text-right w-[10%] ">Price</th>
              <th className=" pb-2 text-right w-[10%]">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="p-4">
            <tr className=" pb-2 p-4 font-semibold  text-sm border-b-gray-200 border-b">
              <td className="p-4 w-[50%]">UI/UX Designing</td>
              <td className="text-end">2</td>
              <td className="text-end">$1100</td>
              <td className="text-end">2</td>
            
            </tr>
            <tr className=" pb-2 p-4 font-semibold border-b-gray-200 border-b">
              <td className="p-4 w-[50%]">Website Development</td>
              <td className="text-end">1</td>
              <td className="text-end" >$1500</td>
              <td className="text-end">3</td>
              
            </tr>
            <tr className=" pb-2 p-4 font-semibold border-b-gray-200 border-b">
              <td className="p-4 w-[50%] ">SEO Services</td>
              <td className="text-end">5</td>
              <td className="text-end">$11500</td>
              <td className="text-end">1</td>
         
            </tr>
            <tr className="  pb-2 p-4 font-semibold border-b-gray-200 border-b">
              <td className="p-4 w-[50%] h-[5vh]"></td>
              <td className="p-4 pb-4 py-4"></td>
              <td className="text-end text-gray-500 text-sm ">SubTotal</td>
              <td className="text-end">$1,100</td>
             
            </tr>
            <tr className="  pb-2 p-4 font-semibold border-b-gray-200 border-b">
              <td className="p-4 w-[50%] h-[5vh]"></td>
              <td></td>
              <td className="text-end text-gray-500 text-sm">Tax</td>
              <td className="text-end">$10</td>
             
            </tr>
            <tr className="  pb-2 p-4 font-semibold border-b-gray-200 border-b">
              <td className="p-4 w-[50%] h-[5vh]"></td>
              <td></td>
              <td className="text-end text-gray-500 text-sm">Discount (11%)</td>
              <td className="text-end">$100</td>
             
            </tr>

            <tr className="  pb-2 p-4 font-semibold border-b-gray-200 border-b">
              <td className="p-4 w-[50%] h-[5vh]"></td>
              <td></td>
              <td className="text-end text-black text-sm font-semibold">Total</td>
              <td className="text-end font-semibold">$2,00</td>
             
            </tr>

          </tbody>
        </table>
      </div>


      <div className="mt-4 flex flex-col justify-end text-end items-end  pr-4">
        <img
          src="https://kanakku.dreamstechnologies.com/html/template-materializecss/assets/img/signature.png"
          className=" h-[7vh] w-[10rem]"
        />
        <p className="font-medium text-base">Digital Signature</p>
      </div>

      
      <hr  className="mt-4  w-[98%] m-auto "/>

    
        <span className=" p-4 pt-4 text-xl font-semibold">Notes:</span>
        <p className="p-2 text-gray-500 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus.</p>
      

   
    </div>
  );
};

export default InvoiceDetailsSecPage;
