import React from "react";
import addNotification from "react-push-notification";
import grb from './../klubrkbg.jpeg';
import {Link} from 'react-router-dom';
export default function Home(){
   const notify=()=>{
    addNotification({
      title:'Moja notifikacija',
      message:'Valjda je uredu',
      icon:grb,
      duration:10000,
      native:true
    });
   };
   return <>
   <Link onClick={notify}>
     <button onClick={notify} style={{margin:'100px'}}>
      Klikni za notifikaciju!
     </button>
     </Link>
   </>

}