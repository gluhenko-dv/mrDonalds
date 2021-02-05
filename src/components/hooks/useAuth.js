import { useEffect, useState } from "react";

export function useAuth(authFirebase) {
  const [authentication, setAuthentication] = useState(null);

  const auth = authFirebase();

  const provider = new authFirebase.GoogleAuthProvider();

  const login = () => auth.signInWithPopup(provider);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setAuthentication(user);
      }
    });
  }, [authentication]);
  return { authentication, login };
}
