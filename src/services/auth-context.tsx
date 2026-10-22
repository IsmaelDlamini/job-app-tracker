// import {User} from "../models/user.model";
import {createContext, ReactNode, useState, useEffect, useContext} from "react";
import {firebaseAuth} from "@/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, User, signOut } from "firebase/auth";



interface AuthContextType {
    currentUser: User | undefined;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<unknown>;
    signUp: (email: string, password: string) => Promise<unknown>;
    logOut: () => Promise<void>;
}


const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }){

    const [currentUser, setCurrentUser] = useState<User | undefined>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        return onAuthStateChanged(firebaseAuth, (user) => {
            setCurrentUser(user || undefined);
            setLoading(false);
        })
    })


    return (
        <AuthContext.Provider value={{ currentUser, loading, signIn: (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password), signUp: (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password), logOut: () => signOut(firebaseAuth) }}>
                {children}
            </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);
