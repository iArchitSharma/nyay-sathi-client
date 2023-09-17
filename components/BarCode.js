import Link from "next/link";
import React from "react";

const BarCode = ({ user }) => {
  return (
    <div className="absolute right-6 p-4 bg-blue-950 text-white w-4/12 h-32 flex flex-col justify-center items-center rounded-md">
      {user.type === "Advocate" ? (
        <div>
          {" "}
          <h2 className="text-lg font-semibold mb-2 w-full text-center pb-2">
            Enrollment Number : {user.enrollment}
          </h2>
          <p className="text-slate-100 mb-0">
            Enrolment Number issued by respective State Bar Council and/or the
            Bar Council of India at the time of registration
            <Link href="http://www.barcouncilofindia.org/">
              <span className="text-blue-500">&nbsp;Learn more</span>
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-2 w-full text-center pb-2">
            
          </h2>
          <p className="text-slate-100 mb-0">
            
            
          </p>
        </div>
      )}
    </div>
  );
};

export default BarCode;
