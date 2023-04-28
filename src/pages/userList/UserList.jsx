import "./userList.css";
// import { DataGrid } from "@material-ui/data-grid";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom";
//import {  GridColumn, GridToolbar } from "@progress/kendo-react-grid";
//import { Grid } from '@progress/kendo-react-grid';
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { useDemoData } from '@mui/x-data-grid-generator';
import { CSVLink } from "react-csv";
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';



export default function UserList() {

  

  const [data, setData] = useState(userRows);

  
  
  
  const headers = [
    { label: "First Name", key: "prenom" },
    { label: "Last Name", key: "nom" },
    { label: "Email", key: "email" },
    { label: "Age", key: "code_pp" }
  ];
  const csvReport = {
    data: data,

  };


  const _export = React.useRef(null);
  const exportExport = () => {
    if (_export.current !== null) {
      _export.current.save(data);
    }
  };

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
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "date_Naiss",
      headerName: "Date Naissance",
      width: 120,
    },
    {
      field: "date_Inscrit",
      headerName: "Date Inscription",
      width: 120,
    },
    {
      field: "abonnement",
      headerName: "Abonnement",
      width: 120,
    },
    {
      field: "code_pp",
      headerName: "Code Promo",
      width: 160,
    },
    {
      field: "code_pr",
      headerName: "Code Parainnage",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/customer-edit/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
    <h1 className="userListTitle">Liste Clients </h1>
    <div className="userListTable">

      
    <ExcelExport ref={_export}>
   
    <CSVLink {...csvReport}
                  className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"

      >Export to CSV</CSVLink>
      <button
       className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"

      onClick={exportExport}
      >
        Export
      </button>
      <DataGrid className="userLists"
      
      data={data}
  
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
       
      />
      
      </ExcelExport>

      </div>
      </div>
  );
}
