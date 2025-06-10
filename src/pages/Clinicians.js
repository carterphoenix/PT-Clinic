import React from "react";
import "./Clinicians.css";

const clinicians = [
  {
    name: "Bayley Dawson, PT, DPT, NCS",
    bio: `My love for physical therapy stems from my passion for all aspects of health. My goal as a physical therapist is to empower people to move their bodies and be advocates for their health. I attended Wingate University for my undergraduate degree in exercise science and received my Doctorate in Physical Therapy from Western Carolina University. I now have my Neurologic Clinic Specialty and my Dry Needling Certification. When I’m not in the clinic, I enjoy participating in all sorts of outdoor activities and sports along with hanging out with my cat, Taki.`,
    img: "/bayley_dawson.jpg",
  },
  {
    name: "Sierra Denny, PT, DPT, NCS",
    bio: `My passion for Physical Therapy started when I was a collegiate soccer player at Wesleyan University in Nebraska. I received my Doctorate of Physical Therapy from Western Carolina University. I am now residing back where I grew up, North Pole, Alaska. While in school, I fell in love with neuroscience which translated to working with neuro patients. My goal is to empower patients through exercise so their quality of life is the best it can be. My hobbies include hiking, playing with my dog, Luka, and traveling the world.`,
    img: "/sierra_denny.jpeg",
  },
  {
    name: "Kaitlyn Fulton, PT, DPT, NCS",
    bio: `I am a very ambitious individual who has a strong passion for working with the neurological population. I love learning each patient’s story and working off my patient’s strengths to help create a unique, individualize plan for each patient following evidence informed practice. I completed my undergraduate studies at Appalachian State University, where I earned my Exercise Science Degree. I then continued my education at Western Carolina University, earning my Doctorate in Physical Therapy. Following my graduation in 2026, I then went on to complete University of Chapel Hill’s Neurologic Physical Therapy Residency Program and earned my Neurological Clinical Specialist. In my free time I enjoy going out and trying to restaurants, crocheting, and watching movies!`,
    img: "/kaitlyn_fulton.jpeg",
  },
  {
    name: "Ellissa McGinness, PT, DPT, NCS",
    bio: `I developed a passion for physical therapy for many reasons, but especially due to its ability to empower patients to take control of their healthcare, and use movement as medicine! My goal is to establish transparent and empathetic clinician-patient relationships, and to provide holistic and individualized evidence-based care, acknowledging the multifaceted impact of pain and loss of independent function. I was born and raised in Florida, and graduated from Florida State University (Go Noles!) with a Bachelor of Science in Family and Child Sciences. Following graduation, I made the move to North Carolina, where I attended Western Carolina University’s Doctor of Physical Therapy program and met my current colleagues and co-owners of this clinic! Following graduation, I obtained my Neurologic Clinical Specialist certification after completing a residency with Brooks Rehabilitation, in Daytona Beach, Florida! In my free time, you can find me spending time with my loved ones, obsessing over my plant collection, painting, or playing with my cat, Sushi!`,
    img: "/ellissa_mcginness.jpeg",
  },
];

function Clinicians() {
  return (
    <div className="clinicians-container">
      <h2>Meet Our Clinicians</h2>
      <div className="clinicians-grid">
        {clinicians.map(({ name, bio, img }, index) => (
          <div key={index} className="clinician-card">
            <img src={img} alt={name} className="clinician-photo" />
            <h3>{name}</h3>
            <p>{bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clinicians;
