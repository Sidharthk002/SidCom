import './SignIn.scss'

export default function SingnIn(){
    const handleChange = (e) =>{
        console.log(e.target.value)
    }
    return (
        <div class="container2">
        <div id="box2">
            <h2>Sign In</h2>
            <form id="form2">
                <label for="email">Email Address</label>
                <input required type="text" placeholder="Enter email address" id="email" onChange={handleChange}/>
                <label for="password">Password </label>
                <input required type="password" placeholder="Enter password" id="password" onChange={handleChange}/>
                <span><a>Forgot Password?</a></span>
                <input type="submit" value="Sign In" id="submit"/>
            </form>
            <button> <span><img src="https://sso.masaischool.com/google.svg" alt=""/> </span>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    )
}