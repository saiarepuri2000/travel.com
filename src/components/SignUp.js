import React,{useState} from "react";
import Button from "./Button";

function SignUp(){
   const [sign,setSign] = useState(false);
    return(
        <section className="login">
          <div className="loginContainer">
          {sign?<h2>SIGN IN</h2>:<h2>SIGN UP</h2>}
             <label>Username</label>
             <input 
                type="text" 
                outfocus 
                required 
                placeholder="Username" 
                />
                <label>password</label>
                <input
                    type="password"
                    required
                    placeholder="Password"
                />
                <div className="btnContainer">
                    {sign?(
                        <>
                           <Button buttonStyle='btn--outline'>Sign in</Button>
                           <p>
                                Don't have an account ? 
                                <span onClick={()=>setSign(!sign)}>Sign Up</span>
                            </p>
                        </>
                    ):(
                        <>
                           <Button buttonStyle='btn--outline' >Sign up</Button>
                           <p>
                             Have an account ? 
                             <span onClick={()=>setSign(!sign)}>Sign in</span>
                           </p>
                        </>
                    )}
                </div>
          </div>

        </section>
    )
}

export default SignUp;