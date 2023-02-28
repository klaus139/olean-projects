import React from "react";
import Link from 'next/link';
import { useRouter } from "next/router";


const Payment = () => {
  const router = useRouter()

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-5">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">To get the complete article click this link</h3>
      <div className="flex justify-center">
        <button
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
          onClick={() => router.push('/PaymentPage')}
        >
          Get the article
        </button>
      </div>
      <div className="text-center mt-8">
        <h2 className="text-lg font-semibold mb-2">Do you need help? Contact us</h2>
        <div className="bg-gray-100 shadow-md rounded-md py-4 px-6">
          <div className="flex items-center mb-2">
            <img 
              alt="email"
              src='https://nicklaus-portfolio.netlify.app/static/media/email.37b9e890eea501421fbf.png'
              className="h-8 mr-2"
            />
            <a href="mailto:elohoag@gmail.com" className="font-semibold hover:underline">elohoag@gmail.com</a>
          </div>
          <div className="flex items-center">
            <img 
              alt="phone"
              src='https://nicklaus-portfolio.netlify.app/static/media/mobile.145d9ce0157a56f8fcd8.png'
              className="h-8 mr-2"
            />
            <a href="tel:+2348065252945" className="font-semibold hover:underline">+2348065252945</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
