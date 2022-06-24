import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CountryInfo() {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}?access_key=${process.env.REACT_APP_ACCESS_KEY}`
      );
      const data = await res.json();
      setCountry(data);
      setIsLoading(false);
      console.log(data);
    };

    fetchCountryData();
  }, [name]);

  return (
    <>
      {isLoading ? (
        <h1 className="flex items-center justify-center h-screen text-4xl uppercase tracking-widest text-gray-900 dark:text-white lg:text-7xl font-bold">
          Loading...
        </h1>
      ) : (
        <div className="w-screen h-screen">
          <button className="mt-10 ml-3">
            <Link
              to="/"
              className="bg-black pb-3 pt-2 pl-4 pr-6 rounded shadow text-white fobt-bold tracking-wide animate-pulse"
            >
              &larr; Back
            </Link>
          </button>

          <section className="pt-20  px-5 xl:px-0 ">
            {country.map(
              ({
                name,
                capital,
                region,
                tld,
                flags,
                nativeName,
                population,
                subregion,
                currencies,
                languages,
                borders,
              }) => (
                <article key={name}>
                  <img src={flags.svg} alt={name.common} />
                  <h2 className="text-4xl  font-bold text-gray-900 dark:text-white mt-10 mb-5">
                    {name.common}
                  </h2>
                  <ul>
                    <li className="text-gray-900 dark:text-white">
                      Native Name: {nativeName}
                    </li>
                    <li className="text-gray-900 dark:text-white ">
                      Population: {population}
                    </li>
                    <li className="text-gray-900 dark:text-white">
                      Region: {region}
                    </li>
                    <li className="text-gray-900 dark:text-white ">
                      Sub Region: {subregion}
                    </li>
                    <li className="text-gray-900 dark:text-white ">
                      Capital: {capital}
                    </li>
                    <li className="text-gray-900 dark:text-white ">
                      Top Level Domain: {tld}
                    </li>
                    <li className="text-gray-900 dark:text-white ">
                      Currencies: {Object.values(currencies)[0].name}
                    </li>
                    <li className="text-gray-900 dark:text-white ">
                      Languages: {Object.values(languages).toString()}
                    </li>
                  </ul>

                  <aside>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-10 mb-5">
                      Borders:
                    </h2>
                    {borders ?
                      borders.map((border) => (
                        <button className="bg-white dark:bg-light-grey dark:text-white first:mx-0 mx-2 my-3 pb-3 pt-2 pl-4 pr-6 rounded shadow  fobt-bold tracking-wide">{border.toString()}</button>
                      )): <p className=" dark:text-white font-bold tracking-wide"> There are no borders </p>}
                  </aside>
                </article>
              )
            )}
          </section>
        </div>
      )}
    </>
  );
}

export default CountryInfo;
