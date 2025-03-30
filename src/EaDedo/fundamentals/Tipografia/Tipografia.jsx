import React, { useState } from "react";
import "./Tipografia.css";

const fontFamilies = {
  Roboto: "font-family-Roboto",
  Fira: "font-family-Fira",
  Poppins: "font-family-Poppins",
  Manrope: "font-family-Manrope",
  Neulis: "font-family-Neulis",
  Satoshi: "font-family-Satoshi",
  Code: "font-family-Code",
};

const TypographyContent = ({ fontFamily }) => {
  return (
    <div className={fontFamilies[fontFamily]}>
      {fontFamily === "Code" ? (
        <>
          <p>
            &lt;iframe src="https://s.tiled.co/xxx/tiled-how-to-guide"
            frameborder="0" webkitallowfullscreen mozallowfullscreen
            allowfullscreen style="position: absolute;top: 0;left: 0;width:
            100%;height: 100%;border: 0;"&gt; &lt;/iframe&gt;
          </p>
          <p>
            &lt;div class="container"&gt; &lt;h1&gt;Hello, World!&lt;/h1&gt;
            &lt;p&gt;This is a simple container&lt;/p&gt; &lt;/div&gt;
          </p>
          <p>
            &lt;button onClick="handleClick()" class="btn-primary"&gt; Click Me
            &lt;/button&gt;
          </p>
          <p>
            &lt;input type="text" placeholder="Enter your name"
            class="switch__input-text" /&gt;
          </p>
          <p>
            &lt;ul&gt; &lt;li&gt;Item 1&lt;/li&gt; &lt;li&gt;Item 2&lt;/li&gt;
            &lt;li&gt;Item 3&lt;/li&gt; &lt;/ul&gt;
          </p>
          <p>
            &lt;input type="text" placeholder="Enter your name"
            class="switch__input-text" /&gt;
          </p>
        </>
      ) : (
        <>
          <h1 className="font-size-3xl">Lorem ipsum dolor sit</h1>
          <h1 className="font-size-2xl">Lorem ipsum dolor sit</h1>
          <h2 className="font-size-xl">Lorem ipsum dolor sit amet</h2>
          <h3 className="font-size-lg">
            Lorem ipsum dolor sit amet consectetur
          </h3>
          <h4 className="font-size-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
          <p className="font-size-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            animi fugit est facilis. Iste culpa temporibus assumenda nisi aut
            eius vitae porro voluptate id ea, iure doloribus consequuntur
            tenetur quaerat.
          </p>
          <p className="font-size-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            animi fugit est facilis. Iste culpa temporibus assumenda nisi aut
            eius vitae porro voluptate id ea, iure doloribus consequuntur
            tenetur quaerat.
          </p>
          <h2>Exemplo de Lista Não Ordenada</h2>
          <ul class="list-ul">
            <li class="list-item">Lorem ipsum dolor sit amet.</li>
            <li class="list-item">Consectetur adipiscing elit.</li>
            <li class="list-item">Sed do eiusmod tempor incididunt.</li>
            <li class="list-item">Ut labore et dolore magna aliqua.</li>
          </ul>
          <h2>Exemplo de Lista Ordenada</h2>
          <ol class="list-ol">
            <li class="list-item">Lorem ipsum dolor sit amet.</li>
            <li class="list-item">Consectetur adipiscing elit.</li>
            <li class="list-item">Sed do eiusmod tempor incididunt.</li>
            <li class="list-item">Ut labore et dolore magna aliqua.</li>
          </ol>
        </>
      )}
    </div>
  );
};

export default function Tipografia() {
  const [activeFont, setActiveFont] = useState("Roboto");
  const handleContentChange = (font) => {
    setActiveFont(font);
  };
  return (
    <div className="container_lg">
      <h2 className="font-size-xl">Tipografia</h2>
      <div className="tab-menu">
        {Object.keys(fontFamilies).map((font) => (
          <button
            key={font}
            onClick={() => handleContentChange(font)}
            className={`tab_button 
            ${activeFont === font ? "active" : "inactive"}`}
          >
            {font}
          </button>
        ))}
      </div>
      <div className="content_section">
        <TypographyContent fontFamily={activeFont} />
      </div>
    </div>
  );
}
