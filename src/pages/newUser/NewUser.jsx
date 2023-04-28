import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nouvelle Client</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nom</label>
          <input name="nom" type="text" placeholder="Entrez votre nom" />
        </div>
        <div className="newUserItem">
          <label>Prenom</label>
          <input name="prenom" type="text" placeholder="Entrez votre prenom" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input name="email" type="email" placeholder="bestclic@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Mot de passe</label>
          <input name="password" type="password" placeholder="Mot de passe" />
        </div>
        <div className="newUserItem">
          <label>Pseudo </label>
          <input name="pseudo" type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Date De Naissance</label>
          <input name="dateNaiss" type="date" placeholder="" />
        </div>
        
        <div className="newUserItem">
          <label>Code Promo </label>
          <input name="code_pp" type="text" placeholder="Promo" />
        </div>
        <div className="newUserItem">
          <label>CodeParrainage </label>
          <input name="code_pr" type="text" placeholder="Parrainage" />
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
    
        <button className="newUserButton">Ajouter</button>
      </form>
    </div>
  );
}
