import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Countries from "./Countries";


function Filter({ country }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    let lowerCase = event.target.value.toLowerCase();
    setValue(lowerCase);
  };

  return (
    <>
      <section className="mx-5 text-white">
        <form
          className=" shadow-xl bg-white dark:bg-light-grey dark:text-white flex items-center w-full b p-5 rounded mt-5"
        >
          <AiOutlineSearch className="dark:text-white text-black"/>
          <input
            type="search"
            name="search"
            onChange={handleChange}
            value={value}
            className="text-black p-2 ml-5 bg-transparent"
            placeholder="Search for country ..."
          />
        </form>

        <div className="shadow-xl bg-white dark:bg-light-grey dark:text-white mt-8 w-1/2 p-5 rounded">
          <select className="bg-transparent dark:text-white text-black">
            <option value="Filter by region"> Filter by region </option>
            <option value="Africa"> Africa </option>
            <option value="America"> America </option>
            <option value="Asia"> Asia </option>
            <option value="Europe"> Europe </option>
            <option value="Oceania"> Oceania </option>
          </select>
        </div>
      </section>
      <Countries input={value} />
    </>
  );
}

export default Filter;
