
import 'bootstrap/dist/css/bootstrap.min.css'
import All from './components/All'
import Navbar from './components/Navbar'
import Career from './components/Career'
import Cybersecurity from './components/Cybersecurity'
import Datasceience from './components/Datasceience'
import Fsd from './components/Fsd'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



function App() {
  let data = [
    {
      tittle:"Fsd",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      text1 : "Top Ways to Assess Soft Skills in Full Stack Developers in 2024 ",
      text2: "When you’re hiring a full-stack developer, what are the most important things you look for?",
      date:"15 November 2023 No Comments "
    },
    {
      tittle:"Fsd",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      text1 : "Top Differences: Full Stack Developer vs Software Engineer 2024 ",
      text2: "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      date:"15 November 2023 No Comments "
    },
    {
      tittle:"Fsd",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      text1 : "Horizontal vs Vertical Scaling for Efficient System Design  ",
      text2: "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
      date:"10 November 2023 No Comments "
    },
    {
      tittle:"Fsd",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      text1 : "Best Books to Learn Full-Stack Development  ",
      text2: "Are you interested in becoming a full-stack developer but not sure where to start? In",
      date:"9 November 2023 No Comments  "
    },
    {
      tittle:"Data Science",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      text1 : "Top 10 High Paying Non-Coding Jobs in Data Science in 2024  ",
      text2: "Are you someone who’s not interested in coding, but wants to get placed in tech",
      date:"28 November 2023 No Comments  "
    },
    {
      tittle:"Data Science",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
      text1 : "Impact of Certification Programs on Hiring Data Scientists   ",
      text2: "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      date:"15 November 2023 No Comments  "
    },
    {
      tittle:"Data Science",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      text1 : "Top Product-Based Companies for Data Science Freshers  ",
      text2: "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      date:"10 November 2023 No Comments   "
    },
    {
      tittle:"Data Science",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      text1 : "What is the Difference between Data Science and Data Engineering? ",
      text2: "India has been making some serious waves in the world of data. Just like the",
      date:"8 November 2023 No Comments    "
    },
    {
      tittle:"Cyber Security",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      text1 : "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide  ",
      text2: "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      date:"4 December 2023 No Comments    "
    },
    {
      tittle:"Cyber Security",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      text1 : "What Is Hacking? Types of Hacking & More  ",
      text2: "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      date:"25 September 2023 No Comments    "
    },
    {
      tittle:"Cyber Security",
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
      text1 : "Cybersecurity Vs Ethical Hacking: Top 10 Differences  ",
      text2: "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      date:"27 December 2022 No Comments  "
    },
    {
      tittle:"Cyber Security",
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      text1 : "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!  ",
      text2: "Look around today, you will witness that we are more reliant on technology and devices",
      date:"20 December 2022 1 Comment   "
    },
    {
      tittle:"Career",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
      text1 : "UI/UX Designer Job Description and Roles & Responsibilities  ",
      text2: "UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
      date:"13 December 2023 No Comments  "
    },
    {
      tittle:"Career",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      text1 : "Top 5 IT Jobs for Economics Students  ",
      text2: "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      date:"4 December 2023 No Comments   "
    },
    {
      tittle:"Career",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      text1 : "Top IT Jobs for Commerce Students: A Lucrative Career Path ",
      text2: "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      date:"2 December 2023 No Comments  "
    },
    {
      tittle:"Career",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp",
      text1 : "Top 5 Product-Based Companies That Don’t Require Coding ",
      text2: "Every one of us wants to work in top product-based companies, Right? But, Not everyone",
      date:"24 November 2023 No Comments "
    }

  ]
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/All" element={<All data={data}/>}></Route>
  <Route path="/Career" element={<Career data={data}/>}></Route>
  <Route path="/Cybersecurity" element={<Cybersecurity data={data}/>}></Route>
  <Route path="/Datasceience" element={<Datasceience data={data}/>}></Route>
  <Route path="/Fsd" element={<Fsd data={data}/>}></Route>
  </Routes>
</BrowserRouter>
  </>
  
  
}

export default App