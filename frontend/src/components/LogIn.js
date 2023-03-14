import "../cssComponents/LogIn.css"
import "../cssComponents/SignIn.css"

function LogIn(){
    return(
        <div className="page">
            <div className="logInForm">
                <h1>LogIn</h1>
                <form>
                    <div className="logInContentForm">
                        <label htmlFor="email">
                            Email
                        </label> <br />
                        <input type="email" id="email" />
                    </div>

                    <div className="logInContentForm">
                        <label htmlFor="password">
                            Password
                        </label> <br />
                        <input type="password" id="password" />
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LogIn