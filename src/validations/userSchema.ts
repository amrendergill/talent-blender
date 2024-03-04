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



 export const profileValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
   email: Yup.string()
     .email("Invalid email address")
     .required("Email is required"),
 mobile: Yup.number().min(10).required('Mobile number is required'),
 dateOfBirth: Yup.date().required('Date of birth is required'),
 gender: Yup.string().required('Gender is required'),
 profileSummary: Yup.string().required('Profile summary is required'),
 skills: Yup.array(),
 workLink: Yup.string(),
 socialUrl: Yup.string().required('Social url is required'),
 currentSalary: Yup.number().required('Current salary is required'),
 salaryCurrency: Yup.array().required('Salary currency is required'),
 expectedSalary: Yup.number().required('Expected salary is required'),
 noticePeriod: Yup.number().required('Notice period is required'),
 currentCompany: Yup.string().required('Current company is required'),
 yearsOfExperience: Yup.number().required('Years of experience is required'),
 country: Yup.array().required('Country is required'),
 state: Yup.array().required('State is required'),
 city: Yup.string().required('City is required'),
 pinCode: Yup.number().required('Pincode is required'),
 address: Yup.string().required('Address is required'),
 });
