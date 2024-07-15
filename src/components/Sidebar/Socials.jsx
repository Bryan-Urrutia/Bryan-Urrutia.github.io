'use client'

import Link from 'next/link'
import {
    RiYoutubeFill,
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookBoxFill,
    RiInstagramFill
} from 'react-icons/ri'

const icons = [
    { path: '/', name: <RiLinkedinFill /> },
    { path: '/', name: <RiGithubFill /> },
    { path: '/', name: <RiInstagramFill /> },
]

const Socials = ({ containerStyles, iconsStyles }) => {
    return <div className={`${containerStyles}`}>
        {icons.map((icon, index) => {
            return <Link key={index} href={icon.path}>
                <div className={`${iconsStyles} p-2`}>{icon.name}</div>
            </Link>
        })}
    </div>
}

export default Socials