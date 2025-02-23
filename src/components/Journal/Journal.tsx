'use client'
import { motion } from "framer-motion"
import Image from "next/image"
const Journal = () => {
  const Img5 = '/assets/5.jpg';
  const Img6 = '/assets/6.jpg';

  interface JournalData {
    id: number;
    img: string;
    title: string;
    about: string;
    date: string;
    url: string;
    delay: number;
  }

  const journalData : JournalData[] = [
    {
        id:1,
        img: Img5,
        title: 'Canyon of Ubon',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, provident!',
        date: 'May, 22, 2025',
        url: '#',
        delay:1.1
    },
    {
        id:2,
        img: Img6,
        title: 'Sea of Krabi',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, provident!',
        date: 'May, 22, 2025',
        url: '#',
        delay:1.3
    }
  ]
  return (
    <>
        <section className="container mt-24">
            {/* banner section */}
            <motion.div 
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0  }}
            transition={{
                delay: 0.1,
                duration: 0.6
            }}
            className="text-center md:max-w-[650px] mx-auto space-y-4">
                <h1 className="text-2xl md:text-4xl">บันทึกการเดินทาง</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti reiciendis odio aspernatur est maxime.</p>
            </motion.div>
             

            {/* card section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-14 place-items-center">
              {
                journalData.map((item)=>(
                  <motion.div 
                  initial={{ opacity:0, y:50 }}
                  whileInView={{ opacity: 1, y:0 }}
                  whileHover={{
                    scale:1.1,
                    transition: {
                      delay: item.delay,
                      duration:0.5,
                      ease:"easeInOut"
                    }
                  }}
                  key={item.id} className="w-[300px] h-[430px] md:w-[360px] md:h-[440px] lg:h-[460px] lg:w-[460px]
                  xl:w-[540px] xl:h-[400px] overflow-hidden bg-white shadow-lg">
                    <div className="overflow-hidden relative">
                      <Image 
                      src={item.img}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="w-full h-[250px] object-cover"
                      />
                    </div>
                    {/* text section  */}
                    <div className="p-6 text-center space-y-2">
                      <p className="text-sm uppercase text-gray-500">{item.date}</p>
                      <p className="text-xl font-semibold text-gray-800">{item.title}</p>
                      <p className="text-gray-600">{item.about}</p>
                    </div>
                  </motion.div>
                ))
              }
            </div>
            
            <motion.button 
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            transition={{
              delay: 2,
              duration: 1.3
            }}
            className="block mx-auto mt-10 uppercase font-bold">
              all post
            </motion.button>
        </section>
    </>
  )
}
export default Journal