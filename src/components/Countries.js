import React from "react";
import { useState, useEffect } from "react";


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

      <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {filteredData.map((c, index) => {
          const { name, flags, population, region, capital } = c;

          return (
            <article id="country" className="px-8" key={index}>
              <div className="my-20 bg-light-grey text-white font-thin rounded">
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
          );
        })}
      </section>
    </>
  );
}

export default Countries;
