import axios from 'axios';
import {useState} from 'react';





function AddHelp() {
	
    const [addform, setAddForm] = useState({
        name: "",
        email: "",
        text: "",
    });

    function handleAddHelp(e){
        setAddForm({ ...addform, [e.target.name]: e.target.value });
		
    }
	
    function handleSubmit(e) {
		
        e.preventDefault();
    
        axios.post("https://ironrest.herokuapp.com/adicionarHelp", addform);
    
        setAddForm({
          name: "",
          email: "",
          text: "",
        });
		
      }
    





    return (  
        <div className="container">
			<form onSubmit={handleSubmit} >
				<div className="mb-3">
					<label htmlFor="nome" className="form-label">
					<strong>Nome</strong>
					</label>
					<input
						type="text"
						className="form-control"
                        name="name"
						id="nome"
						aria-describedby="emailHelp"
                        value={addform.name}
                        onChange={handleAddHelp}
					/>
					
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
					<strong>E-mail</strong>
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
                        name="email"
                        value={addform.email}
                        onChange={handleAddHelp}
					/>
				</div>
				<div  className="form-floating">
					<textarea
						className="form-control"
						placeholder="Ask for help here"
						id="post"
						style={{height: '100px'}}
                        name="text"
						value={addform.text}
						onChange={handleAddHelp}
					></textarea>
					<label style={{ opacity : '0.5' }} htmlFor="post">Write help message!</label>
				</div>
           
				<button  type="submit" className="btn btn-primary m-3">
					AskHelp!
				</button>
			</form>
		</div>
    );
}

export default AddHelp;
