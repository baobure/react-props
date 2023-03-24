import React from "react";
import ReactDOM from "react-dom";
import logo from "../src/img.jpg";
import img from "../src/images.jpg"

//First Image
function Card(props) {
  return <div className="myStyle">
<h2>{props.name}</h2>
  <img
    src={props.img}
    alt="avatar_img"
  />
  <p>{props.tel}</p>
  <p>{props.email}</p>
  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Barnabas" img={logo} tel="+123 456 789" email="b@barnabas.com" />

    <input id="fName" placeholder="What is your input?" />
    
    <Card name="Phones" img={img} tel="+234098765883" email="g@phone.com" />
  </div>,
  document.getElementById("root")
);
