// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <>
    <a href="/">Home  </a>
    <a href="/projects">Projects   </a>
    <a href="/about">About   </a>
    
    </>
  );
}
