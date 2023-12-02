import { MdAdd } from "react-icons/md";
import profile from "@assets/images/profile.jpeg";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { LuTrash } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { getAllEmployeesByCompanyName } from "@modules/Shared/services/apis/employee";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import LoadingIcons from "react-loading-icons";

const fetchEmployees = async (param: number) => {
  // Fetch data based on the parameter
  const data = await getAllEmployeesByCompanyName(param);

  return data;
};

interface IEmployee {
  age: number | null;
  companyEmail: string;
  companyName: string;
  companyUrl: string;
  dateOfJoining: string;
  department: string;
  designation: string;
  empId: number;
  gender: string;
  id: number;
  name: string;
  role: string;
  salary: string;
  sector: string;
  sizeOfCompany: string;
  username: string;
}

interface Items {
  currentPage: number;

  employeeCount: number;

  employees: IEmployee[];

  totalPages: number;
}

export const EmployeeList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error, refetch } = useQuery<Items, Error>(
    ["employees", page],
    () => fetchEmployees(page)
  );

  // Use useEffect to trigger the query whenever myState changes
  useEffect(() => {
    console.log("now");
    refetch();
  }, [page]);

  return (
    <>
      <div className="h-[15%]  flex justify-between items-center">
        <h2 className="text-xl font-semibold">Employees directory</h2>
        <button className=" bg-primary text-white font-semibold flex items-center px-3 h-10 rounded-md">
          <MdAdd size={20} />
          add new employee
        </button>
      </div>

      <div className="h-[85%]  ">
        {!isLoading && data && (
          <div className="h-[90%] border border-border_gray grid grid-cols-4 rounded-xl ">
            {data &&
              data.employees.map((employee: IEmployee, idx) => (
                <div
                  className={`${
                    idx < 3
                      ? "border-r"
                      : idx > 3 && idx < 7
                      ? "border-r border-t"
                      : idx == 7
                      ? "border-t"
                      : ""
                  }  border-border_gray border-b ${
                    data.totalPages < 5 ? "h-[50%] " : ""
                  } `}
                >
                  <div className="h-[60%] flex items-center justify-center">
                    <img
                      src={profile}
                      className="h-20 w-20 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="h-[10%] text-center">{employee.name}</div>
                  <div className="h-[10%] text-center text-text_gray text-xs">
                    A6S9T2D0P5
                  </div>
                  <div className="h-[20%] flex justify-center text-primary space-x-3">
                    <LuTrash size={20} className="cursor-pointer" />
                    <PiPencilSimpleLineBold
                      size={20}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
        {isLoading && (
          <div className="h-[90%] flex items-center justify-center ">
            <LoadingIcons.Oval
              stroke="#000000"
              strokeOpacity={0.5}
              speed={0.75}
            />
          </div>
        )}
        {!isLoading && data && (
          <div className="h-[10%]  flex justify-center items-center space-x-4">
            <div
              onClick={() => setPage(page - 1)}
              className="border border-border_gray rounded-md flex items-center justify-center text-text_gray  h-6 w-6 cursor-pointer hover:bg-primary hover:text-white"
            >
              <FaChevronLeft size={10} />
            </div>
            {(() => {
              const components = [];
              for (let i = 0; i < data.totalPages; i++) {
                components.push(
                  <div
                    onClick={() => setPage(i + 1)}
                    className={` rounded-md flex items-center justify-center text-text_gray  h-6 w-6 cursor-pointer ${
                      page == i + 1 ? "bg-primary text-white" : ""
                    } hover:bg-primary hover:text-white`}
                  >
                    {i + 1}
                  </div>
                );
              }
              return components;
            })()}

            <div
              onClick={() => setPage(page + 1)}
              className="border border-border_gray rounded-md flex items-center justify-center text-text_gray  h-6 w-6 cursor-pointer hover:bg-primary hover:text-white"
            >
              <FaChevronRight size={10} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
