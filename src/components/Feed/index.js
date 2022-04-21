import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.modules.css";

function Feed() {
	const [addHelpData, setAddHelpData] = useState([]);
	const [addPostData, setAddPostData] = useState([]);
	useEffect(() => {
		async function fetchHelpData() {
			const response = await axios.get(
				`https://ironrest.herokuapp.com/adicionarHelp`
			);
			setAddHelpData(response.data);
		}

		fetchHelpData();
	}, [addHelpData]);

	useEffect(() => {
		async function fetchPostData() {
			const response = await axios.get(
				`https://ironrest.herokuapp.com/adicionarPost`
			);
			setAddPostData(response.data);
		}

		fetchPostData();
	}, [addPostData]);

	return (
		<div className="div-feed-help m-5">
			<div>
				<div>
					<h1>Feed</h1>
				</div>
				{addHelpData.map((currentHelp) => {
					return (
						<div className="card">
							<p className="card-body">Name :{currentHelp.name}</p>
							<span className="card-body">Email: {currentHelp.email}</span>
							<div className="form-floating">
								<p
									className="form-control"
									placeholder="Leave your post here"
									id="post"
									style={{ height: "100px" }}
									name="post"
								>
									{currentHelp.text}
								</p>
							</div>
							<div>
								<Link to={`/help-detail/${currentHelp._id}`}>
									<button className="btn btn-secondary btn-sm">
										Help Details
									</button>
								</Link>
							</div>
						</div>
					);
				})}
				<div>
					{addPostData.map((currentPost) => {
						return (
							<div className="card">
								<p className="card-body">Name :{currentPost.name}</p>
								<span className="card-body">Email: {currentPost.email}</span>
								<div className="form-floating">
									<p
										className="form-control"
										placeholder="Leave your post here"
										id="post"
										style={{ height: "100px" }}
										name="post"
									>
										{currentPost.post}
									</p>
								</div>
								<div>
									<Link to={`/post-detail/${currentPost._id}`}>
										<button class="btn btn-success btn-sm">Post Details</button>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Feed;
