import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

export const getAllCars= async()=>{
    //return the response to five,seven and luxurious components

return await commonAPI('GET', `${serverURL}/cardetails`,"")

}
//Add booking details
export const addDetails= async(reqBody)=>{
    //return the response to booking.jsx component
    return await commonAPI('POST',`${serverURL}/bookingdetails`,reqBody)
  }
  //API to get booking details from json-server
export const getAllHistory= async()=>{
    return await commonAPI('GET',`${serverURL}/bookingdetails`,"")
    }
    //api call to delete booking history
export const deleteCarHistory= async(id)=>{
    return await commonAPI('DELETE', `${serverURL}/bookingdetails/${id}`,{})
    
    }
    //api to update the booking details
    //  export const updateDetails=async(id, body)=>{
    //     return await commonAPI('PUT', `${serverURL}/bookingdetails/${id}`,body)
    //   }
      export const updatebook = async(id,body)=>{
        return await commonAPI('PUT',`${serverURL}/bookingdetails/${id}`,body)
  }