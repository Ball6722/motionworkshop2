'use client'
import { motion } from "framer-motion"
const Footer = () => {
  const ftbg = {
    backgroundImage: "url('/assets/footer1.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }
  return (
    <>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity:1 }}
        transition={{
            duration: 1, delay:0.7
        }} 
        style={ftbg}
        className="h-[250px] md:h-[800px] w-full mt-14 bg-brandDark relative"
        >
            <div
            style={{
                background:"radial-gradient(circle, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3)) 70%, rgba(0,0,0,0.5)) 900%"
            }} 
            className="absolute inset-0 bg-gradient-redial 
            from-transparent via-black/50 to-black z-10 " />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full
            bg-white/10 backdrop-blur-sm rounded  px-6 py-3">
                <p className="text-center text-sm sm:text-md md:text-lg lg:text-2xl">&copy; 2025 Traval Motion All right reserved | The coding Journal</p>
            </div>
        </motion.div>
    </>
  )
}
export default Footer