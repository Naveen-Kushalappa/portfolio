
import EmailIcon from "../icons/EmailIcon"
import LinkedinIcon from "../icons/LinkedInIcon"
import GithubIcon from "../icons/GithubIcon"
import LocationIcon from "../icons/LocationIcon"
import PhoneIcon from "../icons/PhoneIcon"


const IconWrapper = ({ children }) => {
  return <div className="flex items-center justify-center w-6 h-6 text-gray-1000">{children}</div>
}


const ContactDetails = () => {
  return <div className="mt-10 md:w-3/5 mx-auto">
    <div className="flex pb-2 border-b-2 border-gray-800 items-center text-gray-1000">
      <IconWrapper>
        <PhoneIcon />
      </IconWrapper>
      <p className="font-light text-sm ml-2">+91-9036767036</p>
    </div>

    <div className="flex pb-2 border-b-2 border-gray-800 items-center mt-2">
      <IconWrapper>
        <EmailIcon />
      </IconWrapper>
      <p className="font-light text-sm ml-2">
        tknaveen4@gmail.com
      </p>
    </div>

    <div className="flex pb-2 border-b-2 border-gray-800 items-center mt-2">
      <IconWrapper>
        <LinkedinIcon />
      </IconWrapper>
      <p className="font-light text-sm ml-2">
        <a target="_blank" href="https://www.linkedin.com/in/naveenkushalappa/" rel="noreferrer">
          https://www.linkedin.com/in/naveenkushalappa/
        </a>
      </p>
    </div>

    <div className="flex pb-2 border-b-2 border-gray-800 items-center mt-2">
      <IconWrapper>
        <GithubIcon />
      </IconWrapper>
      <p className="font-light text-sm ml-2">
        <a target="_blank" href="https://github.com/Naveen-Kushalappa" rel="noreferrer">
          https://github.com/Naveen-Kushalappa
        </a>
      </p>
    </div>

    <div className="flex pb-2 border-b-2 border-gray-800 items-center mt-2">
      <IconWrapper>
        <LocationIcon />
      </IconWrapper>
      <p className="font-light text-sm ml-2">
        Bengaluru, Karnataka, India
      </p>
    </div>
  </div>
};

export default ContactDetails;
