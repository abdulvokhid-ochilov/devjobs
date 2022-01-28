// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faImage } from "@fortawesome/free-solid-svg-icons";
import EditorComp from "../components/Editor";
import { useRef, useContext, useEffect, useState } from "react";
import Context from "../store/context";
import { useLocation, useNavigate } from "react-router-dom";

const PostJob = () => {
  const ctx = useContext(Context);
  const navigate = useNavigate();

  const jobData = useLocation().state;
  console.log(jobData);

  const [photo, setPhoto] = useState();

  const editorRef = useRef();
  const companyNameRef = useRef();
  const companyWebsiteRef = useRef();
  const positionRef = useRef();
  const locationRef = useRef();
  const jobTypeRef = useRef();
  const logoRef = useRef();

  useEffect(() => {
    if (jobData) {
      // editorRef.current.setContent(jobData.description);
      companyNameRef.current.value = jobData.company;
      companyWebsiteRef.current.value = jobData.website;
      positionRef.current.value = jobData.position;
      locationRef.current.value = jobData.location;
      jobTypeRef.current.value = jobData.contract;
      setPhoto(jobData.logo);
    } else {
      companyNameRef.current.value = "";
      companyWebsiteRef.current.value = "";
      positionRef.current.value = "";
      locationRef.current.value = "";
      jobTypeRef.current.value = "Full Time";
      setPhoto(null);
    }
  }, [jobData]);

  const submitHandler = (e) => {
    e.preventDefault();

    const jobDescription = editorRef.current.getContent();
    const companyName = companyNameRef.current.value;
    const companyWebsite = companyWebsiteRef.current.value;
    const position = positionRef.current.value;
    const location = locationRef.current.value;
    const jobType = jobTypeRef.current.value;
    const logo = logoRef.current ? logoRef.current.files[0] : photo;
    console.log(logo);
    const formData = new FormData();

    formData.append("description", jobDescription);
    formData.append("company", companyName);
    formData.append("logo", logo);
    formData.append("website", companyWebsite);
    formData.append("position", position);
    formData.append("location", location);
    formData.append("contract", jobType);

    let url = jobData
      ? `http://localhost:5000/api/v1/user/posted-jobs/${jobData["_id"]}`
      : "http://localhost:5000/api/v1/jobs";
    fetch(url, {
      method: jobData ? "PATCH" : "POST",
      body: formData,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${ctx.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = jobData
              ? "Job update failed!"
              : "Job creation failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        editorRef.current.setContent("");
        companyNameRef.current.value = "";
        companyWebsiteRef.current.value = "";
        positionRef.current.value = "";
        locationRef.current.value = "";
        // jobTypeRef.current.value = "";
        ctx.updateUserData(ctx.token);
        // using replace here
        jobData && navigate("/myjobs", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="-mt-10 pb-10 min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] md:grid md:grid-cols-2 md:gap-6">
      <div className="md:mt-0 md:col-span-2">
        <form onSubmit={submitHandler}>
          <div className="shadow  sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white dark:bg-blue-dark space-y-6 sm:p-6">
              <div>
                <label className="block text-[18px]">Company Logo</label>
                {photo ? (
                  <div className="mt-1 flex items-center">
                    <img
                      src={photo}
                      alt="Company Logo"
                      className="h-14 w-14 object-contain rounded-md overflow-hidden bg-white"
                    />
                    <div
                      className="inline-flex justify-center ml-4 py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-red-500 hover:bg-red-400  hover:cursor-pointer"
                      onClick={() => {
                        setPhoto(null);
                      }}
                    >
                      Delete
                    </div>
                  </div>
                ) : (
                  <div className="mt-1 flex items-center">
                    {/* <span className="flex items-center justify-center h-12 w-12 rounded-md overflow-hidden bg-grey-light dark:text-grey-btn">
                      <FontAwesomeIcon icon={faImage} size="lg" />
                    </span> */}
                    <input
                      ref={logoRef}
                      className=" cursor-pointer bg-white border-violet-dark dark:text-black border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light text-sm rounded"
                      id="company-logo"
                      type="file"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="px-4 py-5 bg-white dark:bg-blue-dark sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="company-name" className="block text-[18px]">
                    Company Name
                  </label>
                  <input
                    ref={companyNameRef}
                    required
                    type="text"
                    name="company-name"
                    id="company-name"
                    className="mt-1 p-1 block dark:bg-blue-dark w-full border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light border-grey-med dark:border-grey-hover rounded"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="company-website"
                    className="block  text-[18px]"
                  >
                    Company website
                  </label>
                  <input
                    ref={companyWebsiteRef}
                    required
                    type="text"
                    name="company-website"
                    id="company-website"
                    className="mt-1 p-1 focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light block w-full  border border-grey-med rounded dark:border-grey-hover dark:bg-blue-dark"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="position" className="block text-[18px]">
                    Position
                  </label>
                  <input
                    ref={positionRef}
                    required
                    type="text"
                    name="position"
                    id="position"
                    className="mt-1 p-1 focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light block w-full border border-grey-med dark:border-grey-hover dark:bg-blue-dark rounded"
                  />
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="location" className="block text-[18px]">
                    Location
                  </label>
                  <input
                    ref={locationRef}
                    required
                    type="text"
                    name="location"
                    id="location"
                    className="mt-1 p-1 focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light block w-full border border-grey-med dark:border-grey-hover dark:bg-blue-dark rounded"
                  />
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor="job-type" className="block text-[18px]">
                    Type
                  </label>
                  <select
                    ref={jobTypeRef}
                    required
                    name="type"
                    id="type"
                    className="mt-1 p-1.5 focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light block w-full border border-grey-med dark:border-grey-hover dark:bg-blue-dark rounded"
                  >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Internship">Internship</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <h1 className="my-4 text-[18px]">
                    Job description in detail
                  </h1>
                  <EditorComp
                    ref={editorRef}
                    value={
                      jobData
                        ? jobData.description
                            .replaceAll("&amp;", "&")
                            .replaceAll("&lt;", "<")
                            .replaceAll("&gt;", ">")
                            .replaceAll("&quot;", '"')
                            .replaceAll("&#039;", "'")
                        : ""
                    }
                  />
                </div>
              </div>
            </div>

            <div className="px-4 py-3 bg-white dark:bg-blue-dark text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-violet-dark hover:bg-violet-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-light"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
