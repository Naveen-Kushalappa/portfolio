import Strong from '@radui/ui/Strong'

const Skills = () => {
  return  <div className="mt-10 md:w-4/5 mx-auto">
  <div className="border-b-2 border-gray-800 mb-2">
    <h3 className="font-bold uppercase my-0 tracking-widest">Skills</h3>
    <div className="border-dancer delay-1000"></div>
  </div>
  <span className="text-sm text-gray-1000 font-normal my-4">
    <Strong>My skills include but not limited to - </Strong>
      <ul><Strong>Backend:</Strong>  Java, NodeJS, PHP, Python</ul>
      <ul><Strong>Frontend:</Strong> React</ul>
      <ul><Strong>Frameworks: </Strong> SpringBoot, NestJS, NextJS, Express, Laravel</ul>
     <ul><Strong>API:</Strong> REST, GraphQL</ul>
     <ul><Strong>Database:</Strong> MySQL, Postgres, MongoDB</ul>
      <ul><Strong>Version control:</Strong> Github, Gitlab</ul>
      <ul><Strong>Container service:</Strong> Docker</ul>
     <ul><Strong>Cloud:</Strong> AWS ec2, s3, RDS</ul>
     <ul><Strong>Architecture:</Strong> Micro services, Monolithic</ul>
      <ul><Strong>Monitoring tools:</Strong> Sentry, DataDog</ul>
     <ul><Strong>Tools:</Strong> JIRA, Notion</ul>
  </span>
</div>
};

export default Skills;
