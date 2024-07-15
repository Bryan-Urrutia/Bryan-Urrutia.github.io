import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion';

const links = [
]

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();
    return (
        <div className={`${containerStyles}`}>
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
                    {link.path == path && (<motion.span
                        initial={{ y: '-180%' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'twenn' }}
                        layoutId='underline'
                        className={`${underlineStyles}`} />)}
                    {link.name}
                </Link>
            })}
        </div>
    )
}

export default Nav