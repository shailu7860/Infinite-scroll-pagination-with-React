import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Home() {
  
  const [Data, setData] = useState([]);
useEffect(()=>{
  const api = async () => {

    let apiData = await axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0 ')
 
   setData(apiData.data.hits)
         
 
    }
       api();
       console.log(Data);
},[Data])
  
    

 
  return (
    <div className="App">
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Title (100g serving)</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">Created_at&nbsp;(g)</TableCell>
            <TableCell align="right">Author&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.url}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
              <TableCell align="right">{row.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </div>
  );
}

export default Home;
