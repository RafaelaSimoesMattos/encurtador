
import './menu.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
            <Link to="/links" className="menu-item">
                Meus Links
            </Link>
    )
}
