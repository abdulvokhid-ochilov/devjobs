import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useRef, useContext, useEffect, useState } from "react";
import Context from "../store/context";

const EditProfile = () => {
  const ctx = useContext(Context);

  const [photo, setPhoto] = useState();
  const [resume, setResume] = useState();

  const aboutInputRef = useRef();
  const photoInputRef = useRef();
  const resumeInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();

  useEffect(() => {
    aboutInputRef.current.value = ctx.userData.about;
    firstNameInputRef.current.value = ctx.userData.firstName;
    lastNameInputRef.current.value = ctx.userData.lastName;
    emailInputRef.current.value = ctx.userData.email;
    setPhoto(ctx.userData.photo);
    setResume(ctx.userData.resume || undefined);
  }, [ctx]);

  const submitHandler = (e) => {
    e.preventDefault();
    const aboutInput = aboutInputRef.current.value;
    const photoInput = photoInputRef.current
      ? photoInputRef.current.files[0]
      : photo;
    const resumeInput = resumeInputRef.current
      ? resumeInputRef.current.files[0]
      : resume;
    console.log(resumeInput);
    console.log(photoInput);
    const firstNameInput = firstNameInputRef.current.value;
    const lastNameInput = lastNameInputRef.current.value;
    const emailInput = emailInputRef.current.value;

    if (photoInput && photoInput.size > 1000000) {
      return alert("Photo should be less 1mb.");
    }

    if (
      resumeInput &&
      resumeInput.size > 1000000 &&
      resumeInput.type !== "application/pdf"
    ) {
      return alert("Resume should be less 1mb and must be in pdf format.");
    }
    const formData = new FormData();

    formData.append("about", aboutInput);
    formData.append("resume", resumeInput);
    formData.append("photo", photoInput);
    formData.append("firstName", firstNameInput);
    formData.append("lastName", lastNameInput);
    formData.append("email", emailInput);

    let url = "http://localhost:5000/api/v1/user/account";
    fetch(url, {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${ctx.token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Profile update failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        alert("Your changes have been saved!");

        ctx.updateUserData(ctx.token);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div className="-mt-10 min-w-[330px] max-w-[1110px] lg:mx-auto md:mx-[40px] mx-[24px] md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2 mb-10">
          <form onSubmit={submitHandler}>
            <div className=" sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white dark:bg-blue-dark space-y-6 sm:p-6">
                <div>
                  <label className="block text-[18px]">Profile Photo</label>
                  {photo ? (
                    <div className="mt-1 flex items-center">
                      <img
                        alt="profile"
                        src={photo}
                        className="object-cover rounded-full h-16 w-16"
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
                      {/* <span className="flex items-center justify-center h-12 w-12 rounded-2xl overflow-hidden bg-grey-light dark:text-grey-btn">
                        <FontAwesomeIcon icon={faUserCircle} size="lg" />
                      </span> */}
                      <input
                        ref={photoInputRef}
                        className=" cursor-pointer bg-white border-violet-dark dark:text-black border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light text-sm rounded"
                        id="profile"
                        type="file"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-[18px]">Resume</label>
                  {resume !== "undefined" ? (
                    <ul className="border border-grey-med dark:border-grey-hover rounded divide-y divide-grey-med">
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <FontAwesomeIcon
                            icon={faPaperclip}
                            className="flex-shrink-0 h-5 w-5 text-grey-med"
                            aria-hidden="true"
                          />
                          <Link
                            target="_blank"
                            to="/"
                            onClick={() => {
                              window.open(ctx.userData.resume);
                            }}
                            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-white"
                          >
                            <span className="ml-2 flex-1 w-0 truncate ">
                              resume.pdf
                            </span>
                          </Link>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <div
                            className="inline-flex justify-center ml-4 py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-red-500 hover:bg-red-400  hover:cursor-pointer"
                            onClick={() => {
                              setResume("undefined");
                            }}
                          >
                            Delete
                          </div>
                        </div>
                      </li>
                    </ul>
                  ) : (
                    <div className="mt-1 flex items-center">
                      {/* <span className="flex items-center justify-center h-12 w-12 rounded-2xl overflow-hidden bg-grey-light dark:text-grey-btn">
                        <FontAwesomeIcon icon={faFile} size="lg" />
                      </span> */}
                      <input
                        ref={resumeInputRef}
                        className="cursor-pointer bg-white border-violet-dark dark:text-black border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light text-sm rounded"
                        id="resume"
                        type="file"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="px-4 py-5 bg-white dark:bg-blue-dark space-y-6 sm:p-6">
                <div>
                  <label className="block text-[18px]">About</label>
                  <div className="mt-1 flex items-center">
                    <textarea
                      ref={aboutInputRef}
                      required
                      id="about"
                      name="about"
                      rows={3}
                      className="p-1 block dark:bg-blue-dark w-full border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light border-grey-med dark:border-grey-hover rounded"
                      placeholder=" Brief description for your profile."
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 py-5 bg-white dark:bg-blue-dark sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-[18px]">First name</label>
                    <input
                      ref={firstNameInputRef}
                      required
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="mt-1 p-1 block dark:bg-blue-dark w-full border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light border-grey-med dark:border-grey-hover rounded"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block  text-[18px]">Last name</label>
                    <input
                      ref={lastNameInputRef}
                      required
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="mt-1 p-1 block dark:bg-blue-dark w-full border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light border-grey-med dark:border-grey-hover rounded"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-[18px]">Email address</label>
                    <input
                      ref={emailInputRef}
                      required
                      type="email"
                      name="email-address"
                      id="email-address"
                      className="mt-1 p-1 block dark:bg-blue-dark w-full border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light border-grey-med dark:border-grey-hover rounded"
                    />
                  </div>
                  {/* <div className="col-span-6 sm:col-span-3">
                    <label className="block text-[18px]">Password</label>
                    <input
                      required
                      type="password"
                      name="password"
                      id="password"
                      className="mt-1 p-1 block dark:bg-blue-dark w-full border focus:outline-none focus:ring-2 focus:ring-violet-dark focus:ring-offset-2 focus:ring-offset-violet-light border-grey-med dark:border-grey-hover rounded"
                    />
                  </div> */}
                </div>
              </div>
              <div className="px-4 py-3 dark:bg-blue-dark bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-violet-dark hover:bg-violet-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-light"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
