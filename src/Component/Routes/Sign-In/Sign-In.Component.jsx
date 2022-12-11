import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../Utils/Firebase/Firebase.utils'


const signIn = () => {

  const logGoogleUser = async () => {

    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  }

  return(
    <div>
      <h1>SignIn Page</h1>
      {/* <button onClick={logGoogleUser}>Sign In With Google</button> */}
      <button onClick={logGoogleUser} type="button" className="inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign In With Google</button>
    </div>
  )

}

export default signIn;
