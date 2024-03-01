import * as Yup from "yup";
 // validations
 export const validationSchema = Yup.object().shape({
   email: Yup.string()
     .email("Invalid email address")
     .required("Email is required"),
   password: Yup.string()
     .min(8, "Password must be at least 8 characters")
     .required("Passowrd is required"),
 });

 export type User = Yup.InferType<typeof validationSchema>;