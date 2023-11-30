
export default function Admin() {
    return (
        <>
        <div className="text-lg font-medium ">Daily overview</div>
        <div className="flex flex-row space-x-4 pl-10 pt-5 ">
        <div className="w-48 h-32 bg-white rounded-md grid grid-cols-2">
    <div className="grid content-center pl-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="DodgerBlue" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        </div>
        <div className="grid grid-cols-1">
        <div className="grid content-end text-lg">78</div>
        <div className="grid content-start text-base font-extralight">Employees</div>
        </div>
    </div>
    <div className="w-48 h-32 bg-white rounded-md grid grid-cols-2">
        <div className="grid content-center pl-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="Blue" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        </div>
        <div className="grid grid-cols-1">
        <div className="grid content-end text-lg">12</div>
        <div className="grid content-start text-base font-extralight">Stress Level</div>
        </div>
    </div>
    <div className="w-48 h-32 bg-white rounded-md grid grid-cols-2">
        <div className="grid content-center pl-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="Violet" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
        </div>
        <div className="grid grid-cols-1">
        <div className="grid content-end text-lg">20</div>
        <div className="grid content-start text-base font-extralight">Happiness Index</div>
        </div>
    </div>
    <div className="w-48 h-32 bg-white rounded-md grid grid-cols-2">
        <div className="grid content-center pl-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="Red" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        </div>
        <div className="grid grid-cols-1">
        <div className="grid content-end text-lg">18</div>
        <div className="grid content-start text-base font-extralight">Job Satisfaction</div>
        </div>
    </div>
        </div>
        <div className="flex flex-row space-x-4 pl-16 pt-5 ">
        <div className="w-80 h-48 bg-white rounded-md">
            <div className="text-base pt-3 pl-5">Happiness Graph</div>
        </div>
        <div className="w-3/6 h-48 bg-white rounded-md">
            <div className="text-base pt-3 pl-5">Stress Index</div>
        </div>
        </div>
        <div className=" w-11/12 h-48 mt-5 ml-10 bg-white rounded-md">
            <div className="text-base pt-3 pl-5">Assessment</div>
        </div>
        </>
    )
  };