import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Context from "../store/context";

const MyJobs = () => {
  const ctx = useContext(Context);

  const deleteJob = (id) => {
    let url = `http://localhost:5000/api/v1/user/posted-jobs/${id}`;
    fetch(url, {
      method: "DELETE",
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
            let errorMessage = "Job deletion failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        ctx.updateUserData(ctx.token);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="-mt-10 min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] flex flex-col items-center justify-center">
      <div className="w-full mb-8 bg-white dark:bg-blue-dark shadow rounded border border-grey-light dark:border-grey-hover">
        <header className="px-5 py-4 border-b border-grey-light dark:border-grey-hover">
          <h2 className="font-semibold">Posted Jobs</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-grey-light dark:bg-blue-dark">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Company Name</div>
                  </th>

                  <th className="p-2 whitespace-nowrap hidden sm:table-cell">
                    <div className="font-semibold text-left">Position</div>
                  </th>
                  <th className="p-2 whitespace-nowrap hidden sm:table-cell">
                    <div className="font-semibold text-left">Location</div>
                  </th>
                  <th className="p-2 whitespace-nowrap hidden sm:table-cell">
                    <div className="font-semibold text-left">Type</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Edit</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Delete</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-grey-light dark:divide-grey-hover">
                {ctx.userData.postedJobs.map((job) => (
                  <tr key={job["_id"]}>
                    <td className="p-2 whitespace-nowrap">
                      <Link to="../">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-md bg-yellow-500 object-contain"
                              src={job.logo}
                              alt={job.company}
                            />
                          </div>
                          <div className="font-medium">{job.company}</div>
                        </div>
                      </Link>
                    </td>

                    <td className="p-2 whitespace-nowrap hidden sm:table-cell">
                      <div className="text-left font-medium">
                        {job.position}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap hidden sm:table-cell">
                      <div className="text-left font-medium">
                        {job.location}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap hidden sm:table-cell">
                      <div className="text-left font-medium">
                        {job.contract}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <Link to="/post-job" state={job}>
                        <div className="text-lg text-center text-green-500 hover:text-black dark:hover:text-white hover:cursor-pointer">
                          <FontAwesomeIcon icon={faEdit} />
                        </div>
                      </Link>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div
                        onClick={() => {
                          deleteJob(job["_id"]);
                        }}
                        className="text-lg text-center text-red-500 hover:text-black dark:hover:text-white hover:cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
