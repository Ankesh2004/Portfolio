"use client";
import Image from "next/image";
import profilePic from "../../public/profile-pic.jpg"
const Home = () => {
    const handleClick = () => {
        console.log('clicked')
    }
  return (
    <div>
         {/* Profile Picture and CV  */}
        <div className="flex items-center">
            <Image 
            src={profilePic}
            alt="Profile Picture"
            width={100}
            height={100}
            />
        </div>
    </div>
  )
}

export default Home