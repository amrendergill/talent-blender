// import { useState } from "react";
 
interface IProps {
  firstName: any;
  url: string;
  fileName?: string;
  style?: any;
  className?: string;
}
 
const DefaultInitial = (props: IProps) => {
  let show = false
  // const [show, setShow] = useState(false);
  const name = props?.firstName?.split(" ");
  return (
    <>
      {props?.url && !show ? (
        <img
          className={`${props?.className ?? "mx-3"}`}
          style={
            props?.style ?? {
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              minWidth: "45px",
              minHeight: "45px",
            }
          }
          src={props?.url}
          alt={props?.fileName ?? ""}
          onError={(err) => {
            show =true;
          }}
        />
      ) : (
        <div
          className={`bg-[#0472f4] text-white text-center font_medium flex justify-center items-center mr-3`}
          style={
            props?.style ?? {
              fontSize: "18px",
              lineHeight: "30px",
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              minWidth: "45px",
              minHeight: "45px",
            }
          }
        >
          {name?.length > 0 && name[0]?.trim()?.[0]?.toUpperCase()}
          {name?.length > 1 && name[1]?.trim()?.[0]?.toUpperCase()}
        </div>
      )}
    </>
  );
};
 
export default DefaultInitial;