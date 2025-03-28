import Badge from "@radui/ui/Badge"

const ProfessionalExperience = () => {

  const experiences = [
    {
      title: "FullStack Engineer",
      isRemote: true,
      company: "Sprinto",
      duration: "APRIL 2022 - FEB 2025",
      description: [
        `Added 100 + third party integrations to Sprinto platform like Oracle, Certn, Checkr, SpringVerify helping scale from 100 to 1000 customers.`,
`Notification engine - streamline email, slack and MS teams notifications for all tasks and checks in Sprinto.The engine currently sends out 100000+ notifications daily.`, 
`Streamlined offboarded user checks and resolved a critical monitoring issue to enhance system reliability.` 
      ],
      techStack: [
        'JavaScript', 'NodeJS', 'NextJS', 'GraphQL', 'React', 'ExpressJS', 'Postgres'
      ]
    },
    {
      title: "Founding Engineer",
      isRemote: true,
      company: "Medisage",
      duration: "JULY 2020 - FEB 2022",
      description: [
        `Joined as a founding full - stack engineer, playing a key role in building the engineering team from the ground up`,
`Developed a Laravel - based web app and API backend serving over 100,000 doctors, contributing to creating one of India's largest learning platforms for medical professionals. `,
`Played a pivotal role in requirement analysis, application design, and deployment. `,
`Led hiring, mentoring, and technical initiatives, driving the company's technological growth and success.`
      ],
techStack: [
  'Laravel', 'MySQL', 'RestAPI', 'AWS', 'Vue.js', 'Python', 'NodeJS'
      ]
    },
    {
      title: "Senior Engineer",
      isRemote: false,
      company: "Quantela",
      duration: "MARCH 2019 - JUNE 2020",
      description: [
       `Led the productization of data science models for a recommendation engine, managing the complete end-to-end product lifecycle, including design, development, release, and maintenance.`,
      `Worked on agile requirements to deliver POC demos, including the COVID-19 POC.`
      ],
      techStack: [
         'Python', 'MySQL', 'Flask'
      ]
    },
    {
      title: "Senior Developer",
      isRemote: false,
      company: "Portea",
      duration: "AUG 2015 - FEB 2019",
      description: [
        `SMS Engine: Developed an engine capable of processing over 100,000 SMS messages daily, with features for prioritization, scheduling, filtering, and tracking.`,
`Coupon Engine: Built a system to create, manage, and apply coupons across multiple platforms.`,
`Order Management System: Designed and implemented a system to manage equipment, inventory, order lifecycle, and payment settlement.`,
`Payment Settlement Module: Developed a module that reduced operating times and improved overall efficiency.`
      ],
      techStack: [
       'Java', 'SpringBoot', 'Laravel', 'Vue.js', 'JavaScript', 'MySQL'
      ]
    },
    {
      title: "Software Engineer",
      isRemote: false,
      company: "NTT Data",
      duration: "FEB 2015 - JULY 2015",
      description: [
        `Developed enterprise applications using Java and MySQL, enhancing software engineering skills.`,
`Collaborated on internal projects at NTT DATA Americas to improve industry readiness.`,
`Underwent soft skills training to enhance communication and teamwork within the team.`

      ],
      techStack: [
        'Java', 'MySQL'
      ]
    },
  ]

  return <div className="mt-10 md:w-4/5 mx-auto">
    <div className="border-b-2 border-gray-800 mb-2">
      <h3 className="font-bold uppercase my-0 tracking-widest ">
        PROFESSIONAL EXPERIENCE
      </h3>
      <div className="border-dancer delay-1000"></div>
    </div>
    <div className="mt-4 mb-8">
      {experiences.map((experience, index) => (
        <div key={index}>
          <h3 className="uppercase text-sm my-0 font-bold flex items-center gap-2">
            {experience.title} {experience.isRemote ?
              <Badge color="green" size="small">Remote</Badge>
              : ""}
          </h3>
          <h4 className="uppercase text-xs my-1 font-normal text-gray-1000">
            {experience.company} | {experience.duration}
          </h4>
          <ul className="text-sm my-4">
            {experience.description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
          <ul className="text-sm my-4 flex flex-wrap gap-2">
            {experience.techStack.map((item, index) => (
              <Badge key={index} color="gray" size="small">{item}</Badge>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
};

export default ProfessionalExperience;
