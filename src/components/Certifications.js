import "../App.css";
import HTML from "../assets/HTML.jpg";
import CSS from "../assets/CSS.jpg";
import JavaScript from "../assets/JavaScript.jpg";
import Flexbox from "../assets/FlexBox.jpg";
import Python from "../assets/Python.jpg";
import SQL from "../assets/SQL.jpg";
import CertificationCard from '../helpers/CertificationCard';

function Certifications() {
  return (
    <section id="projects" className="Certificationcontainer">
      <h1 className="sectionTitle">Certifications</h1>
      <div className="CertificationsContainer">
        <CertificationCard
          src={HTML}
          link="https://asset.cloudinary.com/dlervwdnb/1808242c0605781f83a8e33a8f85568d"
          h3="Static HTML & CSS"
        />
        <CertificationCard
          src={CSS}
          link="https://asset.cloudinary.com/dlervwdnb/a1fbfcbfd46485d2561e6918262d3a47"
          h3="Responsive HTML & CSS"
          
        />
        <CertificationCard
          src={JavaScript}
          link="https://asset.cloudinary.com/dlervwdnb/86fad3207942a74cdc31f203ae9c5f29"
          h3="Javascript"
         
        />
        <CertificationCard
          src={Flexbox}
          link="https://asset.cloudinary.com/dlervwdnb/9e9a57c22f19803b40bb66e61df4c4e6"
          h3="FlexBox"
          
        />
        <CertificationCard
          src={Python}
          link="https://asset.cloudinary.com/dlervwdnb/078b5b44c3dd81a70df42a5b92c11d68"
          h3="Python"
        />
        <CertificationCard
          src={SQL}
          link="https://asset.cloudinary.com/dlervwdnb/53938c6a1ba7d3b8335c60b63735204c"
          h3="SQL"
        />
      </div>
    </section>
  );
}

export default Certifications;
