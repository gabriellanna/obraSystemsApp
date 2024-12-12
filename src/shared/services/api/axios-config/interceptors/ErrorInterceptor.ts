// import { AxiosError } from "axios";
// import { AuthService } from "../../auth/AuthService";
// import { StorageService } from "../../../storage/storageService";
// import { User } from "../../../../models/User";


// export const errorInterceptor = (error: AxiosError) => {
//   if (error?.code == "ERR_NETWORK") {
//     const storage = new StorageService();
//     const qnt = storage.getQntRefreshToken()
//     if (qnt > 2) {
//       storage.signOut()
//     } else {
//       storage.saveQntRefreshToken(qnt + 1)
//       const refreshToken = storage.getRefreshToken();
//       AuthService.refreshToken(refreshToken).then((data) => {
//         if (data.success) {
//           storage.signOut(false)
//           storage.saveToken(data.data?.accessToken as string)
//           storage.saveRefreshToken(data.data?.refreshToken as string)
//           storage.saveUser(data.data?.data as User)
//           window.location.reload()
//         } else {
//           storage.signOut()
//         }
//       })
//     }
//   }

//   return Promise.reject(error);
// }

export {};