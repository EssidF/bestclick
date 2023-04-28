import React, {useState} from 'react'
import {AccountCircle,AccessTime,  PeopleAlt, LocalGroceryStore,Folder,Receipt,ExpandMore,ExpandLess} from '@mui/icons-material';
import { Link } from "react-router-dom";
import "./sidebar.css";
import { userRows } from "../../dummyData";


export default function Sidebar() {

  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
  const [isExpanded2, setExpanded2] = useState(false);
  const [isExpanded3, setExpanded3] = useState(false);
  const [isExpanded4, setExpanded4] = useState(false);
  const [isExpanded5, setExpanded5] = useState(false);
  function expand() {
    setExpanded(()=> isExpanded !== true)
  };
  function expand1() {
    setExpanded1(()=> isExpanded1 !== true)
  };
  function expand2() {
    setExpanded2(()=> isExpanded2 !== true)
  };
  function expand3() {
    setExpanded3(()=> isExpanded3 !== true)
  };
  function expand4() {
    setExpanded4(()=> isExpanded4 !== true)
  };
  function expand5() {
    setExpanded5(()=> isExpanded5 !== true)
  }


  const usr = userRows.map(card =>{
    if (card.type== "admin") then :
    return(<>
   
   <div className='sidebarWreapper'>
     <div className='sidebarTopHeader'>
         <div className='sidebarHeader'>
           <AccountCircle sx={{ fontSize: 75 }} className='icon'/>
           <h4 className='login'>essid1.essid@gmail.com</h4>
           <p className='login'> <span>Admin</span></p>
         </div>
           <hr className='sidebarLine'/>
     </div>
     <div className='sidebarMenu'>
       <h3 className='sidebarTitle'>Rapports</h3>
       <ul className='sidebarList'>
       <Link to="" className="link">
         <li><span className="mainMenu active"><AccessTime className='sidebarIcon'/> Dashbord</span></li>
         </Link>
         {/* <li><span className="mainMenu"><SignalCellularAlt className='sidebarIcon'/> Dashboard Alternative</span></li> */}
       </ul>
     </div>
     <div className='sidebarMenu'>
       <h3 className='sidebarTitle'>Gestion</h3>
         <ul className='sidebarList'><span onClick={expand} className="mainMenu"><PeopleAlt className='sidebarIcon'/> Client 
         {isExpanded ? <ExpandLess className='downArrow' /> : <ExpandMore className='downArrow' />}</span>
         {isExpanded && ( <div>
           <Link to="/customer-list" className="link">
             <li className='sidebarListItem'>Liste Clients</li>
           </Link>

           <Link to="/newUser" className="link">
             <li className='sidebarListItem'> Ajouter Client</li>
           </Link>

           </div>
         )
         }
         </ul>
         <ul className='sidebarList'><span onClick={expand1} className="mainMenu"><LocalGroceryStore className='sidebarIcon'/> Promo {isExpanded1 ? <ExpandLess className='downArrow' /> : <ExpandMore className='downArrow' />}</span>
         {isExpanded1 && ( <div>
             <Link to="/products" className="link">
               <li className='sidebarListItem'>Liste Promo </li>
             </Link>

             <Link to="/newproduct" className="link">
               <li className='sidebarListItem'>Générer Promo</li>
             </Link>

           
           
             </div>
         )
         }
         </ul>
         <ul className='sidebarList'><span onClick={expand2} className="mainMenu"><Folder className='sidebarIcon'/> Support {isExpanded2 ? <ExpandLess className='downArrow' /> : <ExpandMore className='downArrow' />}</span>
         {isExpanded2 && ( <div>
           <Link to="/support" className="link">
           <li className='sidebarListItem'>Classement</li>
           </Link>
       
           </div>
         )
         }
         </ul>
         <ul className='sidebarList'><span onClick={expand3} className="mainMenu"><Receipt className='sidebarIcon'/> Boite  {isExpanded3 ? <ExpandLess className='downArrow' /> : <ExpandMore className='downArrow' />}</span>
         {isExpanded3 && ( <div>
           <Link to="/email" className="link">
           <li className='sidebarListItem'>Liste Emails</li>
           </Link>
           </div>
         )
         }
         </ul>
     </div>


     
   </div>

     </>
    )
  });






  return (
    <>
   <div className='sidebar'>
   
   {usr}

 </div>
   
    </>
  )
}
