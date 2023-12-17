import React from "react";
import addNotification from "react-push-notification";
import grb from './../klubrkbg.jpeg';
export default function Home(){
   const notify=()=>{
    addNotification({
      title:'Moja notifikacija',
      message:'Valjda je uredu',
      icon:grb,
      duration:5000,
      native:true
    })
   }
   return <>
     <button onClick={notify} style={{margin:'100px'}}>
      Klikni za notifikaciju!
     </button>
   </>

}