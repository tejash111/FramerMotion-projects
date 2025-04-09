import {motion} from "framer-motion"

const AnimatedCard = () => {
  return (
    <motion.div
    initial={{
        scale:1, rotate:0
    }}
    whileHover={{
        scale:1.06 , rotate:3
    }}
    whileTap={{scale:0.95}}
    drag
    dragConstraints={{left:-50,right:50 , top:-50,bottom:50}}
    dragElastic={0.3}
    
    className="max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden cursor-pointer">
        <img  className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1726607102396-548750ce07f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D" alt="img"/>
        <div className="p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2">Card Title</h2>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing lasjfl asljlasjf.</p>
        <button className="text-white rounded px-4 py-2 bg-teal-500 hover:bg-teal-300 transition">Click Me</button>
        </div>
        
        
    </motion.div>
  )
}

export default AnimatedCard