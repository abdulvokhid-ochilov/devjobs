import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useContext, useState } from "react";
import Context from "../store/context";

const Applicants = () => {
  const ctx = useContext(Context);
  const [applicants, setApplicants] = useState(null);
  const id = useLocation().state;
  console.log(id);

  useEffect(() => {
    let url = `http://localhost:5000/api/v1/user/posted-jobs/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ctx.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Getting applicants failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        setApplicants(data.data.applications);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id, ctx]);

  return (
    <div className="-mt-10 min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] flex flex-col items-center justify-center">
      <div className="w-full mb-8 bg-white dark:bg-blue-dark shadow rounded border border-grey-light dark:border-grey-hover">
        <header className="px-5 py-4 border-b border-grey-light dark:border-grey-hover">
          <h2 className="font-semibold">Applicants</h2>
        </header>
        {applicants ? (
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-grey-light dark:bg-blue-dark">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Full Name</div>
                    </th>

                    <th className="p-2 whitespace-nowrap hidden sm:table-cell">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap hidden sm:table-cell">
                      <div className="font-semibold text-left">Applied at</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Info</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-grey-light dark:divide-grey-hover">
                  {applicants.map((el) => (
                    <tr key={el.applicant["_id"]}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full bg-yellow-500 object-contain"
                              src={el.applicant.photo}
                              alt={el.applicant.firstName}
                            />
                          </div>
                          <div className="font-medium">
                            {el.applicant.firstName} {el.applicant.lastName}
                          </div>
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-left font-medium">
                          {el.applicant.email}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-left font-medium">
                          {new Date(el.appliedAt).toLocaleString()}
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <Link to="/applicant/info" state={el.applicant}>
                          <div className="text-lg text-center text-violet-dark hover:text-black dark:hover:text-white hover:cursor-pointer">
                            <FontAwesomeIcon icon={faArrowRight} />
                          </div>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Applicants;
