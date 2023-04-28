import {CalendarToday,LocationSearching,MailOutline,PermIdentity,PhoneAndroid,Publish} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {useState} from "react";
import "./user.css";
import { userRows } from "../../dummyData";
import * as React from "react";


export default function User() {
 

 

const url=window.location.href.split("/");
const id=url[4]
console.log(url[4]);

const usemap =userRows.map(card =>{
    
  if (card.id== url[4]){
  
    return([card.nom,card.prenom,card.pseudo,card.email,card.date_Naiss,card.abonnement])
  }

})

const eml=usemap


  const [email, setEmail] = useState(eml[id-1][3]);
  const [nom, setNom] = useState(eml[id-1][0]);
  const [prenom, setPrenom] = useState(eml[id-1][1]);
  const [pseudo, setPseudo] = useState(eml[id-1][2]);
  const [date_Naissance, setDatenaissance] = useState(eml[id-1][4]);
  const [abonnement, setAbonnement] = useState(eml[id-1][5]);



  const usr =userRows.map(card =>{
    
    if (card.id== url[4]){
    
      return(<>



       <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Customer</h1>
         
        </div>
        <div className="userContainer">
          
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                
               
        
          <div className="newUserItem">
            <label>Nom</label>
            <input name="nom" type="text" placeholder="Entrez votre nom" 
            value={nom} onChange={(e)=>setNom(e.target.value)}
            />
          </div>
          <div className="newUserItem">
            <label>Prenom</label>
            <input name="prenom" type="text" placeholder="Entrez votre prenom" 
             value={prenom} onChange={(e)=>setPrenom(e.target.value)}
            />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input name="email" type="email" id="email" placeholder="Exemple@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
          <div className="newUserItem">
            <label>Pseudo </label>
            <input name="pseudo" type="text" placeholder=""
             value={pseudo} onChange={(e)=>setPseudo(e.target.value)}
            />
          </div>
          <div className="newUserItem">
            <label>Date De Naissance</label>
            <input name="dateNaiss" type="date" placeholder=""
            value={date_Naissance} onChange={(e)=>setDatenaissance(e.target.value)}
            
            />
            
          
          </div>
          
          <div className="newUserItem">
            <label>Code Promo </label>
            <input name="code_pp" type="text" placeholder="Promo" 
             value={card.code_pp}
            />
          </div>
          <div className="newUserItem">
            <label>Code Parrainage </label>
            <input name="code_pr" type="text" placeholder="Parrainage"
            value={card.code_pr}
            />
          </div>
          <div className="newUserItem">
            <label>Abonnement</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
          </div>
          <div className="newUserItem">
            <label>Sexe</label>
            <div className="newUserGender">
              <input name="sexe" type="radio" id="male" value="male" />
              <label for="male">Male</label>
              <input name="sexe" type="radio"  id="female" value="female" />
              <label for="female">Female</label>
        
            </div>
          </div>
      
       
  
                   {/* <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} /> */}
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      
        </> 
      )
    }
   
  })
  return (
    <div className="user">



      
      
      {usr}
   
    </div>
  );
}
