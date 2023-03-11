import React from "react";
import MenuAlergeno from "../@menuAlergeno/MenuAlergeno";
import Table from "../@table/Table";
import { bebidas } from "./alergenos/bebidas";
import browls from "./alergenos/browls";
import { burgers } from "./alergenos/burgers";
import entrantes from "./alergenos/entrantes";
import { extras } from "./alergenos/extras";
import { postres } from "./alergenos/postres";
import preparaciones from "./alergenos/preparaciones";
import { salsas } from "./alergenos/salsas";
import AlergenosIcons from "./AlergenosIcons";

const Section = ({ title, platosArr, id }) => {
  return (
    <section id={id}>
      <AlergenosIcons />
      <h4 className="text-xl text-center  text-white py-3 bg-chicken my-4 font-bold uppercase tracking-[.08em] lg:hidden">
        {title}
      </h4>

      <p className="my-4 italic text-[18px] text-gray-500/90 max-lg:text-center">
        Marca los alérgenos que deseas evitar pulsando en los iconos.
      </p>
      <Table platosArr={platosArr} title={title} />
    </section>
  );
};

export default function Alergenos() {
  return (
    <>
      <main id="alergenos" className="space-y-10 my-12 container mx-auto ">
        <MenuAlergeno />
        <Section id="entrantes" title="Entrantes" platosArr={entrantes} />
        <Section id="burgers" title="Burgers" platosArr={burgers} />
        <Section id="bowls" title="Bowls" platosArr={browls} />
        <Section id="postres" title="Postres" platosArr={postres} />
        <Section id="salsas" title="Salsas" platosArr={salsas} />
        <Section id="extras" title="Extras" platosArr={extras} />
        <Section id="bebidas" title="Bebidas" platosArr={bebidas} />
        <Section
          id="preparaciones"
          title="Preparaciones"
          platosArr={preparaciones}
        />
      </main>
    </>
  );
}
