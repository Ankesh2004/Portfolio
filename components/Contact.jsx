import { useInView } from "react-intersection-observer"
import { contacts } from "../data/contact"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"

const Contact = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div id="contact" className={`flex ${isMobile?'flex-col':'flex-row'} mt-[2rem]`}>
        <div className={`${isMobile?'w-[100%':'w-[50%]'} flex flex-col gap-[1rem]`}>
            <h2>Get in Touch</h2>
            <p>Have a project idea? Elevate your vision - Reach Out and Let's Make It Happen. </p>
            {/* <p>Feel free to reach out to me for any queries or collaborations.</p> */}
            <div className="flex flex-row gap-[1rem]">
                {
                    contacts.map((contact) => (
                        <div key={contact.id} className="p-[0.2rem] w-[3rem] bg-white rounded-2xl">
                        <a href={contact.link} >
                            <Image src={contact.icon} alt="contact" width={40} height={40} />
                        </a>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* Contact form  */}
        <div className={`flex flex-col gap-[0.4rem] ${isMobile?'w-[100%]':'w-[50%]'} text-center gap-[1rem]`}>
            <h1>Contact Me</h1>
            <form className="flex flex-col gap-[1rem] items-center text-black">
                <input type="text" placeholder="Name" className="p-[0.5rem] w-[90%] rounded-lg"/>
                <input type="email" placeholder="Email" className="p-[0.5rem] w-[90%] rounded-lg"/>
                <textarea placeholder="Message" className="p-[0.5rem] w-[90%] h-[8rem] rounded-lg"/>
                <button className="p-[0.5rem] bg-[#d64531] w-[8rem] text-white rounded-lg">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact