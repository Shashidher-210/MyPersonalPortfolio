import "../App.css";
import SimpleTodo from "../assets/SimpleTodo.jpg";
import WikiPedia from "../assets/Wikipedia.png";
import Prime from "../assets/prime.png";
import Ecommerce from "../assets/E-commerce.jpg";
import Jobby from "../assets/Jobby.webp";
import Books from "../assets/Books.jpg";
import ProjectCard from '../helpers/ProjectCard';

function Projects() {
  return (
    <section  className="Projectcontainer">
      <h1 className="ProjectTitle">Projects</h1>
      <div className="ProjectsContainer">
        
        <ProjectCard
          src={SimpleTodo}
          link="https://t3.ftcdn.net/jpg/05/17/31/54/360_F_517315479_5APCsHqS3fFO0NAHewzDu9XS8Y2PhLBy.jpg"
          h3="Todos List"
        />
       
        <ProjectCard
          src={WikiPedia}
          link="https://t3.ftcdn.net/jpg/05/17/31/54/360_F_517315479_5APCsHqS3fFO0NAHewzDu9XS8Y2PhLBy.jpg"
          h3="WikiPedia Search "
        />
        
        <ProjectCard
          src={Prime}
          link="https://t3.ftcdn.net/jpg/05/17/31/54/360_F_517315479_5APCsHqS3fFO0NAHewzDu9XS8Y2PhLBy.jpg"
          h3="Prime Video Clone"
        />
        
       <ProjectCard
          src={Ecommerce}
          link="https://t3.ftcdn.net/jpg/05/17/31/54/360_F_517315479_5APCsHqS3fFO0NAHewzDu9XS8Y2PhLBy.jpg"
          h3="E-commerce Clone"
        />
       
       <ProjectCard
          src={Jobby}
          link="https://t3.ftcdn.net/jpg/05/17/31/54/360_F_517315479_5APCsHqS3fFO0NAHewzDu9XS8Y2PhLBy.jpg"
          h3="Jobby-App"
        />
       
       <ProjectCard
          src={Books}
          link="https://t3.ftcdn.net/jpg/05/17/31/54/360_F_517315479_5APCsHqS3fFO0NAHewzDu9XS8Y2PhLBy.jpg"
          h3="Books Hub"/>
        
      </div>
    </section>
  );
}

export default Projects;
