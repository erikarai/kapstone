import React, {useState} from 'react'
// import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputtext';
        

function Profile() {
    const[image, setimage] = useState("")
  return (
   <div className='profile_img text-center p-4'>
   <div className='flex flex-column justify-content-center align-items-center'>
    {/* <InputText type="file"
    accept='/file'
    /> */}
   </div>
   </div>

    
  )
}

export default Profile
