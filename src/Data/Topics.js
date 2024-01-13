const topics = [
  {
    title: "My Personal Data",
    personal: (
      <div>
        <div className="color-personal">
        <p>Name</p>
        </div>
        <p>Talabporn Wutthicharoenkit</p>
        <div className="color-personal">
        <p>Nickname</p>
        </div>
        <p>Pleng</p>
        <div className="color-personal">
        <p>Date of Birth</p>
        </div>
        <p>June 16, 2003</p>
        <div className="color-personal">
        <p>Age</p>
        </div>
        <p>20 years old</p>
        <div className="color-personal">
        <p>Gender</p>
        </div>
        <p>Female</p>
        <div className="color-personal">
        <p>Place of birth</p>
        </div>
        <p>Chon Buri, Thailand</p>
        <div className="color-personal">
        <p>Blood type</p>
        </div>
        <p>AB</p>
        <div className="color-personal">
        <p>Nationality</p>
        </div>
        <p>Thailand</p>
      </div>
    ),
    thumbnailUrl: "/Images/MyPersonalData.png",
    popupImageUrl: "/Images/Me.jpg",
  },
  {
    title: "My Educations",
    intern: (
      <div>
        <div className="bullet-list-education">
        <p>Elementary School</p>
        </div>
        <p>Prasertsuk School</p>
        <div className="bullet-list-education">
        <p>Secondary School</p>
        </div>
        <p>Chonkanyanukoon School</p>
        <div className="bullet-list-education">
        <p>University</p>
        </div>
        <p>Mahidol University</p>
      </div>
    ),
    thumbnailUrl: "/Images/MyEducations.png",
    popupImageUrl: "/Images/Education.png",
  },
  {
    title: "My Skills",
    technical: (
      <div>
        <div className="color-skill">
        <p>Technical Skills</p>
        </div>
        <p>User Flows · Wireframes · Mock Ups · User Interface testing · 
Data Analysis · Figma · Adobe Illustrator · Adobe Photoshop · 
Design Systems · Style Guides · Interactive Prototyping · 
User Experience Research · Presentation · Python · Java(OOP) · Docker · Flutter ·  HTML · CSS · JavaScript · NodeJS · React · 
SQL · Alteryx · Power BI · Canva · Microsoft Word · PowerPoint · Excel</p>
      </div>
    ),
    language: (
      <div>
        <div className="color-skill">
        <p>Languages</p>
        </div>
        <div className="bullet-list">
          <p>
            Thai: Native language
          </p>
          <p>
           English: Ability to speak, write, and read
          </p>
          <p>
            Korea: Ability to know some basic words and phrases.
          </p>
        </div>
      </div>
    ),
    popupImageUrl: "/Images/Skills.png",
    thumbnailUrl: "/Images/MySkills.png",
  },
  {
    title: "My Dreams",
    dream:(
      <div>
        <div className="color-dream">
        <p>Dreams</p>
        </div>
        <div>
          <p>My dream is to achieve success in what I set out to do and hope for. I aspire to lead a fulfilling life, maintaining good health, thriving in my professional responsibilities, and expressing gratitude to everyone who has played a role in my life. Above all, I aim to live a joyful and contented life.</p>
        </div>
      </div>
    ),
    thumbnailUrl: "/Images/MyDreams.png",
  },
  {
    title: "My Hobbies",
    hobbie:(
      <div>
        <div className="color-hobbie">
        <p>Hobbies</p>
        </div>
        <div>
          <p>My current hobbies are centered around developing my skills, as I have a passion for design and enjoy learning new things in areas that interest me. Currently, my hobbies is pursuits  my skills in Blender to create 3D models, practicing photo editing and poster design in Adobe Photoshop, and refining logo designs using Adobe Illustrator. In the future, I aspire to delve into video editing using Adobe Premiere Pro. On the relaxation, I love to listening to international music and engaging in jogging to stay active during my free time.</p>
        </div>
      </div>
    ),
    thumbnailUrl: "/Images/MyHobbies.png",
  },
  {
    title: "My Experiences",
    intern: (
      <div>
        <div className="bullet-list-experience">
        <p>Summer internship: UX/UI position</p>
        </div>
        <p>June 1, 2023 - July 26, 2023 @Sellsuki Co., Ltd</p>
        <div className="bullet-list">
          <p>
            Build a user interface, wireframes, user research, user flow,
            competitor research for a movie ticket booking application, Shopping
            page, redesign old application, style guide, customer journey, user
            persona by using Figma.
          </p>
        </div>
      </div>
    ),
    other: (
      <div>
        <div className="bullet-list-experience">
        <p>Other works:</p>
        </div>
        <div className="bullet-list">
          <p>
            Build a user interface, user persona, wireframes, information
            architecture and hierarchical task analysis for a travel application
            and shopping website to practices my UX/UI skills by using Xtensio,
            Wireframe and Figma.
          </p>
          <p>
            Build a project about business data analytics to help the target
            user group achieve their goals by using Alteryx to processing data
            and Power BI to made the visualization.
          </p>
          <p>
            Test website to check software quality by write a functions for
            integration testing, using Selenium for UI testing and Grafana K6
            for performance testing.
          </p>
          <p>
            Create a shopping website by using HTML, CSS, JavaScript, API,
            NodeJS and React.
          </p>
          <p>
            Create a finding tourist attractions mobile application by using
            API, Dart and Flutter.
          </p>
          <p>
            Define a research question, preprocessing data, visualization data
            to be used to support business decision by using Python
          </p>
        </div>
      </div>
    ),
    popupImageUrl: "/Images/Intern.png",
    thumbnailUrl: "/Images/MyExperiences.png",
  },
];

export default topics;
