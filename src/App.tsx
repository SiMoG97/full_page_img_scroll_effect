import { useEffect, useRef } from "react";
import styles from "./content.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
// Images import
import img1 from "/img1.jpg";
import img2 from "/img2.jpg";
import img3 from "/img3.jpg";
import img4 from "/img4.jpg";
import img5 from "/img5.jpg";
import img6 from "/img6.jpg";
import img7 from "/img7.jpg";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  // console.log(scrollXProgress);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const images = [
    {
      src: img1,
      scale: scale4,
    },
    {
      src: img2,
      scale: scale7,
    },
    {
      src: img3,
      scale: scale6,
    },
    {
      src: img4,
      scale: scale5,
    },
    {
      src: img5,
      scale: scale8,
    },
    {
      src: img6,
      scale: scale7,
    },
    {
      src: img7,
      scale: scale9,
    },
  ];

  return (
    <>
      <main className={styles.main}>
        <div ref={container} className={styles.wrapper}>
          <div className={styles.stickyEl}>
            {images.map(({ scale, src }, i) => (
              <motion.div
                key={`${i}ZooomImg`}
                style={{ scale }}
                className={styles.imgWrapper}
              >
                <figure>
                  <img src={src} alt="image" />
                </figure>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
