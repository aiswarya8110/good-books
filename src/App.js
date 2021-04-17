import React from "react";
import './index.css';
import {useState} from "react";

const bookDB={
    javascript:[
      {
        name:"Eloquent Javascript",
        rating:"4/5"
      },
      {
        name:"You Don't know JS",
        rating:"3.5/5"
      }
    ],
    fiction:[
      {
        name:"Shiva Trilogy",
        rating:"5/5"
      },{
        name:"Harry Potter and the Sorcerer's Stone",
        rating:"4.5/5"
      }
    ],
    business:[
      {
        name:"Never Split the Difference",
        rating:"3.5/5"
      },{
        name:"Loonshots",
        rating:"5/5"
      }
    ]
}


function App(){
 const [selectedGenre,setGenre]= useState("business");
  function genreClickHandler(genre){
       setGenre(genre);
  }
  return(
       <div className="App">
         <h1>📚 goodbooks</h1>
         <p style={{fontSize:"smaller"}}>{" "}check out my favourite books. Select a genre to get started.</p>
         
         <div>
           {
             Object.keys(bookDB).map(function(genre){
                 return(
                  <button onClick={
                    function(){
                      genreClickHandler(genre);
                    }} 
                    style={{
                      cursor:"pointer",
                      background:"#E5E7EB",
                      borderRadius:"0.5rem",
                      padding:"0.5rem 1rem",
                      border:"none",
                      outline:"none",
                      border:"1px solid black",
                      margin:"1rem 0.3rem"
                    }}
                  >
                  {genre}
                  </button>
                 );
             })
           }
           <hr/>
           <div style={{textAlign:"left"}}>
               <ul style={{paddingInlineStart:"0"}}>
                 {
                   bookDB[selectedGenre].map(function(book){
                      return(
                        <li key={book.name} style={{
                          listStyle:"none",
                          padding:"1rem",
                          border:"1px solid #D1D5DB",
                          width:"70%",
                          margin:"1rem 0rem",
                          borderRadius:"0.5rem"
                          }}>
                            {" "}
                            <div style={{fontSize:"larger"}}>{book.name}</div>
                            <div style={{fontSize:"smaller"}}>{book.rating}</div>
                        </li>
                      );
                   })
                 }
               </ul>
           </div>  
         </div> 
      </div>
  );
}

export default App;