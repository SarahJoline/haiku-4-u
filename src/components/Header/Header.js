import React, { useState } from "react";
import Logo from "./logo.svg";
import NewTopic from "../NewTopic/NewTopic";
import "./header.css";
import Dialog from "@material-ui/core/Dialog";

function Header(props) {
  const [open, setOpen] = useState(false);
  const fetchData = props.fetchData;

  return (
    <div className="header">
      <img
        className="circles"
        src={Logo}
        alt="circles"
        onClick={(e) => {
          setOpen(true);
        }}
      ></img>
      <h2>Haiku 4 U</h2>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <NewTopic fetchData={fetchData} />
      </Dialog>
    </div>
  );
}

export default Header;
