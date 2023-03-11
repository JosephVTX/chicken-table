import React from "react";

const AlergenosConfig = [
  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/gluten.png",
    name: "Gluten",
    value: "gluten",
  },

  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/cangrejo.png",
    name: "Crustáceo",
    value: "crustaceo",
  },

  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/huevo.png",
    name: "Huevo",
    value: "huevo",
  },
  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/pez.png",
    name: "Pescado",
    value: "pescado",
  },

  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/mani.png",
    name: "Cacahuate",
    value: "cacahuate",
  },

  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/haba-de-soja.png",
    name: "Soja",
    value: "soja",
  },

  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/productos-lacteos.png",
    name: "Lácteos",
    value: "lacteos",
  },

  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/grano-de-cafe.png",
    name: "Frutos",
    value: "frutos",
  },

  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/apio.png",
    name: "Apio",
    value: "apio",
  },

  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/mostaza.png",
    name: "Mostaza",
    value: "mostaza",
  },

  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/sesamo.png",
    name: "Granos de sésamo",
    value: "granos",
  },

  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/sulfitos.png",
    name: "Dióxido de azufre y sulfitos",
    value: "dioxido",
  },

  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/cascara.png",
    name: "Moluscos",
    value: "moluscos",
  },

  {
    icon: "https://roostchickenspain.com/funodeec/2023/03/altramuces.png",
    name: "Altramuces",
    value: "altramuces",
  },
];

const Icon = ({ alergeno }) => {
  return (
    
      <img className="w-[26px] h-[26px] " src={alergeno.icon} />
    
  );
};
export default function AlergenosIcons() {
  return (
    <ul className="flex flex-wrap justify-evenly gap-4 max-lg:hidden">
      {AlergenosConfig.map((alergeno, index) => (
        <li key={index} className="flex flex-col items-center ">
          <Icon alergeno={alergeno} />

          <span className="text-xs text-center mt-1 max-w-[10ch]">
            {alergeno.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
