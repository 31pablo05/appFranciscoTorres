import { motion } from "framer-motion";

const ImagenColumna = () => (
  <motion.img
    src="assets/webp/espalda-2.webp"
    alt="Columna Vertebral"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="w-full h-72 sm:h-96 md:h-[1000px] lg:h-[1100px] object-fill drop-shadow-xl rounded-[20px]"
    whileHover={{ scale: 1.07 }}
    style={{}}
  />
);

export default ImagenColumna;
