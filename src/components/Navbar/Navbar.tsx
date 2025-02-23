'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { slideBottom } from "@/utility/animation"
const Navbar = () => {
  const Logo = "/assets/logo.png"
  const MotionLink = motion(Link);
  return (
    <>
        <nav className="flex h-20 sm:h-24 md:h-28 w-screen items-center justify-center bg-black bg-opacity-5 backdrop-blur-xs relative z-30 ">
            <div className="container flex items-center justify-around w-full h-full md:text-lg lg:text-2xl">
                <MotionLink
                variants={slideBottom(0)}
                initial="hidden"
                animate="visible"
                whileHover={{
                    scale:1.1,
                    transition: { duration:0.3, ease: "easeInOut" }
                }}
                href={"#"} className="hover:underline">เกี่ยวกับ</MotionLink>
                <MotionLink
                variants={slideBottom(0.2)}
                initial="hidden"
                animate="visible"
                whileHover={{
                    scale:1.1,
                    transition: { duration:0.3, ease: "easeInOut" }
                }}
                href={"#"} className="hover:underline">สำรวจ</MotionLink>
                <MotionLink
                variants={slideBottom(0.3)}
                initial="hidden"
                animate="visible"
                whileHover={{
                    scale:1.1,
                    transition: { duration:0.3, ease: "easeInOut" }
                }}
                rel="preload"
                as="image"
                href={"#"} className="">
                    <Image
                        priority={false}
                        className="w-[60px] sm:w-[70px] md:w-[75px] lg:w-[85px]"
                        src={Logo}
                        alt="Logo"
                        width={100}
                        height={100}
                        
                    />
                </MotionLink>
                <MotionLink
                variants={slideBottom(0.4)}
                initial="hidden"
                animate="visible" 
                whileHover={{
                    scale:1.1,
                    transition: { duration:0.3, ease: "easeInOut" }
                }}
                href={"#"} className="hover:underline">ท่องเที่ยว</MotionLink>
                <MotionLink
                variants={slideBottom(0.5)}
                initial="hidden"
                animate="visible"
                whileHover={{
                    scale:1.1,
                    transition: { duration:0.3, ease: "easeInOut" }
                }}
                href={"#"} className="hover:underline">ค้นหา</MotionLink>
            </div>
        </nav>
    </>
  )
}
export default Navbar