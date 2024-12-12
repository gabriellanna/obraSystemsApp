import { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { StorageService } from '../services/storage/storageService';
import { AuthService } from '../services/api/auth/AuthService';
import { IResponseAPI } from '../models/base';
import { Auth } from '../models/base/Auth';
import { User } from '../models/User';
import { Role } from '../models/Role';
// import { RoleService } from '../services/api/role/RoleService';


interface IAuthContextData {
  user: User;
  // roles: IRole[];
  logout: () => void;
  globalLoading: boolean;
  isAuthenticated: boolean;
  // setRoles: Dispatch<SetStateAction<IRole[]>>;
  setGlobalLoading: Dispatch<SetStateAction<boolean>>;
  login: (email: string, password: string) => Promise<IResponseAPI<Auth>>;
  // handleSigninToken: (hash: string) => Promise<IResponseAPI<Auth>>;
};

const AuthContext = createContext({} as IAuthContextData);

interface IAuthProviderProps {
  children: ReactNode;
}
export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const storage = new StorageService()
  const [accessToken, setAccessToken] = useState<string>();
  const [user, setUser] = useState<User>(storage.getUser());
  const [isLoading, setIsLoading] = useState(true);



  const [roles, setRoles] = useState<Role[]>([])
  const [globalLoading, setGlobalLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true)

    const accessTokenJSON = storage.getToken();
    setUser(storage.getUser())
    if (accessTokenJSON) {
      setAccessToken(accessTokenJSON)
      // getRoles()
    } else {
      setAccessToken(undefined);
    }
    setIsLoading(false)
  }, [])

  // const getRoles = () => {
  //   const storage = new StorageService();
  //   const roles = storage.getRoles();
  //   if (roles != undefined && roles.length > 0) {
  //     setRoles(roles)
  //   } else {
  //     RoleService.getRole().then(
  //       result => {
  //         setGlobalLoading(true);

  //         if (result.success == true && result.data != undefined) {
  //           if (result.data.length > 0) {
  //             storage.saveRoles(result.data);
  //             setRoles(result.data)
  //           }
  //         } else {
  //           alert(result.errors[0]);
  //         }
  //         setGlobalLoading(false);
  //       }
  //     );
  //   }
  // }

  const handleLogin = useCallback(async (email: string, password: string) => {
    const result = await AuthService.auth(email, password);
    if (!result.success) {
      return result;
    } else {
      storage.saveToken(result.data?.accessToken as string);
      // storage.saveRefreshToken(result.data?.refreshToken as string);
      storage.saveUser(result.data?.data as User);
      // storage.saveRoles(result.data?.data.roles as Role[]);
      // setRoles(result.data?.data.roles as Role[]);
      setUser(result.data?.data as User);
      setAccessToken(result.data?.accessToken);
      return result;
    }
  }, []);

  // const handleSigninToken = useCallback(async (hash: string) => {
  //   storage.saveToken(hash);
  //   setAccessToken(hash);
  //   const result = await AuthService.signinToken();
  //   if (!result.success) {
  //     return result;
  //   } else {
  //     storage.saveToken(result.data?.accessToken as string);
  //     storage.saveRefreshToken(result.data?.refreshToken as string);
  //     storage.saveUser(result.data?.data as IUser);
  //     storage.saveRoles(result.data?.data.roles as IRole[]);
  //     setRoles(result.data?.data.roles as IRole[])
  //     setUser(result.data?.data as IUser)
  //     setAccessToken(result.data?.accessToken);
  //     return result;
  //   }
  // }, []);

  const handleLogout = useCallback(() => {
    new StorageService().signOut();
    setAccessToken(undefined);
  }, []);
  

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);


  return (
    <>
      {
        isLoading ? <p>Carregando...</p> :
          <AuthContext.Provider value={{
            isAuthenticated,
            user,
            login: handleLogin,
            logout: handleLogout,
            // roles,
            // setRoles,
            globalLoading,
            setGlobalLoading,
            // handleSigninToken
          }}>
            {children}
          </AuthContext.Provider>
      }
    </>
  )
};

export const useAuthContext = () => useContext(AuthContext);