import { Routes, Route } from "react-router-dom";
import AddHelp from "./components/AddHelp";
import Navbar from "./components/Navbar/index";
import Feed from "./components/Feed";
import AddPost from "./components/AddPost";
import "./App.css";
import PostDetail from "./pages/PostDetail/index";
import HelpDetail from "./pages/HelpDetail";
import Home from "./pages/Home";




function App() {
	return (
		<div>
    <div>
			<Navbar />
     
			
				
      </div>
      	<Routes>
          <Route path="/" element={<Home/>}/>
					<Route path="/feed" element={<>	<AddHelp /><AddPost /><Feed /></>} />
					<Route path="/post-detail/:postId" element={<PostDetail />} />
          <Route path="/help-detail/:helpId" element={<HelpDetail />} />
				</Routes>
			
		</div>
	);
}

export default App;
