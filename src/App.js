import { useState } from "react";
import "./components/styles.css";
import HeaderMain from "./components/Header/HeaderMain";
import ReaderMain from "./components/Reader/ReaderMain";
import AddModal from "./components/AddModal";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState([
    {
      id: 0,
      author: "Albert",
      text: "You are here"
    },
    {
      id: 1,
      author: "Clarence",
      text: "There you are"
    },
    {
      id: 2,
      author: "Ethan",
      text: "Here I am"
    }
  ]);
  const [displayEntries, setDisplayEntries] = useState(entries);
  const [param, setParam] = useState("author");

  function signupSubmit(e) {
    e.preventDefault();
    let u = e.target.user.value;
    let p = e.target.pass.value;
    let result = users.length > 0 ? signupFind(u, p) : signupSignup(u, p);
  }

  function loginSubmit(e) {
    e.preventDefault();
    let u = e.target.user.value;
    let p = e.target.pass.value;
    loginFind(u, p);
  }

  function signupFind(u, p) {
    let found = users.find((f) => f.user == u);
    if (found == undefined) {
      signupSignup(u, p);
    } else {
      loginFind(u, p);
    }
  }

  /*
    I know there is some redundancy below. 
    This was tricky, and this is how I made it work.
    */

  function signupSignup(u, p) {
    let newUser = { user: u, pass: p };
    setUsers([...users, newUser]);
    setCurrentUser(u);
    setMessage("Welcome " + u);
    closeThese("dropContent");
  }

  function loginFind(u, p) {
    let found = users.find((f) => f.user == u);
    if (found != undefined) {
      loginCheck(u, found.pass, p);
    } else {
      setMessage("Sign up, please");
    }
  }

  function loginCheck(u, p, pq) {
    let result = p == pq ? loginLogin(u) : setMessage("Trouble?");
  }

  function loginLogin(u, p, pq) {
    setCurrentUser(u);
    setMessage("Hello " + u);
    closeThese("dropContent");
  }

  function logoutClick() {
    setCurrentUser("");
    setMessage("");
  }

  function toggle(x) {
    document.getElementById(x).classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dr")) {
      closeThese("dropContent");
    }
  };

  function closeThese(x) {
    let gets = document.getElementsByClassName(x);

    for (let i = 0; i < gets.length; i++) {
      if (gets[i].classList.contains("show")) {
        gets[i].classList.remove("show");
      }
    }

    // I couldn't get this to work with a forEach
  }

  function addSubmit(e) {
    e.preventDefault();
    let t = e.target.text.value;
    let update = entries;
    update.push({
      id: update.length - 1,
      author: currentUser,
      text: t
    });
    setEntries(update);
    setDisplayEntries(entries);
    toggle("addModal");
    setMessage("New entry added");
    console.log(entries);
  }

  function deleteEntry(id) {
    var update = entries;
    update.forEach((u) => {
      u.id == id ? update.splice(u, 1) : setMessage("Delete not found");
    });
    setEntries(update);
    setDisplayEntries(entries);
    setMessage("Delete successful");
    console.log(entries);
  }

  function paramSelect(e) {
    setParam(e.target.value);
    setMessage("");
  }

  function search(e) {
    let s = e.target.value;

    if (s != "") {
      const results = entries.filter((n) => {
        switch (param) {
          case "author":
            return n.author.toLowerCase().startsWith(s.toLowerCase());
          case "text":
            return n.text.toLowerCase().startsWith(s.toLowerCase());
        }
      });
      setDisplayEntries(results);
    } else {
      setDisplayEntries(entries);
    }
  }

  return (
    <div>
      <HeaderMain
        currentUser={currentUser}
        users={users}
        signupSubmit={signupSubmit}
        loginSubmit={loginSubmit}
        logoutClick={logoutClick}
        toggle={toggle}
        message={message}
      />
      <ReaderMain
        currentUser={currentUser}
        entries={displayEntries}
        deleteEntry={deleteEntry}
        paramSelect={paramSelect}
        search={search}
      />
      <AddModal addSubmit={addSubmit} toggle={toggle} />
    </div>
  );
}

export default App;
