import React from "react";
import team_pic from "../../assets/team/team_bg.jpeg";
import BigCard from "./BigCard";
import social_sec from "../../assets/team/social_sec.jpg";
import Wice_p from "../../assets/team/WP.jpg";
import tea1 from "../../assets/team/treasurer_2.jpg";
import sir1 from "../../assets/team/sir1.jpg";
import sir2 from "../../assets/team/sir2.png";
import sir3 from "../../assets/team/sir3.jpg";

function Team() {
  return (
    <>
      <div className="team-cont d-flex justify-content-center align-items-end">
        <img className="team-pic" src={team_pic} alt="team" />
        <div className="title ">Team of Prayaas</div>
      </div>
      <br />
      <br />
      <BigCard
        style={{
          borderTop: "4px solid orange",
          width: "25em",
          marginLeft: "3em",
          display: "flex",          // Make sure the container is using flexbox
          flexDirection: "column",  // Stack items vertically
          gap: "20px",              // Adds space between the cards
        }}
        card2="true"
        card3="true"
        title="Professor Incharge"
        img3={sir3}
        img2={sir1}
        img1={sir2}
        
        card1Title="DR. Dilip Peshwe"
        card1branch="Email: dilippeshwe@mme.vnit.ac.in"
        card2Title="DR. G N Nimbarte"
        card2branch="Email: gnimbarte@hss.vnit.ac.in"
        card3Title="DR. Hema chandra"
        card3branch="Email: ghchandra@phy.vnit.ac.in"
        
        
      />

      <BigCard
        color={true}
        title="Social Affairs Secretary"
        img1={social_sec}
        card1Title="Rohan Bhoir"
        card1batch="Batch: 2021-2025"
        card1branch="Department: Chemical Engineering"
        card1email="Email: socialsec@students.vnit.ac.in"
      />
      <BigCard
        color={false}
        title="Vice President"
        img1={Wice_p}
        card1Title="Jayesh Dhamkale"
        card1batch="Batch: 2021-2025"
        card1branch="Department: Mechanical Engineering"
        card1email="Email: socialsec@students.vnit.ac.in"
      />
      <BigCard
        title="Treasurer"
        color={true}
        // card2="true"
        img1={tea1}
        // img2={tea2}
        card1Title="Aditya Vishe"
        card1batch="Batch: 2022-2026"
        card1branch="Department: Civil Engineering"
        card1email="Email: prayaas.vnit.official@gmail.com"
        // card2Title="Kajal Yadav"
        // card2batch="Batch: 2020-2024"
        // card2branch="Department: Mining Engineering"
        // card2email="Email: prayaas.vnit.official@gmail.com"
      />
    </>
  );
}

export default Team;
