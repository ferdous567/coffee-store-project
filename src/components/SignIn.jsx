
const SignIn = () => {

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email;
        const password = form.password;
        console.log(email, password)
    }

    return (
        <div>
            <h2 className="text-3xl mb-10">Sign In here.</h2>

            {/* sign in */}
            
            <div className="card flex-shrink-0 w-1/3 mx-auto max-w-sm shadow-2xl bg-base-100 text-center">
                        <form onSubmit={handleSignIn} className="card-body ">
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
        </div>
    );
};

export default SignIn;