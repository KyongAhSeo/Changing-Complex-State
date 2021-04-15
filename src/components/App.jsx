import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  //2. define handleChange
  function handleChange(event) {
    //3. create a destructured object
    const { value, name } = event.target;

    //4. call the method that upadates the contact
    setContact((prevValue) => {
      //fName input란에 타이핑을 했을때
      if (name === "fName") {
        return {
          //fName만 업데이트
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
        //lName input란에 타이핑 했을때
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          //lName만 업데이트
          lName: value,
          email: prevValue.email
        };
        //email input란에 타이핑 했을때
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          //email만 업데이트
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          //1. add onChange attribute
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
