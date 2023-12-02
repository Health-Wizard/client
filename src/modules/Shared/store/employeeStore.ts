import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IEmployee {
  age: number | null;
  companyEmail: string;
  companyName: string;
  companyUrl: string;
  dateOfJoining: string;
  department: string;
  designation: string;
  empId: number;
  gender: string | null;
  id: number;
  name: string;
  role: string;
  salary: string;
  sector: string;
  sizeOfCompany: string;
  username: string;
}

interface User {
  employee: IEmployee | null;
  setEmployee: (user: IEmployee) => void;
  resetEmployee: () => void;
}

export const useEmployeeStore = create<User>()(
  persist(
    (set, get) => ({
      employee: null,

      //set user
      setEmployee(data: IEmployee) {
        let { employee } = get();

        set((state) => ({
          ...state,
          employee: {
            ...data,
          },
        }));
      },

      //clear user
      resetEmployee() {
        set(() => ({
          employee: null,
        }));
      },
    }),
    {
      name: "employeeData",
    }
  )
);
