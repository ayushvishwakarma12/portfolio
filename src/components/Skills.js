import { Line, Circle } from "rc-progress";

const skillsData = [
  {
    label: "FRONT END",
    data: [
      {
        skillName: "HTML",
        percentage: "95",
      },
      {
        skillName: "CSS",
        percentage: "90",
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "80",
      },
    ],
  },
  {
    label: "BACK END",
    data: [
      {
        skillName: "PYTHON",
        percentage: "65",
      },
      {
        skillName: "Express JS",
        percentage: "65",
      },
      {
        skillName: "Node JS",
        percentage: "65",
      },
    ],
  },

  {
    label: "DATABASES",
    data: [
      {
        skillName: "SQL",
        percentage: "70",
      },
      {
        skillName: "MONGO DB",
        percentage: "65",
      },
    ],
  },
  {
    label: "Framework",
    data: [
      {
        skillName: "React JS",
        percentage: "80",
      },
      {
        skillName: "Bootstrap",
        percentage: "90",
      },
      {
        skillName: "Tailwind",
        percentage: "50",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="fluid-container">
        <div className="row">
          <div className="d-flex flex-row w-100 gap-5 p-4 skill-container flex-wrap">
            {skillsData.map((skill, i) => {
              return (
                <div
                  key={`skill-${i}`}
                  className="d-flex flex-column flex-grow-1 gap-3 col-sm-5 col-lg-2"
                >
                  <h1 className="skill-label">{skill.label}</h1>

                  <div key={`div-${i}`} className="d-flex flex-column">
                    {skill.data.map((language, j) => {
                      return (
                        <div key={`language-${i}-${j}`}>
                          <p className="skill-name">{language.skillName}</p>
                          <Line
                            className="line"
                            percent={language.percentage}
                            strokeWidth="4"
                            strokeColor="#1B8A6B"
                            trailWidth="4"
                            strokeLinecap="round"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
