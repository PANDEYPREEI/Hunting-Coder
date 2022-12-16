import React, { useState } from "react";

function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (e) => {
    console.log(e)
    if (e.target.name == "fname") {
      setFname(e.target.value);
    }
     else if (e.target.name == "lname") {
      setLname(e.target.value);
    }
     else if (e.target.name == "desc") {
      setDesc(e.target.innerText);
    }
     else if (e.target.name == "email") {
      setEmail(e.target.value);
    } 
    else if (e.target.name == "phone") {
      setPhone(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, fname, lname, email, desc);
  };

  return (
    <>
      <form className="max-w-lg m-auto w-2/4 mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              name="fname"
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              value={fname}
              onChange={handleChange}
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              name="lname"
              value={lname}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              name="email"
              className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              value={email}
              onChange={handleChange}
              id="grid-first-name"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Phone
            </label>
            <input
              name="phone"
              value={phone}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description
            </label>
            <textarea
              value={desc}
              onChange={handleChange}
              name="desc"
              placeholder="Write your concern here"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
              focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="font-bold text-lg bg-black py-3 px-5 w-full  text-white my-10"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Contact;
