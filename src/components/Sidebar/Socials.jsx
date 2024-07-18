'use client'

import Link from 'next/link'
import {
    RiLinkedinFill,
    RiGithubFill,
    RiYoutubeFill,
    RiFacebookBoxFill,
    RiInstagramFill
} from 'react-icons/ri'

const icons = [
    { path: 'https://www.linkedin.com/in/bryan-urrutia-36b57a257', name: <RiLinkedinFill /> },
    { path: 'https://github.com/Bryan-Urrutia', name: <RiGithubFill /> },
]

const Socials = ({ containerStyles, iconsStyles }) => {
    return <div className={`${containerStyles}`}>
        {icons.map((icon, index) => {
            return <Link key={index} href={icon.path} target='_blank'>
                <div className={`${iconsStyles} p-2`}>{icon.name}</div>
            </Link>
        })}
    </div>
}

export default Socials