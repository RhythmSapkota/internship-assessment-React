import React from 'react'
import { apiInstance } from '../utils/axiosInstance';
const Members = () => {
    React.useEffect(()=>{
apiInstance.get("members").then((response)=>{
    console.log(response.data)
})
    },[])
  return (
    <div>Members</div>
  )
}

export default Members