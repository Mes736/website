import React, { useState } from 'react'
// import faq from '../assets/Image Box (2).png'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "What types of electrical services does Electema provide for homes?",
        answer: "We provide electrical services for homes, businesses, and schools.We also provide electrical services for commercial and industrial properties."
      },
      {
        question: "How quickly can Electema respond to emergency electrical issues at my home?",
        answer: "We respond to emergency electrical issues quickly. We are a team of experts in the field and we are always available to help you."
      },
      {
        question: "Do you offer customer support?",
        answer: "Yes, we offer 24/7 customer support. You can reach us via email or phone."
      }
    ];
  
  return (
    <div className="p-6 md:p-10 md:px-40 flex flex-col md:flex-row gap-x-6 md:gap-x-40 bg-[#F5F5F5] h-full md:h-full">
      <div className="flex flex-col mb-6 md:mb-0">
        <div>
          <h1 className="text-lg md:text-xl font-semibold text-[#0B378D]">Questions and Answers</h1>
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold py-4 md:py-7">Frequently Asked <br />Questions</h1>
        </div>
        {/* <div className=''>
          <img src={faq} alt="faq" />
        </div> */}
      </div>
      <div className="flex flex-col">
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item my-2">
              <div className="faq-question flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(index)}>
                <h3 className="text-base md:text-xl font-small">{faq.question}</h3>
                <span className='text-xl md:text-2xl'>{openIndex === index ? '×' : '+'}</span>
              </div>
              <div className={`faq-answer mt-2 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
          <div className="help-card mt-4 p-6 md:p-10 border rounded-lg bg-black text-center text-white space-y-6 space-x-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Need More Help?</h3>
            <p className="text-lg md:text-xl text-gray-400">Contact our support team for further assistance.</p>
            <button className="bg-[#CAEE5A] text-black font-semibold px-8 py-4 rounded-full">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
