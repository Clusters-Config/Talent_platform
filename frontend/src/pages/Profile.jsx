import React from 'react'

const Profile = () => {
  return (
    <>
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-center mt-10">Profile</h1>
            <div className="flex justify-center items-center mt-10">
            <img src="https://randomuser.me/api/portraits/men/10.jpg" width={`100px`} height={`100px`}/>
            </div>
        </div>
    </>
  )
}

export default Profile;