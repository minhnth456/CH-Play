import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
    user: undefined,
    loginUser: (_data: any) => { },
    logoutUser: () => { }
});

export const AuthContextProvider = ({ children }: any) => {
    const [user, setUser] = useState(undefined);

    const loginUser = (data: any) => {
        setUser(data);
    };

    const logoutUser = () => {
        setUser(undefined);
    };

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('Lỗi hoặc ngoài Provider');
    }
    return context;
};
