import React, { useState } from "react";
import Logo from "./logo.svg";
import NewTopic from "../NewTopic/NewTopic";
import "./header.css";
import Dialog from "@material-ui/core/Dialog";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <img
        src={Logo}
        alt="circles"
        onClick={(e) => {
          setOpen(true);
        }}
      ></img>
      <h2>Haiku 4 U</h2>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <NewTopic />
      </Dialog>
    </div>
  );
}

export default Header;
