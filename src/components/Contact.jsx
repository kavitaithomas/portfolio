import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full">
      <div>
        <div className="mt-16 flex flex-col justify-center max-w-2xl py-6">
          <p>Contact</p>
          <p>Submit the form below to get in touch with me!</p>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <form action="">
            <div className="py-4 flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-my-gray focus:outline-none md:w-1/2"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your e-mail"
                className="p-2 bg-transparent border-2 rounded-md text-my-gray focus:outline-none md:w-1/2"
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 w-full bg-transparent border-2 rounded-md text-my-gray focus:outline-none"
            ></textarea>
            <button className="text-my-gray bg-black px-6 py-3 my-4 flex items-start rounded-md hover:scale-110 duration-200">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
