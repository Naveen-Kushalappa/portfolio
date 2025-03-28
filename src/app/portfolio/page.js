// sections
import AboutMe from "./sections/AboutMe"
import ProfessionalExperience from "./sections/ProfessionalExperience"
import Skills from "./sections/Skills"
import Education from "./sections/Education"
import Heading from "./sections/Heading"
import ContactDetails from "./sections/ContactDetails"


export default function Resume({ }) {
    return (
        <>
            <div className="mx-auto md:px-5 text-xl max-w-8xl px-4 mt-10 my-20 resume text-gray-1000">
                <div>
                    <Heading />
                    <ContactDetails />
                </div>

                {/*  */}
                <AboutMe />
                {/*  */}
                <ProfessionalExperience />
                {/*  */}
                <Skills />
                {/*  */}
                <Education />
            </div>
        </>
    );
}