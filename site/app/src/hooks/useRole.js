import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useRole = () => {

    let location = useLocation()
    // let [role, set_role] = useState('')

    let path = location.pathname.split('/')[1]
    if(path.split('.')[0] === 'admin'){
        return('admin')
    }else{
        return('user')
    }


 
  
     
  
}
 
export default useRole;