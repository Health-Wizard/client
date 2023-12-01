import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
  empId?: string;
  companyEmail?: string;
  userName?: string;
}
interface IOnBoarding {
  designation: string;
  role: string;
  gender: string;
}

interface User {
  user: IUser | {};
  onBoarding: IOnBoarding;
  setUser: (user: IUser) => void;
  setOnBoarding: (data: IOnBoarding) => void;
  removeUser: () => void;
}

export const useAuthStore = create<User>()(
  persist(
    (set, get) => ({
      user: {},
      onBoarding: {
        designation: "",
        role: "",
        gender: "",
      },

      //set user
      setUser(data: IUser) {
        let { user } = get();

        set((state) => ({
          ...state,
          user: {
            ...user,
            empId: data.empId,
            companyEmail: data.companyEmail,
            userName: data.userName,
          },
        }));
      },
      setOnBoarding(data: IOnBoarding) {
        let { onBoarding } = get();

        set((state) => ({
          ...state,
          onBoarding: {
            ...onBoarding,
            ...data,
          },
        }));
      },
      //clear user
      removeUser() {
        set(() => ({
          user: {},
        }));
      },
    }),
    {
      name: "userData",
    }
  )
);
