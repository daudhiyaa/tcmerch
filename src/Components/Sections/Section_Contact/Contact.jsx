import React from "react";
import styles from "./Contact.module.scss";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import flanelshirt from "../../../Assets/flanelshirt1.jpg";
import hoodie from "../../../Assets/whitehoodie2.jpg";
import shirt from "../../../Assets/graphictshirt1.jpg";
import floralshirt from "../../../Assets/floralshirt1.jpg";
import jacket from "../../../Assets/denimjacket1.jpg";

const SubscribeButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  marginTop: 10,
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 2.5,
  backgroundColor: "#e1dedb",
  borderColor: "#e1dedb",
  color: "#1a1a1a",
  fontFamily: "Archivo-expanded",

  "&:hover": {
    backgroundColor: "#555",
    borderColor: "#555",
    boxShadow: "none",
    color: "#e1dedb",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#bf8c4e",
    borderColor: "#bf8c4e",
    color: "#e1dedb",
  },
});

const EmailField = styled(TextField)({
  width: "100%",

  "& label.Mui-focused": {
    color: "#bf8c4e",
    fontFamily: "Archivo-expanded",
  },
  "& label": {
    color: "#888",
    fontFamily: "Archivo-expanded",
  },
  "& .MuiInput-underline:after": {
    color: "#bf8c4e",
    borderBottomColor: "#bf8c4e",
    backgroundColor: "#222",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      color: "#bf8c4e",
      borderColor: "#888888",
      backgroundColor: "#222",
    },
    "&:hover fieldset": {
      color: "#bf8c4e",
      borderColor: "#bf8c4e",
      backgroundColor: "#222",
    },
    "&.Mui-focused fieldset": {
      color: "#bf8c4e",
      borderColor: "#bf8c4e",
      backgroundColor: "#222",
    },
  },
});

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.newsletter}>
        Put your hands first at our premium and limited products
      </div>
      <div className={styles.textfield}>
        <h1>Subscribe to our newsletter</h1>
        <EmailField label="Email" id="custom-css-outlined-input" />
        <SubscribeButton variant="contained" startIcon={<EmailOutlinedIcon />}>
          SUBSCRIBE
        </SubscribeButton>
      </div>
      <div className={styles.images}>
        <img className={styles.flanel} src={flanelshirt} alt="Flanel Shirt" />
        <img className={styles.hoodie} src={hoodie} alt="Hoodie" />
        <img className={styles.shirt} src={shirt} alt="Shirt" />
        <img
          className={styles.floralshirt}
          src={floralshirt}
          alt="Floral Shirt"
        />
        <img className={styles.jacket} src={jacket} alt="Jacket" />
      </div>
    </div>
  );
}

export default Contact;
