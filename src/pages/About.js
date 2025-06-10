import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <section className="mission">
        <h2>Mission Statement</h2>
        <p>
          Our mission is to provide personalized and holistic physical therapy for all ages,
          empowering each patient to take control of their health and well-being through education,
          movement, and autonomy to promote healthy, strong, and meaningful lives. We provide
          the highest quality care to adult patients in the Delta Junction region of Alaska with
          a variety of neurology diagnoses including stroke (CVA), Parkinson’s disease (PD),
          multiple sclerosis (MS), traumatic brain injury (TBI), spinal cord injury (SCI),
          amyotrophic lateral sclerosis (ALS), and neuropathy.
        </p>
      </section>

      <section className="about-section">
        <h2>Values of Practice</h2>
        <div className="values-container">
            <div className="value-box">
            <h4>Integrity</h4>
            <p>We are committed to doing what is right by acting honestly, showing transparency, and putting the interests of our patients first.</p>
            </div>
            <div className="value-box">
            <h4>Autonomy</h4>
            <p>We are committed to giving each patient the education necessary to make educated decisions regarding their healthcare, including providing treatment options and rationales.</p>
            </div>
            <div className="value-box">
            <h4>Compassion</h4>
            <p>We are committed to meet our patients where they are at, and showing empathy to the varying situations we are presented with, to meet the specific needs of each patient.</p>
            </div>
            <div className="value-box">
            <h4>Altruism</h4>
            <p>We are committed to placing the needs of patients and clients ahead of our own as physical therapists to ensure appropriate care is being provided in the patient’s best interest.</p>
            </div>
            <div className="value-box">
            <h4>Inclusion</h4>
            <p>Ensuring that our clinic provides a welcoming environment to all, and doing our best to increase access to care for anyone who needs it, increasing equity in healthcare throughout the region.</p>
            </div>
        </div>
     </section>

    </div>
  );
}

export default About;
