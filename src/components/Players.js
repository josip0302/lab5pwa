import React from "react";
import Table from 'react-bootstrap/Table';
import data from './../data.json'
export default function Players() {
 
  return <>
    <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Ime</th>
          <th>Broj</th>
          
        </tr>
      </thead>
      <tbody>
       { 
       data.players.map((item)=>(
       <tr key={item.key}>
         
          <td>{item.name}</td>
          <td>{item.broj}</td>
          
      </tr>))
        }
       
      </tbody>
    </Table>
  </>

}