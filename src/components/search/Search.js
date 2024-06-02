import React, { useState } from "react";
import "./SearchStyles.css";
import Gold from "../../assets/gold.png";
import audioFile from "../../assets/birds-19624.mp3";

function Search() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
  
    if (!name || !email || !phone || !subject || !message) {
      alert("Ju lutem plotësoni të gjitha fushat!");
      return;
    }

   
    alert("Mesazhi u dërgua! Do ju përgjigjemi përmes emailit ose telefonit :)");
    
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  return (
    <div name="book" className="search">
      <div className="wrapper">
        <div className="title">
          <h1>Na kontaktoni !</h1>
        </div>
        <div className="contact-form">
          <div className="input-fields">
            <input
              type="text"
              className="input"
              placeholder="Name - Surname"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="input"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              className="input"
              placeholder="Phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              className="input"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="msg">
            <textarea
              placeholder="Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="btn" onClick={handleSend}>send</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
