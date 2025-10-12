import { Mail, MapPin } from 'lucide-react'
import Avatar from '../assets/avatar.jpg'

import './card.css'
import './contact-sidebar.css'

function ContactItem(props : { icon: ReactElement, title: string, value: string }) {
  return (
    <div className="contact-item">
      <props.icon className="contact-item-icon" size={25} />
      <div className="contact-item-content">
        <p className="contact-item-title">{ props.title }</p>
        <p className="contact-item-value">{ props.value }</p>
      </div>
    </div>
  )
}

function ContactDetails(props : { email: string; region: string; githubLink: string; linkedInLink: string }) {
  return (
    <>
      <div className="contact-details">
        <ContactItem icon={Mail} title="CORREO" value={props.email} />
        <ContactItem icon={MapPin} title="UBICACIÓN" value={props.region} />
      </div>
    </>
  )
}

function ContactSidebar(props : { name: string; career: string, email: string, region: string, githubLink: string, linkedInLink: string}) {
  return (
    <sidebar className="sidebar card">
      <img className="avatar" src={Avatar} alt="avatar" />
      <h1 className="sidebar-name">
        {props.name}
      </h1>
      <p className="sidebar-career">
        {props.career}
      </p>
      <ContactDetails 
        email={props.email}
        region={props.region}
      />
    </sidebar>
  )
}

export default ContactSidebar
