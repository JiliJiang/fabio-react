// This is a static page mocking an "About Us" section for our fake user data


import projectImage1 from '../imgs/background.jpg'
import projectImage2 from '../imgs/background1.jpg'
import projectImage3 from '../imgs/background2.jpg'

export default function ProjectsPage() {

const projects = [
  {
    id: 1,
    title: 'Project 1',
    decription: 'This is a project using javascript',
    image: projectImage1,
    github:'https://github.com',
    deployed:'https://google.com',

  },
  {
    id: 2,
    title: 'Project 2',
    decription: 'This is a project using html',
    image: projectImage2,
    github:'https://github.com',
    deployed:'https://google.com',

  },
  {
    id: 2,
    title: 'Project 2',
    decription: 'This is a project using css',
    image: projectImage3,
    github:'https://github.com',
    deployed:'https://google.com',

  },



];


const titleStyle={
  color:'green',
  fontFamily:'Arial',
  fontWeight:'bold',
  fontSize:'30px',
  textAlign:'center'

}

  return (
    <div className="container pt-4">
      <h3 style={titleStyle}>
        Here are some of my projects I've worked on recently:
      </h3>

      <ul>

{projects.map(p =>{ return <li key={p.id}>
  {p.title}<br/>
  {p.decription}<br/>
<img src={p.image} style={{height:"200px", width:"300px", backgroundColor:"purple"}}/><br/>
  <a href={p.github} target="_blank" rel="noopener noreferrer">Github</a><br/>
  <a href={p.deployed} target="_blank" rel="noopener noreferrer">Deployed</a><br/>


</li>})}

      </ul>


      
    </div>
  );
}
