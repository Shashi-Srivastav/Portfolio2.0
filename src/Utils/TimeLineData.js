import { FaBriefcase, FaGraduationCap, FaSchool,FaLaptopCode} from 'react-icons/fa'; 

const timelineItems = [
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'>December 2024 - Present</span>,
    position: 'left',
    icon: <FaBriefcase />,
    title: 'Software Developer (Paid Intern)',
    subTitle: 'Him Soft Solution OPC Pvt. Ltd',
    description: 'Worked on Building CRM Project, Official Website of HimSoft Solution using PHP, Laravel.',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'>June 2024 - November 2024</span>,
    position: 'right',
    icon: <FaBriefcase />,
    title: 'Industrial Training And Intern',
    subTitle: 'MERN Stack Training at Apna College & YHills',
    description: 'MERN Stack pro with REST, EJS, JS DOM, Bootstrap, Git, CLI, Tailwind, and Hoppscotch proficiency.',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'>Present</span>,
    position: 'left',
    icon: <FaLaptopCode />,
    title: 'Coding',
    subTitle: 'Data Structure And Algorithm',
    description: `Mastered DSA with 100+ problem solved and hold strong algo and problem-solving skills.`,
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2020 - 2024 </span>,
    position: 'right',
    icon: <FaGraduationCap />, 
    title: 'Sardar Beant Singh State University (SBSSU)',
    subTitle: `Bachelor's degree, Information Technology (IT)`,
    description: 'Total CGPA: 8.0',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2019 - 2020 </span>,
    position: 'left',
    icon: <FaSchool />, 
    title: 'Dr.MCM DAV Public School',
    subTitle: 'Senior Secondary Education',
    description: 'Total CGPA: 6.6 (62.45%)',
  },
];


export default timelineItems