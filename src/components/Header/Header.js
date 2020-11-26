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
      <a className="haiku4U" href="/">
        Haiku 4 U
      </a>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <NewTopic fetchData={fetchData} onClose={() => setOpen(false)} />
      </Dialog>
    </div>
  );
}

export default Header;
