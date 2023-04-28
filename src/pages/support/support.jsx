import "./support.css";
// import { DataGrid } from "@material-ui/data-grid";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Support() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    // { field: "id", headerName: "ID", width: 100 },
    {
      field: "nom",
      headerName: "Nom",
      width: 160,
     renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.nom}
          </div>
        );
    }},
    {
      field: "prenom",
      headerName: "Prenom",
      width: 100
    },
    {
      field: "pseudo" ,
      headerName: "Pseudo",
      width: 100
    },
    { field: "note", headerName: "Note", width: 200 },
   
    
   
 
  
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/profil/" + params.row.id}>
              <button className="userListEdit">Details</button>
            </Link>
            
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
    <h1 className="userListTitle">Top Clients </h1>
    <div className="userListTable">
      <DataGrid className="userLists"
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
       
      />
      </div>
      </div>
  );
}
