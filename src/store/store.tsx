import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


export const authInitialState: any = {
    email: "",
    password: "",
};

const useAuth = create(
  persist(
    (set) => ({
      authState: authInitialState,
      login: async (user: any) => {
        set({
          authState: user,
        });
        return user;
      },
      signup: async (user: any) => {
        set({
          authState: user,
        });
        return user;
      },
      recruiterLogin: async (user: any) => {
        console.log("store",user)
        set({
          authState: user,
        });
        return user;
      },
    }),
    {
      name: "Auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuth;
