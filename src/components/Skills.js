import "../App.css";
import checkMarkIconLight from '../assets/checkmark-light.svg';
import SkillList from '../helpers/SkillsList';

function Skills() {
  return (
    <section id="skills" className="Skillscontainer">
      <h1 className="skillTitle">Skills</h1>
      <div className="skillList">
        <SkillList src={checkMarkIconLight} skill="HTML" />
        <SkillList src={checkMarkIconLight} skill="CSS" />
        <SkillList src={checkMarkIconLight} skill="JavaScript" />
        <SkillList src={checkMarkIconLight} skill="TypeScript" />
        <SkillList src={checkMarkIconLight} skill="Node" />
      </div>
      <hr />
      <div className="skillList">
        <SkillList src={checkMarkIconLight} skill="React" />
        <SkillList src={checkMarkIconLight} skill="Redux" />
        <SkillList src={checkMarkIconLight} skill="Webpack" />
        <SkillList src={checkMarkIconLight} skill="Git" />
        <SkillList src={checkMarkIconLight} skill="Bootstrap" />
      </div>
      <hr />
      <div className="skillList">
        <SkillList src={checkMarkIconLight} skill="Python" />
        <SkillList src={checkMarkIconLight} skill="SQL" />
        <SkillList src={checkMarkIconLight} skill="OOPS" />
      </div>
      
      
    </section>
  );
}

export default Skills;