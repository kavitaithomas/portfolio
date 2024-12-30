import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="mt-16 pb-20">
        <p>Contact</p>
        <p>Submit the form below to get in touch with me!</p>
      </div>

      <div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-my-gray focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your e-mail"
            className="p-2 bg-transparent border-2 rounded-md text-my-gray focus:outline-none"
          />
          <textarea
            name="message"
            rows="10"
            className="p-2 bg-transparent border-2 rounded-md text-my-gray focus:outline-none"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
