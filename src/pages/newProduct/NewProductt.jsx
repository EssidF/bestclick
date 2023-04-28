import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./newProduct.css";

const NewProductt = () => {
  const [codes, setCodes] = useState([]);
  const [pourcentage, setPourcentage] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    const code = {
      id: uuidv4(),
      nom: generateCode(),
      pourcentage: pourcentage,
    };
    // envoyer les données au serveur pour créer un nouveau code de réduction
    // mettre à jour l'état "codes" avec le nouveau code créé
    setCodes([code]);
    setPourcentage("");
  };

  const generateCode = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const code = `${alphabet[Math.floor(Math.random() * alphabet.length)]}${alphabet[Math.floor(Math.random() * alphabet.length)]}${Math.floor(Math.random() * 10)}${alphabet[Math.floor(Math.random() * alphabet.length)]}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${alphabet[Math.floor(Math.random() * alphabet.length)]}${alphabet[Math.floor(Math.random() * alphabet.length)]}`;
    return code;
  };

  return (
    <div>
      <h2>Codes de réduction</h2>
      {/* <ul>
        {codes.map((code) => (
          <li key={code.id}>
            {code.nom} - {code.pourcentage}%
          </li>
        ))}
      </ul> */}
      <form onSubmit={handleCreate}>
        <label>
          Pourcentage :
          <input
            type="text"
            value={codes.map((code) => (code.nom))}
            onChange={(e) => setPourcentage(e.target.value)}
          />
        </label>
        <button type="submit"> Créer </button>
      </form>
    </div>
  );
};

export default NewProductt;