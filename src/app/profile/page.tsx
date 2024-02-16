"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEffect, useReducer, useState } from "react"
import { useRouter, useSearchParams } from 'next/navigation'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
const educationTableHeader = [
    {
        header: "Institution"
    },
    {
        header: "Board"
    },
    {
        header: "Degree"
    },
    {
        header: "Stream"
    },
    {
        header: "State"
    },
    {
        header: "City"
    },
    {
        header: "Start Date"
    },
    {
        header: "End Date"
    },
    {
        header: "Presently Studying"
    },
    {
        header: "Actions"
    },
]

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'nameChange': {
            return {
                ...state,
                name: action.value,
            };
        }
        case 'emailChange': {
            return {
                ...state,
                email: action.value,
            };
        }
        case 'mobileChange': {
            return {
                ...state,
                mobile: action.value,
            };
        }
        case 'dobChange': {
            return {
                ...state,
                dob: action.value,
            };
        }
        case 'genderChange': {
            return {
                ...state,
                gender: action.value,
            };
        }
        case 'summaryChange': {
            return {
                ...state,
                summary: action.value,
            };
        }
        case 'currentSalaryChange': {
            return {
                ...state,
                current_salary: action.value,
            };
        }
        case 'expectedSalaryChange': {
            return {
                ...state,
                expected_salary: action.value,
            };
        }
        case 'salaryCurrencyChange': {
            return {
                ...state,
                salary_currency: action.value,
            };
        }
        case 'noticePeriodChange': {
            return {
                ...state,
                notice_period: action.value,
            };
        }
        case 'companyChange': {
            return {
                ...state,
                current_company: action.value,
            };
        }
        case 'totalExperienceChange': {
            return {
                ...state,
                total_experience: action.value,
            };
        }
        case 'currentLocChange': {
            return {
                ...state,
                current_location: action.value,
            };
        }
        case 'prefferedLocChange': {
            return {
                ...state,
                preffered_location: action.value,
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

const reducerQualification = (state: any, action: any) => {
    switch (action.type) {
        case 'educationChange': {
            return {
                ...state,
                education_history: [...state?.education_history, action.value],
            };
        }
        case 'employmentChange': {
            return {
                ...state,
                employment_history: [...state?.employment_history, action.value],
            };
        }
        case 'certificateChange': {
            return {
                ...state,
                certificate_history: [...state?.certificate_history, action.value],
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}
const initialState = {
    name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    summary: "",
    skills: [],
    work_link: [],
    social_link: [],
    current_salary: 0,
    expected_salary: 1,
    salary_currency: "Inr",
    notice_period: 0,
    current_company: "",
    total_experience: 0,
    current_location: {
        country: "",
        state: "",
        city: "",
        address: "",
        pincode: "",
    },
    preffered_location: {
        country: "",
        state: "",
        city: "",
        address: "",
        pincode: "",
    }
};
const initialStateQualification = {
    education_history: [],
    employment_history: [],
    certificate_history: [],
};

const initialNewData = {
    education_history: {},
    employment_history: {},
    certificate_history: {},
};

export default function Profile() {
    const [activeTab, setActiveTab] = useState("qualifications");
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const status: any = params.get("status");
    const router = useRouter()
    const [state, dispatch] = useReducer(reducer, initialState);
    const [qualificationTable, dispatchQualificationTable] = useReducer(reducerQualification, initialStateQualification);
    const [newData, setNewData]: any = useState(initialNewData);

    useEffect(() => {
        handleTab(status);
    }, [status]);
    const handleTab = (tabName: any) => {
        setActiveTab(tabName);
        router.push(`/profile?status=${tabName}`)
    };

    return (
        <main className="container px-6">
            <div className="px-2">

                <div className="flex justify-between items-center my-5">
                    <div className="">
                        Update Profile
                    </div>
                    <Button className="" variant={'outline'}>
                        Change Password
                    </Button>
                </div>
                <div>
                    <div className="flex items-center gap-4">

                        <Button onClick={() => handleTab('basic-details')} className={`bg-[#f5f5f5] text-xs rounded-[3px] ${activeTab === "basic-details" && "bg-white border-[#0a66c2]"}`} variant={'outline'}>
                            Basic Details
                        </Button>
                        <Button onClick={() => handleTab('resume')} className={`bg-[#f5f5f5] text-xs rounded-[3px] ${activeTab === "resume" && "bg-white border-[#0a66c2]"}`} variant={'outline'}>
                            Resume
                        </Button>
                        <Button onClick={() => handleTab('qualifications')} className={`bg-[#f5f5f5] text-xs rounded-[3px] ${activeTab === "qualifications" && "bg-white border-[#0a66c2]"}`} variant={'outline'}>
                            Qualifications
                        </Button>
                        <Button onClick={() => handleTab('documentation')} className={`bg-[#f5f5f5] text-xs rounded-[3px] ${activeTab === "documentation" && "bg-white border-[#0a66c2]"}`} variant={'outline'}>
                            Documentation
                        </Button>

                    </div>
                    {
                        activeTab === "basic-details" && (
                            <div>
                                <div className="my-6 mx-2">
                                    <div className="flex items-center gap-20">
                                        <div className="mx-3">
                                            <div>
                                                <Image src={'/images/blank-profile-picture-973460_960_720.webp'} alt={'upload profile'} height={98} width={98} className="rounded-full" priority />
                                            </div>
                                            <div className="flex items-center gap-2 mt-2">
                                                <Button className="text-xs w-10 h-6" variant={'outline'}>
                                                    Edit
                                                </Button>
                                                <Button className="text-xs w-14 h-6" variant={'outline'}>
                                                    Delete
                                                </Button>
                                            </div>

                                        </div>
                                        <div className="flex items-center w-full gap-5">
                                            <div className="grid w-full max-w-sm items-center gap-1.5 ">
                                                <Label >Full Name</Label>
                                                <Input
                                                    type="text"
                                                    id="fullName"
                                                    placeholder="Full Name"
                                                    value={state.name}
                                                    onChange={(e: any) => {
                                                        dispatch({
                                                            type: 'nameChange',
                                                            value: e.target.value
                                                        });
                                                    }}
                                                />
                                            </div>
                                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                                <Label >Email</Label>
                                                <Input
                                                    type="email"
                                                    id="email"
                                                    placeholder="Email"
                                                    value={state.email}
                                                    onChange={(e: any) => {
                                                        dispatch({
                                                            type: 'emailChange',
                                                            value: e.target.value
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-6 flex items-center justify-between">
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label>Mobile</Label>
                                            <Input
                                                type="tel"
                                                id="mobile"
                                                placeholder="Mobile"
                                                value={state?.mobile}
                                                onChange={(e: any) => {
                                                    dispatch({
                                                        type: 'mobileChange',
                                                        value: e.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label >Date of Birth</Label>
                                            <Input
                                                type="date"
                                                id="dob"
                                                placeholder=""
                                                value={state?.dob}
                                                onChange={(e: any) => {
                                                    dispatch({
                                                        type: 'dobChange',
                                                        value: e.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label >Gender</Label>
                                            <Select onValueChange={(e: any) => {
                                                console.log(e);
                                                dispatch({
                                                    type: 'genderChange',
                                                    value: e
                                                });
                                            }}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="male">Male</SelectItem>
                                                        <SelectItem value="female">Female</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6 w-full">
                                        <div className="grid w-full gap-1.5">
                                            <Label>Profile Summary</Label>
                                            <Textarea
                                                id="message"
                                                value={state?.summary}
                                                onChange={(e: any) => {
                                                    dispatch({
                                                        type: 'summaryChange',
                                                        value: e.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="grid w-full max-w-full items-center gap-1.5">
                                            <Label >Skills</Label>
                                            <Input type="text" id="skills" placeholder="" />
                                        </div>
                                        <div className="grid w-full max-w-full items-center gap-1.5">
                                            <Label>Work link/Portfolio</Label>
                                            <Input type="text" id="workLink" placeholder="" />
                                        </div>
                                        <div className="grid w-full max-w-full items-center gap-1.5">
                                            <Label >Social Profile URL</Label>
                                            <Input type="text" id="profileURL" placeholder="" />
                                        </div>

                                    </div>
                                    <div className="my-6 flex items-center justify-between">
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label >Current Salary</Label>
                                            <Input
                                                type="number"
                                                id="currentSalary"
                                                placeholder=""
                                                value={state?.currentSalary}
                                                onChange={(e: any) => {
                                                    dispatch({
                                                        type: 'currentSalaryChange',
                                                        value: e.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label >Salary Currency</Label>
                                            <Select onValueChange={(e: any) => {
                                                dispatch({
                                                    type: 'salaryCurrencyChange',
                                                    value: e
                                                });
                                            }}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="inr">INR</SelectItem>
                                                        <SelectItem value="usd">USD</SelectItem>
                                                        <SelectItem value="eur">EUR</SelectItem>
                                                        <SelectItem value="jyp">JYP</SelectItem>
                                                        <SelectItem value="gbp">GBP</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label >Expected Salary</Label>
                                            <Input type="number" id="expectedSalary" placeholder=""
                                                value={state?.expected_salary}
                                                onChange={(e: any) => {
                                                    dispatch({
                                                        type: 'expectedSalaryChange',
                                                        value: e.target.value
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="my-6 flex items-center justify-between gap-3">
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label >Notice Period (Days)</Label>
                                            <Input type="number" id="currentSalary" placeholder=""
                                                value={state?.notice_period}
                                                onChange={(e: any) => {
                                                    dispatch({
                                                        type: 'noticePeriodChange',
                                                        value: e.target.value
                                                    });
                                                }} />
                                        </div>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label >Current Company</Label>
                                            <Input type="text" id="currency" placeholder=""
                                                value={state?.current_company}
                                                onChange={(e: any) => {
                                                    dispatch({
                                                        type: 'companyChange',
                                                        value: e.target.value
                                                    });
                                                }} />
                                        </div>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label >Total Experience(Years)</Label>
                                            <Input type="number" id="expectedSalary" placeholder=""
                                                value={state?.total_experience}
                                                onChange={(e: any) => {
                                                    dispatch({
                                                        type: 'totalExperienceChange',
                                                        value: e.target.value
                                                    });
                                                }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="flex-none flex">Current Location</p>
                                            <div className="w-full h-0 border-t"></div>
                                        </div>
                                        <div className="my-6 flex items-center justify-between">
                                            <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                                                <Label >Country</Label>
                                                <Select onValueChange={(e: any) => {
                                                    dispatch({
                                                        type: 'currentLocChange',
                                                        value: {
                                                            ...state.current_location,
                                                            country: e
                                                        }
                                                    });
                                                }}>
                                                    <SelectTrigger className="w-100">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="IND">INDIA</SelectItem>
                                                            <SelectItem value="USD">America</SelectItem>
                                                            <SelectItem value="EUR">EUROPE</SelectItem>
                                                            <SelectItem value="WI">WEST INDIA</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                                                <Label >State</Label>
                                                <Select onValueChange={(e: any) => {
                                                    dispatch({
                                                        type: 'currentLocChange',
                                                        value: {
                                                            ...state.current_location,
                                                            state: e
                                                        }
                                                    });
                                                }}>
                                                    <SelectTrigger className="w-100">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="HR">Haryana</SelectItem>
                                                            <SelectItem value="DL">Delhi</SelectItem>
                                                            <SelectItem value="UP">Uttar Pardesh</SelectItem>
                                                            <SelectItem value="CH">Chandigarh</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid w-[210px] max-w-[210px]  items-center gap-1.5">
                                                <Label >City</Label>
                                                <Input type="text" id="expectedSalary" placeholder=""
                                                    onChange={(e: any) => {
                                                        dispatch({
                                                            type: 'currentLocChange',
                                                            value: {
                                                                ...state.current_location,
                                                                city: e.target.value
                                                            }
                                                        });
                                                    }} />
                                            </div>
                                            <div className="grid w-[210px] max-w-[210px]  items-center gap-1.5">
                                                <Label >Pincode</Label>
                                                <Input type="number" id="expectedSalary" placeholder=""
                                                    onChange={(e: any) => {
                                                        dispatch({
                                                            type: 'currentLocChange',
                                                            value: {
                                                                ...state.current_location,
                                                                pincode: e.target.value
                                                            }
                                                        });
                                                    }} />
                                            </div>
                                        </div>
                                        <div className="grid w-full gap-1.5">
                                            <Label >Address</Label>
                                            <Textarea id="address"
                                                onChange={(e: any) => {
                                                    dispatch({
                                                        type: 'currentLocChange',
                                                        value: {
                                                            ...state.current_location,
                                                            address: e.target.value
                                                        }
                                                    });
                                                }} />
                                        </div>
                                    </div>
                                    <div className="my-6">
                                        <div className="flex items-center gap-2">
                                            <p className="flex-none flex">Prefered Location</p>
                                            <div className="w-full h-0 border-t"></div>
                                        </div>
                                        <div className="my-6 flex items-center justify-between">
                                            <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                                                <Label >Country</Label>
                                                <Select onValueChange={(e: any) => {
                                                    dispatch({
                                                        type: 'prefferedLocChange',
                                                        value: {
                                                            ...state.preffered_location,
                                                            country: e
                                                        }
                                                    });
                                                }}>
                                                    <SelectTrigger className="w-100">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="IND">INDIA</SelectItem>
                                                            <SelectItem value="USD">America</SelectItem>
                                                            <SelectItem value="EUR">EUROPE</SelectItem>
                                                            <SelectItem value="WI">WEST INDIA</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                                                <Label >State</Label>
                                                <Select onValueChange={(e: any) => {
                                                    dispatch({
                                                        type: 'prefferedLocChange',
                                                        value: {
                                                            ...state.preffered_location,
                                                            state: e
                                                        }
                                                    });
                                                }}>
                                                    <SelectTrigger className="w-100">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="HR">Haryana</SelectItem>
                                                            <SelectItem value="DL">Delhi</SelectItem>
                                                            <SelectItem value="UP">Uttar Pardesh</SelectItem>
                                                            <SelectItem value="CH">Chandigarh</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid w-[210px] max-w-[210px]  items-center gap-1.5">
                                                <Label >City</Label>
                                                <Input type="text" id="expectedSalary" placeholder=""
                                                    onChange={(e: any) => {
                                                        dispatch({
                                                            type: 'prefferedLocChange',
                                                            value: {
                                                                ...state.preffered_location,
                                                                city: e.target.value
                                                            }
                                                        });
                                                    }} />
                                            </div>
                                            <div className="grid w-[210px] max-w-[210px]  items-center gap-1.5">
                                                <Label >Pincode</Label>
                                                <Input type="number" id="expectedSalary" placeholder=""
                                                    onChange={(e: any) => {
                                                        dispatch({
                                                            type: 'prefferedLocChange',
                                                            value: {
                                                                ...state.preffered_location,
                                                                pincode: e.target.value
                                                            }
                                                        });
                                                    }} />
                                            </div>
                                        </div>
                                        <div className="grid w-full gap-1.5">
                                            <Label >Address</Label>
                                            <Textarea id="address"
                                                onChange={(e: any) => {
                                                    dispatch({
                                                        type: 'prefferedLocChange',
                                                        value: {
                                                            ...state.preffered_location,
                                                            address: e.target.value
                                                        }
                                                    });
                                                }} />
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center justify-end">
                                        <Button onClick={() => {
                                            console.log(state);

                                        }} className={` text-xs rounded-[3px] bg-white border-[#0a66c2]`} variant={'outline'}>
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        activeTab === "resume" && (
                            <div className="my-6">
                                <div className="flex w-full max-w-full items-center justify-between">
                                    <Label htmlFor="picture" className="flex flex-none">File Name:</Label>
                                    <Input id="picture" type="file" className="w-fit" />
                                </div>

                            </div>
                        )
                    }

                    {
                        activeTab === "qualifications" && (
                            <div>
                                {/* Education Field */}

                                <div className="my-6">
                                    <div className="flex items-end justify-between">
                                        <p className="text-xs font-semibold text-[#383838] flex align-bottom">Education</p>

                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button onClick={() => { setNewData(initialNewData) }} className={` text-xs rounded-[3px] bg-[#0a66c2] text-white`} variant={'outline'}>
                                                    New
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[800px]">
                                                <DialogHeader>
                                                    <DialogTitle>Add Education</DialogTitle>
                                                </DialogHeader>
                                                <div className="grid grid-cols-2 justify-between gap-y-6 gap-x-4  py-4">
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >Institution</Label>
                                                        <Input type="text" id="institution" placeholder="Enter Institution"
                                                            value={newData?.education_history?.institution}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, education_history: { ...newData?.education_history, institution: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label>Board</Label>
                                                        <Input type="text" id="board" placeholder="Enter Board"
                                                            value={newData?.education_history?.board}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, education_history: { ...newData?.education_history, board: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >Degree</Label>
                                                        <Input type="text" id="degree" placeholder="Enter Degree"
                                                            value={newData?.education_history?.degree}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, education_history: { ...newData?.education_history, degree: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >Stream</Label>
                                                        <Input type="text" id="stream" placeholder="Enter Stream"
                                                            value={newData?.education_history?.stream}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, education_history: { ...newData?.education_history, stream: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >State</Label>
                                                        <Input type="text" id="state" placeholder="Enter State"
                                                            value={newData?.education_history?.state}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, education_history: { ...newData?.education_history, state: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >City</Label>
                                                        <Input type="text" id="city" placeholder="Enter City"
                                                            value={newData?.education_history?.city}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, education_history: { ...newData?.education_history, city: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >Start Date</Label>
                                                        <Input type="date" id="startDate" placeholder=""
                                                            value={newData?.education_history?.startDate}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, education_history: { ...newData?.education_history, startDate: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >End Date</Label>
                                                        <Input type="date" id="endDate" placeholder=""
                                                            value={newData?.education_history?.endDate}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, education_history: { ...newData?.education_history, endDate: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <div className="flex w-full justify-between">
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms" />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                Accept terms and conditions
                                                            </label>
                                                        </div>
                                                        <Button type="submit"
                                                            onClick={() => {
                                                                dispatchQualificationTable({
                                                                    type: 'educationChange',
                                                                    value: { ...newData?.education_history }
                                                                });
                                                            }}
                                                            className="bg-[#0a66c2] text-white text-xs ">Save</Button>
                                                    </div>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>

                                    </div>
                                    <div className="my-6">
                                        <Table>
                                            <TableHeader className="bg-[#f8f8f8]">
                                                <TableRow>
                                                    {
                                                        educationTableHeader?.map((el, index) => {
                                                            return (
                                                                <>
                                                                    <TableHead key={`educationtableHeader${index}`} className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">{el?.header}</TableHead>

                                                                </>
                                                            )
                                                        })
                                                    }

                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {qualificationTable?.education_history?.length > 0 &&
                                                    qualificationTable?.education_history?.map((item: any, index: any) => (
                                                        <TableRow key={`eduTable${index}`}>
                                                            <TableCell className="text-left">{item?.institution}</TableCell>
                                                            <TableCell className="text-left">{item?.board}</TableCell>
                                                            <TableCell className="text-left">{item?.degree}</TableCell>
                                                            <TableCell className="text-left">{item?.stream}</TableCell>
                                                            <TableCell className="text-left">{item?.state}</TableCell>
                                                            <TableCell className="text-left">{item?.city}</TableCell>
                                                            <TableCell className="text-left">{item?.startDate}</TableCell>
                                                            <TableCell className="text-left">{item?.endDate}</TableCell>
                                                            <TableCell className="text-left"></TableCell>
                                                        </TableRow>
                                                    ))}
                                            </TableBody>
                                        </Table>

                                    </div>
                                </div>

                                {/* Employment History Field */}
                                <div className="my-6">
                                    <div className="flex items-end justify-between ">
                                        <p className="text-xs font-semibold text-[#383838] flex align-bottom">Employment History</p>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button onClick={() => { setNewData(initialNewData) }} className={` text-xs rounded-[3px] bg-[#0a66c2] text-white`} variant={'outline'}>
                                                    New
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[700px]">
                                                <DialogHeader>
                                                    <DialogTitle>Add Employment</DialogTitle>

                                                </DialogHeader>
                                                <div className="grid grid-cols-2 justify-between gap-x-4 pt-4">
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >Organization</Label>
                                                        <Input type="text" id="organization" placeholder="Enter Organization"
                                                            value={newData?.employment_history?.organization}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, employment_history: { ...newData?.employment_history, organization: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >Designation</Label>
                                                        <Input type="text" id="designation" placeholder="Enter Designation"
                                                            value={newData?.employment_history?.designation}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, employment_history: { ...newData?.employment_history, designation: e.target.value } })
                                                            }}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="w-full flex flex-col gap-6">
                                                    <div className="grid w-full max-w-full  items-center gap-1.5">
                                                        <Label >Roles & Responsibilities</Label>
                                                        <Textarea id="roles" className="h-72"
                                                            value={newData?.employment_history?.roles}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, employment_history: { ...newData?.employment_history, roles: e.target.value } })
                                                            }}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="grid grid-cols-2 justify-between gap-x-4 gap-y-6 pt-4">
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >State</Label>
                                                        <Input type="text" id="state" placeholder="Enter State"
                                                            value={newData?.employment_history?.state}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, employment_history: { ...newData?.employment_history, state: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >City</Label>
                                                        <Input type="text" id="city" placeholder="Enter City"
                                                            value={newData?.employment_history?.city}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, employment_history: { ...newData?.employment_history, city: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >Start Date</Label>
                                                        <Input type="date" id="startDate" placeholder="Enter Institution"
                                                            value={newData?.employment_history?.startDate}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, employment_history: { ...newData?.employment_history, startDate: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >End Date</Label>
                                                        <Input type="date" id="endDate" placeholder="Enter Board"
                                                            value={newData?.employment_history?.endDate}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, employment_history: { ...newData?.employment_history, endDate: e.target.value } })
                                                            }}
                                                        />
                                                    </div>

                                                </div>
                                                <DialogFooter>
                                                    <div className="flex w-full justify-between">
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="terms" />
                                                            <label
                                                                htmlFor="terms"
                                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                Accept terms and conditions
                                                            </label>
                                                        </div>
                                                        <Button type="submit" className="bg-[#0a66c2] text-white text-xs "
                                                            onClick={() => {
                                                                dispatchQualificationTable({
                                                                    type: 'employmentChange',
                                                                    value: { ...newData?.employment_history }
                                                                });
                                                            }}
                                                        >Save</Button>
                                                    </div>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </div>

                                    <div className="my-6">
                                        <Table>
                                            <TableHeader>

                                                <TableRow className="bg-[#f8f8f8]">
                                                    <TableHead className="w-[210px] text-sm text-[#383838] font-semibold text-left px-[18px] my-3">Organization</TableHead>
                                                    <TableHead className="w-[210px] text-sm text-[#383838] font-semibold text-left px-[18px] my-3">Designation</TableHead>
                                                    <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">State</TableHead>
                                                    <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">City</TableHead>
                                                    <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">Start Date</TableHead>
                                                    <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">End Date</TableHead>
                                                    <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">Presently Working</TableHead>
                                                    <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">Role</TableHead>
                                                    <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">Actions</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {qualificationTable?.education_history?.length > 0 &&
                                                    qualificationTable?.education_history?.map((item: any, index: any) => (
                                                        <TableRow key={`eduTable${index}`}>
                                                            <TableCell className="text-left">{item?.organization}</TableCell>
                                                            <TableCell className="text-left">{item?.designation}</TableCell>
                                                            <TableCell className="text-left">{item?.roles}</TableCell>
                                                            <TableCell className="text-left">{item?.state}</TableCell>
                                                            <TableCell className="text-left">{item?.city}</TableCell>
                                                            <TableCell className="text-left">{item?.startDate}</TableCell>
                                                            <TableCell className="text-left">{item?.endDate}</TableCell>
                                                            <TableCell className="text-left"></TableCell>
                                                        </TableRow>
                                                    ))}
                                            </TableBody>
                                        </Table>

                                    </div>
                                </div>

                                {/* Certificates Field */}
                                <div className="my-6">
                                    <div className="flex items-end justify-between ">
                                        <p className="text-xs font-semibold text-[#383838] flex align-bottom">Certificates</p>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button onClick={() => { setNewData(initialNewData) }} className={` text-xs rounded-[3px] bg-[#0a66c2] text-white`} variant={'outline'}>
                                                    New
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[488px]">
                                                <DialogHeader>
                                                    <DialogTitle>Add Certificate</DialogTitle>

                                                </DialogHeader>
                                                <div className="grid grid-cols-2 justify-between gap-x-4 pt-4">
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label >Organization</Label>
                                                        <Input type="text" id="institution" placeholder="Enter Institution"
                                                            value={newData?.certificate_history?.institution}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, certificate_history: { ...newData?.certificate_history, institution: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-sm  items-center gap-1.5">
                                                        <Label>Issue Date</Label>
                                                        <Input type="text" id="board" placeholder="Enter Board"
                                                            value={newData?.certificate_history?.board}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, certificate_history: { ...newData?.certificate_history, board: e.target.value } })
                                                            }}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="w-full flex flex-col gap-6">
                                                    <div className="grid w-full max-w-full  items-center gap-1.5">
                                                        <Label >Certificate Id</Label>
                                                        <Input type="text" id="degree" placeholder="Enter Degree"
                                                            value={newData?.certificate_history?.degree}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, certificate_history: { ...newData?.certificate_history, degree: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="grid w-full max-w-full  items-center gap-1.5">
                                                        <Label >Certificate Title</Label>
                                                        <Input type="text" id="stream" placeholder="Enter Stream"
                                                            value={newData?.certificate_history?.stream}
                                                            onChange={(e: any) => {
                                                                setNewData({ ...newData, certificate_history: { ...newData?.certificate_history, stream: e.target.value } })
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <div className="flex w-full justify-end">
                                                        <Button type="submit" className="bg-[#0a66c2] text-white text-xs "
                                                            onClick={() => {
                                                                dispatchQualificationTable({
                                                                    type: 'certificateChange',
                                                                    value: { ...newData?.certificate_history }
                                                                });
                                                            }}
                                                        >Save</Button>
                                                    </div>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </div>

                                    <div className="my-6">
                                        <Table>
                                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                                            <TableHeader>

                                                <TableRow className="bg-[#f8f8f8]">
                                                    <TableHead className="w-[310px] text-sm text-[#383838] font-semibold text-left px-[18px] my-3">Title</TableHead>
                                                    <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">Issue Date</TableHead>
                                                    <TableHead className="w-[310px] text-sm text-[#383838] font-semibold text-left px-[18px] my-3">Organization</TableHead>
                                                    <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">Certificate ID</TableHead>
                                                    <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">Actions</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {qualificationTable?.education_history?.length > 0 &&
                                                    qualificationTable?.education_history?.map((item: any, index: any) => (
                                                        <TableRow key={`eduTable${index}`}>
                                                            <TableCell className="text-left">{item?.institution}</TableCell>
                                                            <TableCell className="text-left">{item?.board}</TableCell>
                                                            <TableCell className="text-left">{item?.degree}</TableCell>
                                                            <TableCell className="text-left">{item?.stream}</TableCell>
                                                            <TableCell className="text-left"></TableCell>
                                                        </TableRow>
                                                    ))}
                                            </TableBody>
                                        </Table>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </main>
    )
}