import React from "react";

const menuArr = [
  {
    name: "Entrantes",
    href: "#entrantes",
  },

  {
    name: "Burgers",
    href: "#burgers",
  },

  {
    name: "Bowls",

    href: "#bowls",
  },

  {
    name: "Postres",

    href: "#postres",
  },

  {
    name: "Salsas",

    href: "#salsas",
  },

  {
    name: "Extras",

    href: "#extras",
  },

  {
    name: "Bebidas",

    href: "#bebidas",
  },

  {
    name: "Preparaciones",

    href: "#preparaciones",
  },
];
export default function MenuAlergeno() {
  return (
    <ul className="grid max-[460px]:grid-cols-2 grid-cols-4 gap-2 tw-container ">
      {menuArr.map((item, index) => (
        <li key={index} className="text-center rounded-md   py-2 bg-gray-200 text-black font-semibold">
          <a className="h-full w-full block" href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
