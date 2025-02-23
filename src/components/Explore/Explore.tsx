'use client'

import { motion } from "framer-motion"
import { slideUp, slideBottom } from "@/utility/animation"
import Image from "next/image"
const Explore = () => {
  const img1 = '/assets/1.jpg'
  const img2 = '/assets/2.jpg'
  const img3 = '/assets/3.jpg'

  interface ExploreData {
    id: number;
    img: string;
    title: string;
    place: string;
    url: string;
    delay: number;
  }

  const exploreData : ExploreData[] = [
    {
        id: 1,
        img: img1,
        title: 'Sea of Krabi',
        place: 'Krabi',
        url: '#',
        delay: 0.2
    },
    {
        id: 2,
        img: img2,
        title: 'Canyon of Ubon',
        place: 'Ubon',
        url: '#',
        delay: 0.3
    },
    {
        id: 3,
        img: img3,
        title: 'Lekes of Phuket',
        place: 'Phuket',
        url: '#',
        delay: 0.4
    }
  ]

  return (
    <>
        <section className="container py-8 space-y-6" id="explore">
            {/* header section */}
            <motion.div
            initial={{ opacity: 0, x:100 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{
                delay: 0.2, duration:0.5
            }}
            className="text-center md:max-w-[650px] mx-auto space-y-4">
                <h1 className="text-2xl md:text-4xl">Explore the world</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sunt odit fugit atque obcaecati iure!</p>
            </motion.div>

            {/* card section  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            place-items-center gap-4 xl:px-14">
                {
                    exploreData.map((item)=>(
                        <motion.div 
                        variants={slideUp(item.delay)}
                        initial="hidden"
                        animate="visible"
                        whileHover={{
                            scale:1.1,
                            transition:{
                                duration:0.5, ease:"easeInOut"
                            }
                        }}
                        key={item.id} className="relative hover:scale-110 transition-transform duration-500">
                            <Image 
                                src={item.img}
                                className="object-cover h-[550px] w-[380px]"
                                alt="img"
                                width={400}
                                height={400}
                            />
                            <div className="absolute w-full bottom-0 inset-0 bg-brandDark/15">
                                <div className="h-full space-y-1 flex flex-col justify-end items-center">
                                    <div className="flex flex-col items-center p-4 bg-black bg-opacity-50 backdrop-blur-sm w-full">
                                        <h3 className="text-2xl tracking-wider">{item.title}</h3>
                                        <h3 className="uppercase tracking-wider">{item.place}</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div> 
                        
                        
                    ))
                }


            </div>
            {/* section button */}
            <motion.button
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:1.5, duration:1.5 }}
                className="block mx-auto mt-6 font-bold"
                >
                    ดูเพิ่มเติม
            </motion.button>
        </section>
    </>
  )
}
export default Explore