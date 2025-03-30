import { Check, Copy } from "@phosphor-icons/react";
import { useState } from "react";
import "./Cores.css";

const groupedColors = {
  "Paleta da Universidade de Fortaleza": [
    { name: "Gelo", color: "#e4f2fe" },
    { name: "Azul Claro", color: "#87b7fe" },
    { name: "Anil", color: "#004aff" },
    { name: "Marinho", color: "#132190" },
  ],
  "Neutral · Variações": [
    { name: "050", color: "#f6f7f9" },
    { name: "100", color: "#ebedf3" },
    { name: "200", color: "#d3d7e4" },
    { name: "300", color: "#acb4cd" },
    { name: "400", color: "#7f8db1" },
    { name: "500", color: "#5f6e98" },
    { name: "600", color: "#4b587e" },
    { name: "700", color: "#3e4766" },
    { name: "800", color: "#363e56" },
    { name: "900", color: "#30354a" },
    { name: "950", color: "#151720" },
  ],
  "Blue · Variações": [
    { name: "050", color: "#e9f2ff" },
    { name: "100", color: "#d6e8ff" },
    { name: "200", color: "#b6d3ff" },
    { name: "300", color: "#8ab3ff" },
    { name: "400", color: "#5c86ff" },
    { name: "500", color: "#375aff" },
    { name: "600", color: "#1529ff" },
    { name: "700", color: "#0b1cf7" },
    { name: "800", color: "#0d1dc6" },
    { name: "900", color: "#132190" },
    { name: "950", color: "#0c135a" },
  ],
  "Turquoise · Variações": [
    { name: "050", color: "#f0fdfa" },
    { name: "100", color: "#cdfaf1" },
    { name: "200", color: "#9af5e2" },
    { name: "300", color: "#60e8d2" },
    { name: "400", color: "#36d3be" },
    { name: "500", color: "#16b6a3" },
    { name: "600", color: "#0f9285" },
    { name: "700", color: "#11746c" },
    { name: "800", color: "#125d57" },
    { name: "900", color: "#144d49" },
    { name: "950", color: "#052e2d" },
  ],
  "Red · Variações": [
    { name: "050", color: "#fef2f2" },
    { name: "100", color: "#fee2e2" },
    { name: "200", color: "#fecaca" },
    { name: "300", color: "#fda4a4" },
    { name: "400", color: "#f97070" },
    { name: "500", color: "#f04343" },
    { name: "600", color: "#dd2525" },
    { name: "700", color: "#ba1b1b" },
    { name: "800", color: "#9a1a1a" },
    { name: "900", color: "#801c1c" },
    { name: "950", color: "#450a0a" },
  ],
  "Yellow · Variações": [
    { name: "050", color: "#fffbeb" },
    { name: "100", color: "#fef3c7" },
    { name: "200", color: "#fde68a" },
    { name: "300", color: "#fcd34d" },
    { name: "400", color: "#fbbf24" },
    { name: "500", color: "#f59e0b" },
    { name: "600", color: "#d97706" },
    { name: "700", color: "#b45309" },
    { name: "800", color: "#92400e" },
    { name: "900", color: "#78350f" },
    { name: "950", color: "#451a03" },
  ],
  "Purple · Variações": [
    { name: "050", color: "#f6f4fe" },
    { name: "100", color: "#eeebfc" },
    { name: "200", color: "#dfd9fb" },
    { name: "300", color: "#c7bbf7" },
    { name: "400", color: "#ab95f0" },
    { name: "500", color: "#8b64e8" },
    { name: "600", color: "#7f49de" },
    { name: "700", color: "#6f37ca" },
    { name: "800", color: "#5d2ea9" },
    { name: "900", color: "#4d278b" },
    { name: "950", color: "#2f175e" },
  ],
  Gradients: [
    {
      name: "Midnight",
      color: "linear-gradient(90deg, #1529ff 0%, #151720 100%)",
    },
    {
      name: "Ash",
      color: "linear-gradient(90deg, #a6abc5 0%, #151720 100%)",
    },
    {
      name: "Smoke",
      color:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
    },
  ],
};

const extractColorValues = (gradient) => {
  return gradient.replace(/^linear-gradient\(|\)$/g, "");
};

const copyToClipboard = (text, setCopiedText) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      setCopiedText(true);
      setTimeout(() => {
        setCopiedText(false);
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};

const ColorCard = ({ name, color }) => {
  const [copiedColor, setCopiedColor] = useState(false);
  const colorValues = extractColorValues(color);

  return (
    <div className="color-card">
      <div
        className="color-card__box"
        onClick={() => copyToClipboard(colorValues, setCopiedColor)}
        style={{ background: color }}
      >
        {copiedColor ? (
          <Check className="copied-icon" size={16} />
        ) : (
          <Copy className="copied-icon copied-icon__hover" size={16} />
        )}
      </div>
      <p className="font-size-p margim_0">{name}</p>
      <p
        className="font-size-sm margim_0 flexbox__center"
        onClick={() => copyToClipboard(colorValues, setCopiedColor)}
      >
        {colorValues}
        {copiedColor ? <Check size={18} /> : <Copy size={18} />}
      </p>
    </div>
  );
};

export default function Cores() {
  return (
    <main className="container-xl">
      <h2 className="font-size-xl">Cores</h2>
      {Object.keys(groupedColors).map((group) => (
        <div key={group}>
          <h3 className="font-family-Manrope font-size-lg">{group}</h3>
          <div className="colors-container">
            {groupedColors[group].map((colorObject, index) => (
              <ColorCard
                key={index}
                name={colorObject.name}
                color={colorObject.color}
              />
            ))}
          </div>
          <hr />
        </div>
      ))}
    </main>
  );
}
