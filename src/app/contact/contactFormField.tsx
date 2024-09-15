'./custom.css'
import { ChangeEvent } from "react";
import PhoneInput from "react-phone-number-input";

// Define interface for form fields
export interface IContactFormField {
  name: string; // Unique field identifier (used by Formik)
  placeholder: string; // Placeholder text
  type: string; // Input type (text, email, password, etc.)
  textarea: boolean;
  id: string;
  value: string;
  onchange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onblur: (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => void;
  touched: boolean;
  errorText: string | undefined;
}

// Input component
export function ContactFormInput({
  name,
  placeholder,
  type,
  textarea,
  id,
  value,
  onchange,
  onblur,
  touched,
  errorText,
}: IContactFormField) {
  return (
    <div className="mb-4">
      {textarea ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onchange}
          onBlur={onblur}
          className="bg-[#F3F4F7] rounded-2xl w-full focus:outline-none focus:ring-1 focus:ring-[#0B3434] text-[#0B3434] font-aventa_Medium focus:bg-white h-[138px] resize-none py-3 pl-3 mt-1"
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onchange}
          onBlur={onblur}
          className="bg-[#F3F4F7] rounded-2xl w-full focus:outline-none focus:ring-1 focus:ring-[#0B3434] text-[#0B3434] font-aventa_Medium focus:bg-white py-3 pl-3 mt-1"
        />
      )}
      {touched && <div className="text-red-500 text-sm mt-1">{errorText}</div>}
    </div>
  );
}

// Label component
export interface IContactFormLabel {
  id: string;
  label: string;
}

export function ContactFormLabel({ label, id }: IContactFormLabel) {
  return (
    <label
      htmlFor={id}
      className="text-sm font-medium text-gray-700 font-aventa_Semibold"
    >
      {label}
    </label>
  );
}

// Phone input component
export interface IContactFormPhone {
  name: string;
  placeholder: string;
  value: string;

  onchange: (value: string | undefined) => void;
  onblur: (e: React.FocusEvent<HTMLInputElement>) => void;
  touched: boolean;
  errorText: string | undefined;
  label: string;
}

export function ContactFormPhone({
  name,
  placeholder,
  value,
  onchange,
  onblur,
  touched,
  label,
  errorText,
}: IContactFormPhone) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 font-aventa_Semibold mb-1">
        {label}
      </p>
      <PhoneInput
        value={value}
        defaultCountry="NG"
        placeholder={placeholder}
        onChange={onchange} // We pass only the value here, no event
        className="phone"
      />
      {/* Hidden input for Formik to track `name` and `onBlur` */}
      <input
        type="hidden"
        name={name}
        value={value}
        onBlur={onblur} // Pass Formik's blur handler
      />
      {touched && errorText && (
        <div className="text-red-500 text-sm mt-1">{errorText}</div>
      )}
    </div>
  );
}

export function ContactRequestType() {
  return (
    <div className="flex flex-col ">
      <p className="text-sm font-medium text-gray-700 font-aventa_Semibold text-[18px]">
        Type of Request*
      </p>
      <p className="bg-[#F3F4F7] rounded-2xl w-full  font-aventa_Medium py-3 pl-3 mt-1 text-[#bfbfbf]">
        Mail
      </p>
    </div>
  );
}
