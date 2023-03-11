import React, { useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";

import { CgClose } from "react-icons/cg";
import AlergenosConfig from "../@alergenos/AlergenosConfig";

import { IoCloseSharp } from "react-icons/io5";

import { RiExternalLinkFill } from "react-icons/ri";

const Icon = ({ alergeno, filterArr, setFilterArr, title }) => {
  const [check, setCheck] = useState(false);

  const handleFilter = (e) => {
    const checked = e.target.checked;

    setCheck(checked);

    if (checked) {
      setFilterArr([...filterArr, alergeno.value]);
    } else {
      setFilterArr(filterArr.filter((item) => item !== alergeno.value));
    }
  };

  return alergeno.icon ? (
    <div className="flex flex-col items-center">
      <label
        htmlFor={`${alergeno.value}${title?.replace(/ /g, "")}`}
        className="cursor-pointer justify-center items-center flex w-[48px] h-[48px] bg-gray-200 rounded-full max-lg:m-auto relative overflow-hidden"
      >
        <div
          className={`select-none pointer-events-none h-full w-full  absolute left-0 top-0 flex justify-center items-center backdrop-blur-[2px] bg-red-100/50 ${
            check ? "block" : "hidden"
          }`}
        >
          <CgClose className="text-black drop-shadow text-4xl" />
        </div>
        <img
          className="w-[36px] h-[36px] select-none"
          src={alergeno.icon}
          alt={alergeno.name}
        />
      </label>

      <input
        onChange={handleFilter}
        id={`${alergeno.value}${title?.replace(/ /g, "")}`}
        type="checkbox"
        hidden
      />

      <span className="lg:hidden text-black text-center max-w-[12ch]">{alergeno.name}</span>
    </div>
  ) : (
    <span className="flex px-2 text-[#FF0000]">{title ?? "Platos"}</span>
  );
};

export default function Table({ title, platosArr }) {
  const [filterArr, setFilterArr] = useState([]);
  const [entrantes, setEntrantes] = useState(platosArr);

  useEffect(() => {
    if (filterArr.length > 0) {
      const filtered = platosArr?.filter((entrante) =>
        filterArr.every((item) => !entrante.check.includes(item))
      );

      setEntrantes(filtered);
    } else {
      setEntrantes(platosArr);
    }
  }, [filterArr]);

  return (
    <table className="border mx-auto w-full max-lg:border-none">
      <thead className="border-b-[1px] border-gray-200 ">
        <tr className="max-lg:flex flex-wrap justify-evenly mb-4">
          {AlergenosConfig.map((alergeno, index) => (
            <th className=" px-2 py-4 max-lg:first:hidden bg-transparent" key={index}>
              <Icon
               
                title={title}
                filterArr={filterArr}
                setFilterArr={setFilterArr}
                alergeno={alergeno}
              />
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="max-lg:space-y-10">
        {entrantes?.length > 0 ? (
          entrantes?.map((entrante, index) => (
            <>
              <div className="lg:hidden text-center text-white py-2 bg-gray-900  text-[17px] font-semibold my-4">
                <a
                  href={entrante?.href ?? "#"}
                  className="lg:p-0 font-semibold max-lg:font-bold flex justify-center gap-2 items-center text-white  w-full h-full   "
                >
                  {entrante.nombre}

                  <span><RiExternalLinkFill/></span>
                </a>
              </div>
              <tr
                className="odd:bg-gray-50     max-lg:grid max-sm:grid-cols-4 grid-cols-5 text-sm "
                key={index}
              >
                {AlergenosConfig.map((alergeno, index) => {
                  return index === 0 ? (
                    <td
                      className="max-lg:hidden lg:w-[180px]  p-1 border-[1px] border-gray-200    min-[1000px]:p-4"
                      key={`${index}x`}
                    >
                      <a
                        href={entrante?.href ?? "#"}
                        className="lg:p-0 font-semibold max-lg:font-bold  w-full h-full  "
                      >
                        {entrante.nombre}
                      </a>
                    </td>
                  ) : (
                    <td
                      className="  min-[1000px]:p-4 border-[1px]  border-gray-200 "
                      key={index}
                    >
                      <span className="lg:hidden text-center flex justify-center mb-2 w-full font-semibold">
                        {alergeno.name}
                      </span>
                      <span className="w-full flex justify-center items-center ">
                        {entrante.check.includes(alergeno.value) ? (
                          <FiCheck className="min-[1000px]:text-xl  text-green-700 font-bold" />
                        ) : (
                          <IoCloseSharp className="min-[1000px]:text-xl text-[#FF0000]" />
                        )}
                      </span>
                    </td>
                  );
                })}
              </tr>
            </>
          ))
        ) : (
          <div className="flex justify-center">
            <span>No hay {title} disponibles.</span>
          </div>
        )}
      </tbody>
    </table>
  );
}
