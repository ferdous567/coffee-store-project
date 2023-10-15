import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result =>{
            console.log(result.user)

            // new user has been created
            const createdAt = result.user?.metadata?.creationTime;

            const user = {email, createdTime : createdAt }

            fetch('http://localhost:5000/user', {
                method: 'post',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    console.log('user addeded database successfully.')
                }
            })
            form.reset();

        })
        .catch(error =>{
            console.error(error)
        })
        
    }

    return (
        <div>
            <h2 className="text-3xl mb-10 ">Sign Up here.</h2>

            {/* sign up */}

            <div className="card flex-shrink-0 w-1/3 mx-auto max-w-sm shadow-2xl bg-base-100 text-center">
                        <form onSubmit={handleSignUp} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
        </div>

    );
};

export default SignUp;