import React, { useState } from "react";
import NewTopic from "../NewTopic";
import "./index.css";
import Dialog from "@material-ui/core/Dialog";

function Header(props) {
  const [open, setOpen] = useState(false);
  const fetchData = props.fetchData;

  return (
    <div className="header">
      <div
        className="circles"
        onClick={(e) => {
          setOpen(true);
        }}
      ></div>
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
