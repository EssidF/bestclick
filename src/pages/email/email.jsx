import { useState } from 'react';
import axios from 'axios';

function Email({ email }) {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      recipient: recipient,
      subject: subject,
      body: body,
      originalEmail: email
    };

    axios.post('https://api.example.com/send-email', formData)
      .then(response => console.log(response))
      .catch(error => console.log(error));

    setRecipient('');
    setSubject('');
    setBody('');
  };

  return (<>




    <div className="user">
 
    
      
   
    <div className="userContainer">
      
      <div className="userUpdate">
        <span className="userUpdateTitle">Email</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
            
           
    
      <div className="newUserItem">
      <label>
        Destinataire :
      </label>
      <input type="email" value={recipient} onChange={event => setRecipient(event.target.value)} required />

      </div>
      <div className="newUserItem">
      <label>
        Sujet :
      </label>
      <input type="text" value={subject} onChange={event => setSubject(event.target.value)} required />

      </div>
      
    
      <div className="newUserItem">
      <label>
        Message :
       
      </label>
      <textarea value={body} onChange={event => setBody(event.target.value)} required rows="7" cols="50"/>
      </div>
      </div>
     <br/>
            <button className="userUpdateButton">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
    
  </div>
  





</>
 
  );
}

export default Email;
