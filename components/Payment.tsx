import React from "react";

const Payment = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-2 pb-3 mb-5' style={{padding: "1rem"}}>
  <h3 className='text-xl mb-8 font-semibold border-b pb-4'>TO GET THE COMPLETE ARTICLE CLICK THIS LINK</h3>
  <div style={{display: "flex", justifyContent: "center"}}>
    <button 
      className='text-sm pb-2 font-normal bg-red-700 shadow-lg rounded-lg hover:bg-black hover:text-black-700 hover:border-red-700 transition-all duration-900 hover:scale-110' 
      style={{color: "white", padding: "0.75rem 2.5rem", fontSize: "1.25rem"}} 
      onClick={() => window.location.href = "https://www.paypal.com/gateway/"}
    >
      click to get article
    </button>
  </div>
</div>


  );
};

export default Payment;
