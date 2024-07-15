'use client'

import {
    RiLinkedinFill,
} from 'react-icons/ri'
import { Calendar, Mail, MapPin, Smartphone } from 'lucide-react'

const data = [
    { icon: <Smartphone size={20} />, title: 'Teléfono', content: '+56920374823' },
    { icon: <MapPin size={20}/>, title: 'Domicilio', content: 'Los Jesuitas #693, Quilicura' },
    { icon: <Mail size={20}/>, title: 'Correo', content: 'bryan.urrutia.urzua5@gmail.com' },
    { icon: <Calendar size={20} />, title: 'Cumpleaños', content: '05 de Julio de 1998' },
]

const Info = ({ containerStyles, iconsStyles }) => {
    return <div className={`${containerStyles}`}>
        {data.map((item, index) => {
            return <div key={index} className={`flex items-center py-1.5 ${index !== data.length - 1 && 'border-b'}  border-primary`}>
                <span className={`${iconsStyles}`}>
                    {item.icon}
                </span>
                <div className="text-left ml-2.5 truncate overflow-hidden">
                    <p className="text-base font-semibold text-primary">{item.title}</p>
                    <p className="dark:text-white break-all">
                    {item.title === "Teléfono" || item.title === "Correo"
                        ? <a className="hover:text-primary duration-300 transition text-sm truncate"
                            href={
                                item.title === 'Teléfono'
                                    ? `tel:${item.content}`
                                    : item.title === 'Correo'
                                    ? `mailto:${item.content}`
                                    : ''
                            }
                        >
                            {item.content}
                        </a>
                        : <span className="transition text-sm truncate">
                            {item.content}
                        </span>
                    }
                    </p>
                </div>
            </div>
        })}
    </div>
}

export default Info