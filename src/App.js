import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "./firebase/firebase.init";

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  console.log(user);
  const googleProvider = new GoogleAuthProvider(); 
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(res => {
      const user = res.user;
      setUser(user);
    })
    .catch(error => {
        console.log('error', error);
    })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(res => {
      const user = res.user;
      setUser(user);
    })
    .catch(error => {
      console.log('error', error);
  })
  }
  const handleSignOut = ()=> {
    signOut(auth)
    .then(()=>{
      setUser({});
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div>
        {
          user.uid? 
          <button onClick={handleSignOut}>Sign Out</button>
            :
          <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>GitHub Sign In</button>
          </>
        }
        
        
        {
          user.uid &&
          <div>
            <h2>User Name: {user.displayName}</h2>
            <h3>Email: {user.email}</h3>
          </div>
        }
    </div>
  );
}

export default App;
