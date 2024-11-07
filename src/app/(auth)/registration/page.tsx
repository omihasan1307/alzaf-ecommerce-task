"use client";
import { useState } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import fbLogo from "../../../../asset/logos_facebook.png";
import googleLogo from "../../../../asset/flat-color-icons_google.png";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TRegistration = {
  name: string;
  phoneOrEmail: string;
  password: string;
  confirmPassword: string;
  month: string;
  day: string;
  year: string;
  gender: string;
};

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<TRegistration>();
  const onSubmit: SubmitHandler<TRegistration> = (data) => {
    console.log(data);
    if (data) {
      reset();
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 25 }, (_, i) => (2000 + i).toString());

  return (
    <div className="bg-grayColor ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center h-screen ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:flex items-center gap-10 py-16 px-10 lg:px-20 bg-white">
            <div>
              <h1 className="text-xl">Welcome to Alzaf.com</h1>
              <div className="mt-5 space-y-3 ">
                {/* Full Name */}
                <div className="space-y-2">
                  <p className="text-inputTextColor">Full Name </p>
                  <input
                    placeholder="Your Full Name"
                    {...register("name", {
                      required: "name is required",
                    })}
                    className="px-4 py-2  border w-[328px] focus:outline-none hover:border-black"
                  />
                  <p>
                    {errors.name && (
                      <span className="text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </p>
                </div>
                {/* Phone or Email */}
                <div className="space-y-2">
                  <p className="text-inputTextColor">Phone Number or Email</p>
                  <input
                    placeholder="Phone or Email"
                    {...register("phoneOrEmail", {
                      required: "phone Or Email is required",
                    })}
                    className="px-4 py-2  border w-[328px] focus:outline-none hover:border-black"
                  />
                  <p>
                    {errors.phoneOrEmail && (
                      <span className="text-red-500">
                        {errors.phoneOrEmail.message}
                      </span>
                    )}
                  </p>
                </div>
                {/* Password */}
                <div className="space-y-2 relative  w-[328px]">
                  <p className="text-inputTextColor">Password</p>
                  <div className="flex items-center border">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Please enter your password"
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`-])[A-Za-z\d!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`-]{8,}$/,
                          message:
                            "Password must be at least 8 characters long, include an uppercase letter, a digit, and a special character.",
                        },
                        onChange: (e) => {
                          const value = e.target.value;
                          if (value) {
                            const isValid =
                              /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`-])[A-Za-z\d!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`-]{8,}$/.test(
                                value
                              );
                            if (!isValid) {
                              setError("password", {
                                type: "manual",
                                message:
                                  "Password must be at least 8 characters long, include an uppercase letter, a digit, and a special character.",
                              });
                            } else {
                              clearErrors("password");
                            }
                          } else {
                            clearErrors("password");
                          }
                        },
                      })}
                      className="px-4 py-2 flex-1  focus:outline-none hover:border-black"
                    />
                    <div
                      className="cursor-pointer flex items-center justify-center w-10 h-full bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </div>
                  </div>
                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                {/* Confirm Password */}
                <div className="space-y-2 relative w-[328px]">
                  <p className="text-inputTextColor">Confirm Password</p>
                  <div className="flex items-center border">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        pattern: {
                          value:
                            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`-])[A-Za-z\d!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`-]{8,}$/,
                          message:
                            "Password must be at least 8 characters long, include an uppercase letter, a digit, and a special character.",
                        },
                        onChange: (e) => {
                          const value = e.target.value;
                          if (value) {
                            const isValid =
                              /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`-])[A-Za-z\d!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`-]{8,}$/.test(
                                value
                              );
                            if (!isValid) {
                              setError("confirmPassword", {
                                type: "manual",
                                message:
                                  "Password must be at least 8 characters long, include an uppercase letter, a digit, and a special character.",
                              });
                            } else {
                              clearErrors("confirmPassword");
                            }
                          } else {
                            clearErrors("confirmPassword");
                          }
                        },
                      })}
                      className="px-4 py-2 flex-1 focus:outline-none hover:border-black"
                    />
                    <div
                      className="cursor-pointer flex items-center justify-center w-10 h-full bg-transparent"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </div>
                  </div>
                  {errors.confirmPassword && (
                    <span className="text-red-500">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h1 className="hidden lg:block text-xl text-baseColor text-right">
                Login
              </h1>

              <div className="mt-5 space-y-3">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {/* Month  */}
                    <div className="space-y-2">
                      <p className="text-inputTextColor">Birthday</p>

                      <Select
                        onValueChange={(value) => setValue("month", value)}
                      >
                        <SelectTrigger className="w-[78px]">
                          <SelectValue
                            placeholder="Month"
                            className="text-inputTextColor"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {months.map((month) => (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {/* day */}
                    <div className="pt-8">
                      <Select onValueChange={(value) => setValue("day", value)}>
                        <SelectTrigger className="w-[78px]">
                          <SelectValue
                            placeholder="Day"
                            className="text-inputTextColor"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {days.map((day) => (
                            <SelectItem key={day} value={day}>
                              {day}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {errors.day && (
                        <span className="text-red-500">
                          {errors.day.message}
                        </span>
                      )}
                    </div>
                    {/* Year */}
                    <div className="pt-8">
                      <Select
                        onValueChange={(value) => setValue("year", value)}
                      >
                        <SelectTrigger className="w-[78px]">
                          <SelectValue
                            placeholder="Year"
                            className="text-inputTextColor"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {errors.year && (
                        <span className="text-red-500">
                          {errors.year.message}
                        </span>
                      )}
                    </div>
                    {/* gender */}
                    <div className="space-y-2">
                      <p className="text-inputTextColor">Gender</p>

                      <Select
                        onValueChange={(value) => setValue("gender", value)}
                      >
                        <SelectTrigger className="w-[78px]">
                          <SelectValue
                            placeholder="Gender"
                            className="text-inputTextColor"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 w-[328px]  pb-4">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#9C9C9C]"
                    >
                      I’d like to receive exclusive offers and promotions via
                      SMS.{" "}
                    </label>
                  </div>
                </div>

                <input
                  type="submit"
                  className="py-2 bg-baseColor text-white w-[328px] focus:outline-none cursor-pointer"
                  value="Sign Up"
                />
                <p className="text-inputTextColor text-center">or</p>
                <div className="space-y-3">
                  <div className="border flex items-center justify-center space-x-3 border-baseColor py-2 cursor-pointer">
                    <Image src={fbLogo} alt={"fbLogo"} />
                    <p>Sign Up with Facebook</p>
                  </div>
                  <div className="border flex items-center justify-center space-x-3 border-baseColor py-2 cursor-pointer">
                    <Image src={googleLogo} alt={"googleLogo"} />
                    <p>Sign Up with Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
