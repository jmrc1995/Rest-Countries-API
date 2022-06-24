import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Filter from "./Filter";
// import CountryInfo from "./CountryInfo";

const url = "https://restcountries.com/v3.1/all";

function Countries({ input }) {
  const [country, setCountry] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const newData = await response.json();
    setCountry(newData);
    // console.log(country);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = country.filter((el) => {
    if (input == "") {
      return el;
    } else {
      return el.name.common.toLowerCase().includes(input);
    }
  });

  return (
    <>
    {/* <Filter /> */}
    
      <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {filteredData.map((c, index) => {
          const { name, flags, population, region, capital } = c;

          return (
              <Link to={`/${name.common}`}key={name.common}>

              <article id="country" className="px-8  " key={index}>
              <div className="bg-white dark:bg-light-grey dark:text-white shadow-2xl my-20   font-thin rounded">
                <img
                  className="rounded-t-lg"
                  src={flags.svg}
                  alt={name.common}
                />
                <div className="p-8">
                  <h2 className="font-bold mb-5 text-xl">{name.common}</h2>
                  <h3 className="font-medium">
                    Population:
                    <span className="font-thin"> {population}</span>
                  </h3>
                  <h3 className="font-medium">
                    Region: <span className="font-thin">{region}</span>
                  </h3>
                  <h3 className="font-medium">
                    Capital: <span className="font-thin">{capital}</span>
                  </h3>
                </div>
              </div>
            </article>
              </Link>

          );
        })}
        <Outlet/>
       
      
      </section>
    </>
  );
}

export default Countries;
