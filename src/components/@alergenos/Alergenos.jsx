import React from "react";
import Table from "../@table/Table";
import { bebidas } from "./alergenos/bebidas";
import browls from "./alergenos/browls";
import { burgers } from "./alergenos/burgers";
import entrantes from "./alergenos/entrantes";
import { extras } from "./alergenos/extras";
import { postres } from "./alergenos/postres";
import preparaciones from "./alergenos/preparaciones";
import { salsas } from "./alergenos/salsas";

const Section = ({ title, platosArr }) => {
  return (
    <section>
      <h4 className="text-xl text-center  text-white py-3 bg-chicken my-4 font-bold uppercase tracking-[.08em] lg:hidden">
        {title}
      </h4>

      <p className="my-4 italic text-[18px] text-gray-500/90 max-lg:text-center">Marca los alérgenos que deseas evitar pulsando en los iconos.</p>
      <Table platosArr={platosArr} title={title} />
    </section>
  );
};

export default function Alergenos() {
  return (
    <main id="alergenos" className="space-y-10 my-4 container mx-auto ">
      <Section title="Entrantes" platosArr={entrantes} />
      <Section title="Burgers" platosArr={burgers} />
      <Section title="Browls" platosArr={browls} />
      <Section title="Postres" platosArr={postres} />
      <Section title="Salsas" platosArr={salsas} />
      <Section title="Extras" platosArr={extras} />
      <Section title="Bebidas" platosArr={bebidas} />
      <Section title="Preparaciones" platosArr={preparaciones} />
    </main>
  );
}
