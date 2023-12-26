'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} realtive z-10`}>
    <motion.div
        variant={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
        <TypingText title="| People on the World" />
        <TitleText 
            title={(
            <>Track friends around you and invite them to play together in the same
                world
            </>
            )}
            textStyles="text-center" 
        />
    </motion.div>
  </section>
);

export default World;
