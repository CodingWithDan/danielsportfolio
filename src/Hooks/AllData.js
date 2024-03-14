import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/1.png";
import work2 from "../assets/images/work_images/2.png";
import work3 from "../assets/images/work_images/3.png";
import work4 from "../assets/images/work_images/4.png";
import work5 from "../assets/images/work_images/5.png";
import work6 from "../assets/images/work_images/6.jpg";
import work7 from "../assets/images/work_images/7.png";
import work8 from "../assets/images/work_images/8.png";
import work9 from "../assets/images/work_images/9.jpg";
// works small images
import workSmall1 from "../assets/images/work_images/small/1.png";
import workSmall2 from "../assets/images/work_images/small/2.png";
import workSmall3 from "../assets/images/work_images/small/3.png";
import workSmall4 from "../assets/images/work_images/small/4.png";
import workSmall5 from "../assets/images/work_images/small/5.png";
import workSmall6 from "../assets/images/work_images/small/6.jpg";
import workSmall7 from "../assets/images/work_images/small/7.png";
import workSmall8 from "../assets/images/work_images/small/8.png";
import workSmall9 from "../assets/images/work_images/small/9.jpg";

//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

 

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "App Development",
      title: "Furever Family",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      codeLink: "https://github.com/CodingWithDan/FureverFamily",
      client: "Envato",
      langages: "JavaScript, MongoDB, Express, Node",
      link: "https://fureverfamily-1.onrender.com/",
      linkText: "www.fureverfamily.com",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
    },
    {
      id: "2",
      tag: "App Development",
      title: "BWDB",
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      codeLink: "https://github.com/CodingWithDan/BWDB",
      client: "BWDB",
      langages: "HTML, CSS, Javascript, MongoDB",
      link: "https://bwdb.onrender.com/",
      linkText: "bwdb.com",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    },
    {
      id: "3",
      tag: "App Development",
      title: "Babel",
      img: work3,
      imgSmall: workSmall3,
      bg: "#FFF0F0",
      codeLink: "https://github.com/CodingWithDan/bABEL",
      client: "Agency Client",
      langages: "HTML, CSS, JavaScript",
      link: "https://towerofbabel.netlify.app/",
      linkText: "Tower of Babel",
      description:
        "An application built to replicate Worlde, the popular word game from the New York Times. This particular version was built to have a specific answer for the client to give to their partner as a gift.",
    },
    {
      id: "4",
      tag: "App Development",
      title: "San Pedro Star Gazers Society",
      img: work8,
      imgSmall: workSmall8,
      bg: "#FFF0F8",
      codeLink: "https://github.com/CodingWithDan/bABEL",
      client: "San Pedro Star Gazer Society",
      langages: "HTML, CSS, JS, API",
      link: "https://seeingstars.netlify.app/",
      linkText: "seeingstars",
      description:
        "An application that utilizes the NASA API to access the NASA image of the day and corresponding description.",
    },
    
    {
      id: "5",
      tag: "Web Design and Development",
      title: "Genki Vape",
      img: work5,
      imgSmall: workSmall5,
      bg: "#FFFAE9",
      codeLink: "https://github.com/CodingWithDan/bABEL",
      client: "Genki Enterprises",
      langages: "CSS, JavaScript, Bootstrap",
      link: "https://genkivape.netlify.app/",
      linkText: "Genki Vape",
      description:
        "A website for a client who wanted more of an online footprint to advertise their local vape business.",
    },
    {
      id: "6",
      tag: "Web Design and Development",
      title: "Hairy Styles",
      img: work4,
      imgSmall: workSmall4,
      bg: "#E9FAFF",
      codeLink: "",
      client: "Agency Client",
      langages: "HTML, CSS, Bootstrap",
      link: "https://hairystyles.netlify.app/",
      linkText: "Hairy Styles",
      description:
        "A website for a client specializing in C Suite level consulting expertise for growing & transitioning companies.",
    },
    
    {
      id: "7",
      tag: "Web Design and Development",
      title: "Woodford 4-H",
      img: work7,
      imgSmall: workSmall7,
      bg: "#F4F4FF",
      codeLink: "google.com",
      client: "Woodford 4-H",
      langages: "WordPress",
      link: "https://woodford4h.s1.48in48.org/",
      linkText: "Woodford 4-H",
      description:
        "A multi-page website built for the Woodford County 4-H youth program in Illinois.",
    },
    // {
    //   id: "8",
    //   tag: "Web Development",
    //   title: "Peace and Comfort Uganda",
    //   img: work6,
    //   imgSmall: workSmall6,
    //   bg: "#FFF0F8",
    //   codeLink: "",
    //   client: "Peace and Comfort Uganda",
    //   langages: "WordPress",
    //   link: "https://pcf-uganda.org/",
    //   linkText: "Peace and Comfort Uganda",
    //   description:
    //     "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    // },
   
    // {
    //   id: "9",
    //   tag: "Logo",
    //   title: "Chul urina",
    //   img: work9,
    //   imgSmall: workSmall9,
    //   bg: "#FCF4FF",
    //   codeLink: "https://github.com/CodingWithDan/bABEL",
    //   client: "Feepik",
    //   langages: "Figma",
    //   link: "https://www.freepik.com/free-photos-vectors/market-logo",
    //   linkText: "www.freepik.com",
    //   description:
    //     "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    // },
  ];
  const [data, setData] = useState(workItems);



  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    // {
    //   id: "06",
    //   name: "Resume",
    //   link: "/home/resume",
    //   icon: <CgNotes />,
    // },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/home/blogs",
    //   icon: <FaBlogger />,
    // },
    {
      id: "05",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];



  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: icon,
      title: "App Develpment",
      des: "From consultation to production to deployment, we can work together to bring your website to life.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon1,
      title: "Employment",
      des: "I am open to work as a full stack developer as well as available to take on freelancing clients.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "3",
      icon: icon2,
      title: "Website Design",
      des: "Need a complete design or webpage overhaul? I can help you to create a beautiful and functional website.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    // {
    //   id: "6",
    //   icon: icon5,
    //   title: "App Development",
    //   des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    //   color: "#269FFF",
    //   bg: "#F3FAFF",
    // },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "2021-2023",
      title: "Ph.D in Horriblensess ",
      place: "ABC University, Los Angeles, CA",
      bg: "#FFF4F4",
    },

    {
      id: 2,
      date: "2019 - Present",
      title: "Sr. Software Tester",
      place: "Google Inc.",
      bg: "#FFF1FB",
    },

    {
      id: 3,
      date: "2021",
      title: "Best Developer ",
      place: "University Of Melbourne, NA",
      bg: "#FFF4F4",
    },
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: "2017-2021",
      title: "Computer Science",
      place: "Imperialize Technical Institute",
      bg: "#EEF5FA",
    },

    {
      id: 2,
      date: "2015-2017",
      title: "Cr. Web Developer",
      place: "ib-themes ltd.",
      bg: "#F2F4FF",
    },

    {
      id: 3,
      date: "2008",
      title: "Best Writter",
      place: "Online Typodev Soluation Ltd.",
      bg: "#EEF5FA",
    },
  ];
  // awardsArray items for Resume page
  const awardsArray = [
    {
      id: 1,
      date: "2015-2017",
      title: "  Graphic Designer",
      place: "Web Graphy, Los Angeles, CA",
      bg: "#FCF4FF",
    },

    {
      id: 2,
      date: "2014 - 2015",
      title: "Jr. Web Developer",
      place: "Creative Gigs.",
      bg: "#FCF9F2",
    },

    {
      id: 3,
      date: "2015-2017",
      title: "Best Freelancer",
      place: "Fiver & Upwork Level 2 & Top Rated",
      bg: "#FCF4FF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Web Design",
      number: "80",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Mobile App ",
      number: "95",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "Illustrator",
      number: "65",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "Photoshope",
      number: "75",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "+310-351-4776",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "codingwdan@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "Los Angeles, CA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    menuItem,
    NavLink,
    serviceArray,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  };
};

export default AllData;



