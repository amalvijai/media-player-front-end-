// Upload a video
import { commonApi } from "./commonApi"
 import  {serverUrl} from  "./serverUrl"

 export const UploadVideo =async(reqBody)=>{
    // call post http request to "http://localhost:4000" to add video to
    //  json server and return response add compoent
    
    return await commonApi("POST",`${serverUrl}/videos`,reqBody);
}

// get all videos from json server

 export const getAllvideo =async ()=>{
    //make get  "http://localhost:4000" get all video from json server to view compontent

    return await commonApi("GET",`${serverUrl}/videos`,"");

 }



 // get a videos from json server

 export const getAvideo =async (id)=>{
    //make get  "http://localhost:4000" get all video from json server to video card

    return await commonApi("GET",`${serverUrl}/videos/${id}`,"");

 }


 // remove videos from json server

 export const deleteVideo =async (id)=>{
    //make get  "http://localhost:4000" get all video from json server to video card

    return await commonApi("DELETE",`${serverUrl}/videos/${id}`,{});

 }

 // store watch history in jsonser

 export const addToHistory = async(videoDetails)=>{

    // make post http request to "http://localhost:4000/history" to add watchhistory to
    // the json server and return response add compoent
   return await commonApi("POST",`${serverUrl}/history`,videoDetails)
 }

 //get all watching video history

 export const getAllHistory = async()=>{
 //make get  "http://localhost:4000/history" get all video watchhistory from json server to watchhistory

 return await commonApi("GET",`${serverUrl}/history`,"")
 }

 //delete all watching video history

 export const deleteHistory = async(id)=>{
   //make delete  "http://localhost:4000/history/id" delete  watchhistory from json server to watchhistory
  
   return await commonApi("DELETE",`${serverUrl}/history/${id}`,{})
   }


// add category to jsonserver
 export const addCategory =async(reqBody)=>{
   // make post http request to "http://localhost:4000" to category video to
   //  json server and return response add compoent
   
   return await commonApi("POST",`${serverUrl}/categories`,reqBody);
}


// Get category to jsonserver
export const getAllCategory =async()=>{
   // make GET http request to "http://localhost:4000" to category video to
   //  json server and return response add compoent
   
   return await commonApi("GET",`${serverUrl}/categories`,"");
}

// Delete category to jsonserver
export const deleteCategory =async(id)=>{
   // make DELETE http request to "http://localhost:4000" to category video to
   //  json server and return response add compoent
   
   return await commonApi("DELETE",`${serverUrl}/categories/${id}`,{});
}

// update category to jsonserver
export const updateCategory =async(id,body)=>{
   // make DELETE http request to "http://localhost:4000" to category video to
   //  json server and return response add compoent
   
   return await commonApi("PUT",`${serverUrl}/categories/${id}`,body);
}

