import { Routes, Route } from "react-router-dom";
import AddHelp from "./components/AddHelp";
import Navbar from "./components/Navbar/index";
import Feed from "./components/Feed";
import AddPost from "./components/AddPost";
import "./App.css";

function App() {
	return (
	<div >
    <Navbar />
    <div className= "organizacao">
    <div style={{width: '600px'}}>
    <AddHelp />
    <AddPost />
    </div>
    <div>
    <Feed />
    </div>
    </div>

  </div>
	);
}

export default App;
