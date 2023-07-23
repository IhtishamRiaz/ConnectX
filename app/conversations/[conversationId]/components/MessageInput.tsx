"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput = ({
  id,
  register,
  errors,
  placeholder,
  required,
  type,
}: MessageInputProps): JSX.Element => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
         font-normal
         text-black
         bg-neutral-100
         py-2
         px-4
         w-full
         rounded-full
         focus:outline-none
        "
      />
    </div>
  );
};

export default MessageInput;
