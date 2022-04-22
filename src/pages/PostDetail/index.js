import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PostDetail() {
	const params = useParams();
	const navigate = useNavigate();
	const [user, setUser] = useState({});

	useEffect(() => {
		async function fetchUser() {
			const response = await axios.get(
				`https://ironrest.herokuapp.com/adicionarPost/${params.postId}`
			);

			setUser(response.data);
		}
		fetchUser();
	}, [params.postId]);

	async function handleDelete() {
		await axios.delete(
			`https://ironrest.herokuapp.com/adicionarPost/${params.postId}`
		);

		navigate("/");
	}

	return (
		<div className="card">
			<p className="card-body">Name :{user.name} </p>
			<span className="card-body">Email:{user.email} </span>
			<div className="form-floating">
				<p
					className="form-control"
					placeholder="Leave your post here"
					id="post"
					style={{ height: "100px", width: "600px" }}
					name="post"
				>
					Post: {user.post}
				</p>
			</div>
			<div>
				<button className="btn btn-dark" onClick={handleDelete}>
					Delete!
				</button>
			</div>
		</div>
	);
}

export default PostDetail;
