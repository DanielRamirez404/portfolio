import type { LucideIcon } from 'lucide-react'

import { Mail, MapPin, Github, Linkedin } from 'lucide-react'
import Avatar from '../assets/avatar.jpg'

import './card.css'
import './contact-sidebar.css'

function ContactItem(props : { Icon: LucideIcon, title: string, value: string }) {
  return (
    <div className="contact-item">
      <props.Icon className="contact-item-icon" size={25} />
      <div className="contact-item-content">
        <p className="contact-item-title">{ props.title }</p>
        <p className="contact-item-value">{ props.value }</p>
      </div>
    </div>
  )
}

function SocialIcon(props : { Icon: LucideIcon, link: string }) {
  return (
    <a className="social-icon-link" href={props.link} rel="noopener noreferrer">
      <props.Icon className="social-icon" size={20} /> 
    </a>
  ) 
}

function ContactDetails(props : { email: string; region: string; githubLink: string; linkedInLink: string }) {
  return (
    <>
      <div className="contact-details">
        <ContactItem Icon={Mail} title="CORREO" value={props.email} />
        <ContactItem Icon={MapPin} title="UBICACIÓN" value={props.region} />
      </div>
      <div className="socials-container">
        <SocialIcon Icon={Github} link={props.githubLink} />
        <SocialIcon Icon={Linkedin} link={props.linkedInLink} />
      </div>
    </>
  )
}

function ContactSidebar(props : { name: string; career: string, email: string, region: string, githubLink: string, linkedInLink: string}) {
  return (
    <div className="sidebar card slide-down">
      <img className="avatar slide-down" src={Avatar} alt="avatar" />
      <h1 className="sidebar-name">
        {props.name}
      </h1>
      <p className="sidebar-career">
        {props.career}
      </p>
      <ContactDetails 
        email={props.email}
        region={props.region}
        githubLink={props.githubLink}
        linkedInLink={props.linkedInLink}
      />
    </div>
  )
}

export default ContactSidebar
