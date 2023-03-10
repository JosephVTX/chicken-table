import React, { useEffect } from "react";

import Select from "react-select";
import { alergenosOptions } from "../components/@alergenos/AlergenosOptions";

export default function Test() {
  const [alergenos, setAlergenos] = React.useState([]);

  const [alergenosCode, setAlergenosCode] = React.useState({});
  const [name, setName] = React.useState("");
  const [url, setUrl] = React.useState("");

  useEffect(() => {
    setAlergenosCode({


        nombre: name,
        check: alergenos.map((alergeno) => alergeno.value),
        href: url,
    });
  }, [alergenos, name, url]);
  return (
    <div className="m-4">
      <section className="flex flex-col gap-2">
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nombre"
          className="p-4 w-[400px] mb-4 outline-none border"
        />
        <label htmlFor="web">Ruta Web</label>
        <input
          id="web"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="Ruta Web"
          className="p-4 w-[400px] mb-4 outline-none border"
        />
      </section>
      <div className="mb-10 ">
        <Select
          onChange={(e) => {

            setAlergenos(e);


          }}
          isMulti
          name="alergenos"
          options={alergenosOptions}
          className="w-[400px]"
          classNamePrefix="select"
        />
      </div>
      <pre className="mt-40">{JSON.stringify(alergenosCode)}</pre>
    </div>
  );
}
