import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkEl = links.map((link) => {
    return <a key={link} href="#home">home</a>
  })
  console.log("linkel:" + {linkEl})
  return <nav>{linkEl}
  </nav>;
}

export default NavBar;
