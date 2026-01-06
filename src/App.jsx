import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container, Row, Col, Card} from 'react-bootstrap';
import bg from './assets/bg.jpeg';
import me from './assets/me.png';
import cane from "./assets/cane.png";
import cibo  from "./assets/cibo.png";
import shop from "./assets/shop.png";
import meteo from "./assets/meteo.png";


function App() {
  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const projects = [
    {
      id: 1,
      title: "Taily",
      image: cane,
      description: "Designed to facilitate the organization of dog socialization meetups. It will allow users to create compatible canine appointments.",
      link: "https://github.com/Annie470/Taily",
      tech: ["Java", "Spring", "Hibernate", "JavaScript", "React"]
    },
    {
      id: 2,
      title: "Sogno Partenopeo",
      image: cibo,
      description: "Web app for a restaurant, combining customer-facing website with backoffice administrative management system.",
      link: "https://github.com/Annie470/Sogno-Partenopeo",
      tech: ["Typescript", "Javascript", "React", "Java"]
    },
    {
      id: 3,
      title: "Forecast Oracle",
      image: meteo,
      description: "Minimal and animated meteo web app.",
      link: "https://github.com/Annie470/The-Forecast-Oracle",
      tech: ["Javascript", "React"]
    },
    {
      id: 4,
      title: "Zilla Agency",
      image: shop,
      description: "A clean, animated showcase website.",
      link: "https://github.com/Annie470/ZillaAgency",
      tech: ["Javascript", "Sass", "React", "Animations", "CRUD"]
    },
  
  ];

  return (
    <Container fluid className='sup-c min-vh-100'>

        <Row className="w-100 m-0 p-4" style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}>
          <Col xs={7} lg={2}>
            <img src={me} alt="profile photo" className='photo'/>
          </Col>

          <Col lg={8} className="d-none d-lg-block">
            <h1 className='title'>ANNA DE LISE</h1>
            <p>19/11/1994</p>
            <p>Naples, Italy</p>
          </Col>

          <Col lg={12} className="d-none d-lg-block mt-3">
            <h3 className='title mt-2'>CONTACT</h3>
            <p><strong>EMAIL</strong>: anna_delise@libero.it</p>
            <p><strong>PHONE</strong>: +39 3209420571</p>
            <p>
              <strong>GITHUB</strong>: 
              <a 
                href="https://github.com/Annie470" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none ms-1"
              >
                Annie470
              </a>
            </p>
            <p>
              <strong>LINKEDIN</strong>: 
              <a 
                href="https://linkedin.com/in/anna-delise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none ms-1"
              >
                /anna-delise
              </a>
            </p>
          </Col>
        </Row>

        <Row className='w-100 bg-blu m-0 flex-fill p-4 pt-3 gy-3'>
          <Col xs={12} className="d-lg-none text-white m-0">
            <h1 className='title'>ANNA DE LISE</h1>
            <p>19/11/1994</p>
            <p>Naples, Italy</p>
          </Col>

          <Col xs={12} className=" d-lg-none text-white">
            <h3 className='title'>CONTACT</h3>
            <p><strong>EMAIL</strong>: anna_delise@libero.it</p>
            <p><strong>PHONE</strong>: +39 3209420571</p>
            <p>
              <strong>GITHUB</strong>: 
              <a 
                href="https://github.com/Annie470" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-decoration-none ms-1"
              >
                Annie470
              </a>
            </p>
            <p>
              <strong>LINKEDIN</strong>: 
              <a 
                href="https://linkedin.com/in/anna-delise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-decoration-none ms-1"
              >
                /anna-delise
              </a>
            </p>
          </Col>

          <Col xs={12}>
            <h3 className='title text-white'>PROJECTS</h3>
          </Col>

        
           
              {projects.map((project) => (
                  <Col xs={12} lg={3}>
                    <Card 
                      onClick={() => openExternalLink(project.link)}
                      className="bg-transparent cardP p-4"
                    >
                      <Card.Title className="text text-white fs-4 mb-1 text-center">
                              {project.title}
                            </Card.Title>

                          <Card.Body  className="text-center p-0">
                            
                            <img src={project.image} alt="project icon"/>
                            <Card.Text className="text subtitleP">
                              {project.description}
                            </Card.Text>
                     <div className="badgeP">
                              {project.tech.map((tech, index) => (
                               
                                <span 
                                  key={index} 
                                  className="text text-black badge bg-warning me-2"
                                >
                                  {tech}
                                </span>
                              ))} </div>                      
                          </Card.Body>
                    </Card>          
                   </Col>     
              ))}
  
        </Row>
    </Container>
  );
}

export default App;