export default function CompanyDetails(props:any) {
    return (
        <>
            <div className="my-5">
                <h2 className="text-sm font-bold">Website</h2>
                <p className="text-sm font-bold text-[#0a66c2]">{props.website}</p>
            </div>
            <div className="my-5">
                <h2 className="text-sm font-bold">Industry</h2>
                <p className="text-sm text-gray-600">{props.industry}</p>
            </div>
            <div className="my-5">
                <h2 className="text-sm font-bold">Company size</h2>
                <p className="text-sm text-gray-600">{props.employeeCount} employees</p>
                <p className="text-sm text-gray-600">{props.associatedEmployeeCount} associated employees</p>
            </div>
            <div className="my-5">
                <h2 className="text-sm font-bold">Headquarters</h2>
                <p className="text-sm text-gray-600">{props.headquarters}</p>
            </div>
            <div className="my-5">
                <h2 className="text-sm font-bold">Founded</h2>
                <p className="text-sm text-gray-600">{props.yearFoundedIn}</p>
            </div>
            <div className="my-5">
                <h2 className="text-sm font-bold">Specialities</h2>
                <p className="text-sm text-gray-600">{props.specialities}</p>
            </div>
        </>
    )
}