"use client";

import { ContinueButton, PrevButton } from "@/components/Button";
import FormHeader from "@/components/FormHeader";
import { Input } from "@/components/Input";
import { useState } from "react";

type InputLabelType = {
  label: string;
  placeholder: string;
  errorMessage: string;
};

type InputLabelsType = {
  email: InputLabelType;
  firstName: InputLabelType;
  lastName: InputLabelType;
  phoneNumber: InputLabelType;
  username: InputLabelType;
  dateOfBirth: InputLabelType;
  password: InputLabelType;
  confirmPassword: InputLabelType;
  profileImage: InputLabelType;
};

type InputValuesType = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  username: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
  profileImage: string;
};

type inputErrorsType = {
  email: boolean;
  firstName: boolean;
  lastName: boolean;
  phoneNumber: boolean;
  username: boolean;
  dateOfBirth: boolean;
  password: boolean;
  confirmPassword: boolean;
  profileImage: boolean;
};

const inputLabels: InputLabelsType = {
  email: {
    label: "Email",
    placeholder: "Your email",
    errorMessage: "Email is required",
  },
  firstName: {
    label: "First name",
    placeholder: "Your first name",
    errorMessage: "First name is required",
  },
  lastName: {
    label: "Last name",
    placeholder: "Your last name",
    errorMessage: "Last name is required",
  },
  phoneNumber: {
    label: "Phone number",
    placeholder: "Your phone number",
    errorMessage: "Phone number is required",
  },
  username: {
    label: "Username",
    placeholder: "Your username",
    errorMessage: "Username is required",
  },
  dateOfBirth: { label: "", placeholder: "", errorMessage: "" },
  password: {
    label: "Password",
    placeholder: "Your password",
    errorMessage: "Password is required",
  },
  confirmPassword: {
    label: "Confirm password",
    placeholder: "Confirm password",
    errorMessage: "Confirm your password",
  },
  profileImage: { label: "", placeholder: "", errorMessage: "" }, // How should I implement this?
};

const steps = [
  ["firstName", "lastName", "username"],
  ["email", "phoneNumber", "password", "confirmPassword"],
  ["dateOfBirth", "profileImage"],
];

const HomePage = () => {
  const [step, setStep] = useState(0);
  const [inputValues, setInputValues] = useState<InputValuesType>({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    username: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    profileImage: "", // How should I implement this?
  });
  const [inputErrors, setInputErrors] = useState<inputErrorsType>({
    email: false,
    firstName: false,
    lastName: false,
    phoneNumber: false,
    username: false,
    dateOfBirth: false,
    password: false,
    confirmPassword: false,
    profileImage: false, // How should I implement this?
  });

  const getLabel = <T extends keyof InputLabelsType>(key: T) => {
    return inputLabels[key];
  };
  const getInputValue = <T extends keyof InputValuesType>(key: T) => {
    return inputValues[key];
  };
  const isError = <T extends keyof inputErrorsType>(key: T) => {
    return inputErrors[key];
  };
  const checkError = <T extends keyof inputErrorsType>(key: T) => {
    let error = getInputValue(key) === "";
    setInputErrors((prevState) => {
      return { ...prevState, [key]: error };
    });
    return error;
  };

  const updateInputValues = (field: string, newValue: string) => {
    setInputValues((prevState) => {
      return { ...prevState, [field]: newValue };
    });
    setInputErrors((prevState) => {
      return { ...prevState, [field]: false };
    });
  };

  const changeStep = (dir: number) => {
    let flag = true;
    if (dir === 1) {
      steps[step].map((field) => {
        if (checkError(field as keyof inputErrorsType)) {
          flag = false;
        }
      });
    }
    if (flag) {
      setStep((prevState) => (prevState + dir + 3) % 3);
    }
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <div
        className="w-[480px] min-h-[655px] bg-white p-8 rounded-lg
                      flex flex-col justify-between"
      >
        <div className="w-full flex flex-col gap-7">
          <FormHeader />
          <div className="w-full flex flex-col gap-3">
            {steps[step].map((field, i) => {
              return (
                <Input
                  key={step + "-" + i}
                  field={field}
                  name={getLabel(field as keyof InputLabelsType).label}
                  placeholder={
                    getLabel(field as keyof InputLabelsType).placeholder
                  }
                  errorMessage={
                    getLabel(field as keyof InputLabelsType).errorMessage
                  }
                  value={getInputValue(field as keyof InputValuesType)}
                  handleChange={updateInputValues}
                  error={isError(field as keyof inputErrorsType)}
                />
              );
            })}
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          {step > 0 && <PrevButton handleClick={changeStep} />}
          <ContinueButton step={step} handleClick={changeStep} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
