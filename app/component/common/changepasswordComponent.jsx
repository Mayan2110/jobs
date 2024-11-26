"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const ChangePasswordComponent = () => {
  const router = useRouter();

  const userId = Cookies.get("id");
  const [storedPassword, setStoredPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(
            `https://670d0d07073307b4ee421ac5.mockapi.io/login/user/${userId}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch user data.");
          }

          const userData = await response.json();

          setStoredPassword(userData.password);
          setIsLoading(false);
        } catch (error) {
          toast.error(error.message);
          setIsLoading(false);
        }
      };

      fetchUserData();
    }
  }, [userId]);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (oldPassword !== storedPassword) {
      toast.error("Old password is incorrect.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }

    try {
      const response = await fetch(
        `https://670d0d07073307b4ee421ac5.mockapi.io/login/user/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: newPassword,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update password.");
      }

      toast.success("Password changed successfully!");
      const adminEmail = Cookies.get("adminEmail");

      if (adminEmail === "mayanprajapati18@gmail.com") {
        router.push("/admin/jobs");
      } else {
        router.push("/job-search");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-sm mx-auto px-4 py-8 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Change Password
      </h2>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading user data...</p>
      ) : (
        <form onSubmit={handleChangePassword}>
          <div className="mb-5 relative">
            <div className="relative">
              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Old Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showOldPassword ? "text" : "password"}
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowOldPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showOldPassword ? (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 16 16"
                      className="bi bi-eye-slash-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z" />
                      <path
                        fillRule="evenodd"
                        d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"
                      />
                    </svg>
                  ) : (
                    <svg
                      height="17"
                      viewBox="0 0 56 56"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="m28.0103 46.4025c16.5459 0 27.9897-13.3855 27.9897-17.5582 0-4.1932-11.4646-17.558-27.9897-17.558-16.422 0-28.0103 13.3648-28.0103 17.558 0 4.1727 11.671 17.5582 28.0103 17.5582zm0-6.0524c-6.4448 0-11.5263-5.2261-11.5677-11.5058-.0206-6.4448 5.1229-11.5056 11.5677-11.5056 6.4036 0 11.5471 5.0608 11.5471 11.5056 0 6.2797-5.1435 11.5058-11.5471 11.5058zm0-7.3538c2.2929 0 4.1933-1.8797 4.1933-4.152 0-2.2928-1.9004-4.1726-4.1933-4.1726-2.3135 0-4.2139 1.8798-4.2139 4.1726 0 2.2723 1.9004 4.152 4.2139 4.152z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mb-5 relative">
            <div className="relative flex flex-col">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                New Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showNewPassword ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 16 16"
                      className="bi bi-eye-slash-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z" />
                      <path
                        fillRule="evenodd"
                        d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"
                      />
                    </svg>
                  ) : (
                    <svg
                      height="17"
                      viewBox="0 0 56 56"
                      width="17"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="m28.0103 46.4025c16.5459 0 27.9897-13.3855 27.9897-17.5582 0-4.1932-11.4646-17.558-27.9897-17.558-16.422 0-28.0103 13.3648-28.0103 17.558 0 4.1727 11.671 17.5582 28.0103 17.5582zm0-6.0524c-6.4448 0-11.5263-5.2261-11.5677-11.5058-.0206-6.4448 5.1229-11.5056 11.5677-11.5056 6.4036 0 11.5471 5.0608 11.5471 11.5056 0 6.2797-5.1435 11.5058-11.5471 11.5058zm0-7.3538c2.2929 0 4.1933-1.8797 4.1933-4.152 0-2.2928-1.9004-4.1726-4.1933-4.1726-2.3135 0-4.2139 1.8798-4.2139 4.1726 0 2.2723 1.9004 4.152 4.2139 4.152z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mb-5 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm New Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showConfirmPassword ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    className="bi bi-eye-slash-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z" />
                    <path
                      fillRule="evenodd"
                      d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"
                    />
                  </svg>
                ) : (
                  <svg
                    height="17"
                    viewBox="0 0 56 56"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path d="m28.0103 46.4025c16.5459 0 27.9897-13.3855 27.9897-17.5582 0-4.1932-11.4646-17.558-27.9897-17.558-16.422 0-28.0103 13.3648-28.0103 17.558 0 4.1727 11.671 17.5582 28.0103 17.5582zm0-6.0524c-6.4448 0-11.5263-5.2261-11.5677-11.5058-.0206-6.4448 5.1229-11.5056 11.5677-11.5056 6.4036 0 11.5471 5.0608 11.5471 11.5056 0 6.2797-5.1435 11.5058-11.5471 11.5058zm0-7.3538c2.2929 0 4.1933-1.8797 4.1933-4.152 0-2.2928-1.9004-4.1726-4.1933-4.1726-2.3135 0-4.2139 1.8798-4.2139 4.1726 0 2.2723 1.9004 4.152 4.2139 4.152z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 "
          >
            Change Password
          </button>
        </form>
      )}
    </div>
  );
};

export default ChangePasswordComponent;
