import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebase_app, firebase_auth } from "../firebaseConfig";

const auth = firebase_auth;

export const AuthProvider = {
  login: async (prop) => {
    const { email, password } = prop;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;
      const token = await user.getIdToken();
      localStorage.setItem("token", token);
      return await Promise.resolve();
    } catch (error) {
      return await Promise.reject(new Error("Invalid email or password"));
    }
  },

  logout: () => {
    return signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        return Promise.resolve();
      })
      .catch((error) => {
        return Promise.reject(new Error("Failed to logout"));
      });
  },

  checkAuth: () => {
    return new Promise((res,rej) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          user.getIdToken().then((token) => {
            localStorage.setItem("token", token);
            res();
          });
        } else {
          localStorage.removeItem("token");
          rej();
        }

        unsubscribe();
      });
    });
  },

  checkError: (error) => {
    // handle Firebase auth errors
    return Promise.resolve();
  },

  getPermissions: () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return Promise.reject();
    }

    return auth.currentUser
      .getIdTokenResult()
      .then((idTokenResult) => {
        return Promise.resolve(idTokenResult.claims);
      })
      .catch((error) => {
        return Promise.reject(new Error("Failed to retrieve permissions"));
      });
  },
};

// export  authProvider;
