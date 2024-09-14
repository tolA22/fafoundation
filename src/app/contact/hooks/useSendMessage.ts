import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";

export default function useSendMessage() {
  const [phoneNumber, Phone] = useState("");
  const [Name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [Message, SetMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      Name: "",
      email: "",
      Message: "",
    },
    // write the validation schema in a different file next time
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
      Name: Yup.string().required("Please Input Your Name"),
      email: Yup.string().required("Email is Required"),
      Message: Yup.string().required("Please Enter Text"),
    }),

    onSubmit: (values) => {
      console.log("Form values", values);
    },
  });

  return { formik };
}
