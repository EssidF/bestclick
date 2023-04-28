import {CalendarToday,LocationSearching,MailOutline,PermIdentity,PhoneAndroid,Publish} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./profil.css";
import { userRows } from "../../dummyData";

export default function profil() {

const url=window.location.href.split("/");

console.log(url[4]);

  var ids = userRows.reduce((ids, thing) => {
  if (thing.id== url[4]) then :
      ids.push(thing.id);
    
    return ids;
  }, []);



  const usr =userRows.map(card =>{
    if (card.id== url[4]) then :
    return(<>
     <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Customer</h1>
       
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{card.nom}</span>
         
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{card.pseudo}</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{card.date_Naiss}</span>
              <span className="userShowInfoTitle">{card.date_Inscrit}</span>
            </div>

            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              < div className="userShowIcon" />
              <span className="userShowInfoTitle">{card.code_pp}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{card.email}</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
     </>
    )
  })
  return (
    <div className="user">
    
      {usr}
      
    </div>
  );
}
