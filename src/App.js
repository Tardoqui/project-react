import { Routes, Route } from "react-router-dom";
import AddHelp from "./components/AddHelp";
import Navbar from "./components/Navbar/index";
import Feed from "./components/Feed";
import AddPost from "./components/AddPost";
import "./App.css";
import PostDetail from "./pages/PostDetail/index";
import HelpDetail from "./pages/HelpDetail";
function App() {
	return (
		<div>
			<Navbar />

			<div className="organizacao">
				<AddHelp />
				<AddPost />
      </div>
      	<Routes>
					<Route path="/" element={<Feed />} />
					<Route path="/post-detail/:postId" element={<PostDetail />} />
          <Route path="/help-detail/:helpId" element={<HelpDetail />} />
				</Routes>
			
		</div>
	);
}

export default App;
