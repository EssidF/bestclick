import "./newProduct.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export default function NewProduct() {


  const [codes, setCodes] = useState([]);
  const [cles, setCles] = useState([]);
  const [pourcentage, setPourcentage] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    const cle = {
      cle:cles,
    };
    const code = {
      id: uuidv4(),
      nom: cles+generateCode(),
      pourcentage: pourcentage,
    };
  
    //+generateCode() envoyer les données au serveur pour créer un nouveau code de réduction
    // mettre à jour l'état "codes" avec le nouveau code créé
    setCles([cle]);
    setCodes([code]);
   
    setPourcentage("");
  };

  const generateCode = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const code = `${alphabet[Math.floor(Math.random() * alphabet.length)]}${alphabet[Math.floor(Math.random() * alphabet.length)]}${Math.floor(Math.random() * 10)}${alphabet[Math.floor(Math.random() * alphabet.length)]}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${alphabet[Math.floor(Math.random() * alphabet.length)]}${alphabet[Math.floor(Math.random() * alphabet.length)]}`;
    return code;
  };


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Generer Promo</h1>
      <form className="addProductForm">
        {/* <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div> */}
        <div className="addProductItem">
          <label>Nom</label>
          <input type="text" placeholder="Nom promo" />
        </div>
        <div className="addProductItem">
          <label>Cle</label>
          <input type="text" placeholder="Cle promo" 
          onChange={(e) => setCles(e.target.value)}
        maxLength={2}
        />
        </div>
           <div className="addProductItem">
          <label>Nombre d'utilisation: </label>
          <input type="number" placeholder="Montant reduction"  />
        </div>
        
        <div className="addProductItem">
          <label>Montant: </label>
          <input type="number" placeholder="Montant reduction" max={100} />
        </div>

        <div className="addProductItem">
           <label>
          Code Promo :
          <input
            type="text"
            value={codes.map((code) => (code.nom))}
           
          />
        </label>
        <button onClick={handleCreate}> Generer </button>
    
        </div>
     
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
