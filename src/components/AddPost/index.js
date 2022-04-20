import axios from "axios";
import { useState } from "react";

function AddPost() {
	const [addPost, setAddPost] = useState({
		name: "",
		email: "",
		post: "",
	});
	function handleAddPost(e) {
		setAddPost({ ...addPost, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();

		axios.post("https://ironrest.herokuapp.com/adicionarPost", addPost);

		setAddPost({
			name: "",
			email: "",
			post: "",
		});
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label for="nome" class="form-label">
						<strong>Nome</strong>
					</label>
					<input
						type="text"
						className="form-control"
						id="nome"
						aria-describedby="emailHelp"
						name="name"
						value={addPost.name}
						onChange={handleAddPost}
					/>
				</div>
				<div className="mb-3">
					<label for="email" className="form-label">
						<strong>E-mail</strong>
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						value={addPost.email}
						onChange={handleAddPost}
					/>
				</div>
				<div class="form-floating">
					<textarea
						class="form-control"
						placeholder="Leave your post here"
						id="post"
						style={{height: '100px'}}
                        name="post"
						value={addPost.post}
						onChange={handleAddPost}
					></textarea>
					<label style={{ opacity : '0.5' }} for="post">Leave your Post here!</label>
				</div>
				<button type="submit" className="btn btn-primary m-3">
					Post!
				</button>
			</form>
		</div>
	);
}

export default AddPost;
