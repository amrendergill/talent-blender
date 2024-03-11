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

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const profileValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  dateOfBirth: Yup.date()
    .typeError("Date of birth must be valid date")
    .required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  profileSummary: Yup.string().required("Profile summary is required"),
  skills: Yup.string().required("Skills are required"),
  workLink: Yup.string(),
  socialUrl: Yup.string().required("Social url is required"),
  currentSalary: Yup.number()
    .typeError("Salary must be a number")
    .positive("Must be greater than 0")
    .required("Current salary is required"),
  salaryCurrency: Yup.array().required("Salary currency is required"),
  expectedSalary: Yup.number()
    .typeError("Salary must be a number")
    .positive("Must be greater than 0")
    .required("Expected salary is required"),
  noticePeriod: Yup.number()
    .typeError("Notice period must be a number")
    .positive("Must be greater than 0")
    .required("Notice period is required"),
  currentCompany: Yup.string().required("Current company is required"),
  yearsOfExperience: Yup.number()
    .typeError("Years of experience must be a number")
    .positive("Must be greater than 0")
    .required("Years of experience is required"),
  country: Yup.array().required("Country is required"),
  state: Yup.array().required("State is required"),
  city: Yup.string().required("City is required"),
  pinCode: Yup.string().test(
    "len",
    "Must be exactly 6 characters",
    (val: any) => val.length === 6
  ),
  address: Yup.string().required("Address is required"),
});



export const jobTypes: any = ["Full-time", "Part-time"];
export const jobCategories: any = [
  " Frontend Engineer",
  " Backend Engineer",
  "Customer Success Manager",
  "Project Manager",
  "HR"
];

export const salaryCurrencies: any = ['INR','USD', 'EUR', 'GBP', 'JYP']

export const jobValidationSchema = Yup.object().shape({
  jobTitle: Yup.string().required("Job title is required"),
  jobDescription: Yup.string().required("Job description is required"),
  jobType: Yup.string()
    .required("Please select a job type")
    .oneOf(jobTypes, "Please select a job type"),
  jobCategory: Yup.string()
    .required("Please select a job category")
    .oneOf(jobCategories, 'Please select a job category'),
  salaryCurreny: Yup.string()
  .required("Please select a currency")
  .oneOf(salaryCurrencies, 'Please select a currency'),
  // maxSalary: ,
  // minSalary: ,
});

export const companyProfileValidationSchema = Yup.object().shape({
  companyName: Yup.string().required("Company name is required"),
  website: Yup.string().url("Invalid URL").required("Website is required"),
  tagline: Yup.string().required("Tagline is required"),
  about: Yup.string().required("About is required"),
  industry: Yup.string().required("Industry is required"),
  headquarter: Yup.string().required("Headquarter is required"),
  companySize: Yup.number()
    .typeError("Company size must be a number")
    .required("Company size is required"),
  specialities: Yup.string().required("Specialities is required"),
  logo: Yup.mixed().required("Logo is required"),
  coverImage: Yup.mixed().required("Cover image is required"),
});
