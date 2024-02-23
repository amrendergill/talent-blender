import axios from "axios";

export function getStrapiURL(path = "") {
  return `${"https://appsierra-backend.xyz"}${path}`;
}

const axiosInstanceCareer = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || `http://localhost:1337/api/`,
  baseURL:
    process.env.NEXT_PUBLIC_CAREER_URL || `https://core-dev.pitchnhire.com`,
  headers: {
    "Content-Type": "application/json",
    "x-sitename": "careers.pitchnhire.com",
  },
});

class AppService {
  async getJob(
    page:any ="1",
    pageSize:any ="12",
    location: any="",
    department: any="",
    types: any ="",
    city: any ="",
    remote:boolean= false,
    sortBy:any
) {
    const res = await axiosInstanceCareer.get(
      `/careers?page=${page}&page_size=${pageSize}&job_status=published${sortBy?.length>0 && `&days=${sortBy}`}${department && `&department=${department}`}${city && `&city=${city}`}${types && `&job_type==${types}`}${remote ? `&is_remote=true` : ''}`,
    );
    return res
  }
}

export const appService: AppService = new AppService();