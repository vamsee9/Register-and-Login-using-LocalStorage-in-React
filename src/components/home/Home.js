import React from "react";



function Home() {

    let name = localStorage.getItem("name");
  
    return (
      <h1>
        Welcome <b>{name} </b>
         to Dashboard
      </h1>
    );
}

export default Home;