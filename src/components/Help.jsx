import { useState } from "react";
import FAQ from "./FAQ";

function Help() {    

  const [faqs, setFaqs] = useState([
    {
      question: "How often should I check the dashboard for updates?",
      answer: "The frequency of the dashboard may vary depending on your specific needs. Some users may check the dashboard daily, while others may check it less frequently based on their workflow and objectives",
      open: true,
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes. The application and dashboard uses hashed systems to ensure the security of your information!",
      open: false,
    },
    {
      question: "Is there a cost to using the services here?",
      answer: "No. The services provided by the MedPay application and dashboard are absolutely free!",
      open: false,
    },
    {
      question: "How do I interprete the data on the dashboard?",
      answer: "The data on the dashboard are representative of all the expenses and incomes made by the hospital system thus easily readable from the transactions and analytics pages!",
      open: false,
    },
    {
      question: "What is the dashboard used for?",
      answer: "The dashboard is used to represent the figures and how the overal hospital system is doing through the figures it portrays!",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <>
    <div >
        <h1 className="text-center mt-12"><b>Frequently Asked Questions</b></h1>
       <div className="App">
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
      </div>

      <div className='faqs-contact'>
        <p> <b>Still have Questions?</b> </p>
        <p>If you are unable to find answers to your questions in our FAQ <br />
        section, contact our customers support via <span style={{ color: "blue" }}>+23482000078</span></p>
     </div>
    </>
  )
}

export default Help
