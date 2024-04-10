import React, { useState } from "react";
import "./Form.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setName("");
    setEmail("");
    setText("");
  };

  const handleChange = (e) => {
    if(e.target.name == 'name'){
        setName(e.target.value)
    }
    if(e.target.name == 'email'){
        setEmail(e.target.value)
    }
    if(e.target.name == 'text'){
        setText(e.target.value)
    }
  };

  return (
    <div className="contact-container">
      <div className="form">
        <div className="top-btn">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="19px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={handleChange}/>
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={handleChange}/>
          </div>

          <div className="form-control">
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" value={text} onChange={handleChange}/>
          </div>

          <div className="bottom-btn">
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className="image">
        <img src="./images/contact.svg" />
      </div>
    </div>
  );
};

export default Form;
