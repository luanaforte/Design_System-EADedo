import { Check, Copy } from "@phosphor-icons/react";

import "./Elevation.css";
import { useState } from "react";

const elevations = [
  { name: "elevation-low", elevation: "0px 1px 3px 0px rgba(0, 0, 0, 0.25)" },
  {
    name: "elevation-medium",
    elevation: "0px 5px 10px 0px rgba(0, 0, 0, 0.15)",
  },
  {
    name: "elevation-inset-low",
    elevation: "0px 0px 12px 0px rgba(0, 0, 0, 0.15) inset",
  },
];

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

const CardElevation = ({ name, elevation }) => {
  const [copiedElevation, setCopiedElevation] = useState(false);

  return (
    <main>
      <div
        className="card--elevation"
        onClick={() => copyToClipboard(elevation, setCopiedElevation)}
        style={{ boxShadow: elevation }}
      >
        {copiedElevation ? (
          <Check className="copied-icon" size={16} />
        ) : (
          <Copy className="copied-icon copied-icon__hover" size={16} />
        )}
      </div>
      <div className="flexbox__center">
        <p className="paragraph margin-0">{name}</p>
        <p
          className="font-size-sm margin-0"
          onClick={() => copyToClipboard(elevation, setCopiedElevation)}
        >
          {copiedElevation ? <Check size={18} /> : <Copy size={18} />}
        </p>
      </div>
    </main>
  );
};

export default function Elevation() {
  return (
    <div className="container_lg">
      <h2>Elevation</h2>
      <div className="flexbox__wrap">
        {elevations.map((elevationObject, index) => (
          <CardElevation
            key={index}
            name={elevationObject.name}
            elevation={elevationObject.elevation}
          />
        ))}
      </div>
    </div>
  );
}
