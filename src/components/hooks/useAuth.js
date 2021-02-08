import {useEffect, useState} from 'react';

export function useAuth(authFirebase) {
  const [authentication, setAuthentication] = useState(null);

  const auth = authFirebase();

  const provider = new authFirebase.GoogleAuthProvider();

  const logIn = () => auth.signInWithPopup(provider);

  const logOut = () => auth.signOut().catch((err) => console.error(err));

  useEffect(() => {
    auth.onAuthStateChanged((user) => setAuthentication(user || null));
  }, [auth]);
  return {authentication, logIn, logOut};
}
