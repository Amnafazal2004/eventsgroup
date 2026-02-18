"use client"

import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"
import Header from "@/components/Header";

const Navbar = () => {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
    return (
        <div>
            <div>
                <motion.header
                    className="header"
                    animate={{
                        y: hidden ? -140 : 0,
                        opacity: hidden ? 0 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <Header />
                </motion.header>
            </div>
        </div>
    )
}

export default Navbar
