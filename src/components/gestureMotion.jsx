import {motion} from 'framer-motion'

const GestureMotion = () => {
  return (
    <div>
        <motion.div
        className='box'
        whileHover={{scale:1.2 ,rotate:10}}
        transition={{type:"spring",stiffness:300}}
        drag
        dragConstraints={{
          top: -50,
         left :-50,
          right:50 ,
          bottom:50
        }}
        />

    </div>
  )
}

export default GestureMotion