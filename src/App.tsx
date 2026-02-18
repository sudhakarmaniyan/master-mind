// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
// import LandingPage from './pages/LandingPage';
// import CourseDetail from './pages/CourseDetail';
// import Enroll from './pages/Enroll';
// import Blog from './pages/Blog';
// import Portfolio from './pages/Portfolio';
// import About from './pages/About '; 
// import Courses from './pages/Courses';
// import Contact from './pages/Contact';
// import PortfolioDetails from './pages/PortfolioDetail';
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           {/* The main page now holds Home, About, Courses, and Contact */}
//           <Route index element={<LandingPage />} />
          
//           {/* We keep these as separate pages because they have specific details/forms */}
//           <Route path="courses/:id" element={<CourseDetail />} />
//           <Route path="enroll" element={<Enroll />} />
//           <Route path="blog" element={<Blog />} />
//           <Route path="carrers" element={<Portfolio />} />
//           <Route path="courses" element={<Courses />} />
//           <Route path="contact" element={<Contact />} />
          
//           {/* Adjusted to path="about" for consistency */}
//           <Route path="about" element={<About />} />
//           <Route path="careers:id" element={<PortfolioDetails />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import CourseDetail from './pages/CourseDetail';
import Enroll from './pages/Enroll';
import Blog from './pages/Blog';
import Careers from './pages/Careers'; // Ensure this matches your renamed file
import About from './pages/About '; 
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import CareerDetail from './pages/CareersDetail'; // Ensure this matches your renamed file

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetail />} />
          
          {/* 1. Fixed the spelling from 'carrers' to 'careers' */}
          <Route path="careers" element={<Careers />} /> 
          
          {/* 2. Added the missing '/' before the ':id' parameter */}
          <Route path="careers/:id" element={<CareerDetail />} /> 
          
          {/* 3. Added the missing route for Success Stories used in Home.tsx */}
          <Route path="success-stories" element={<Blog />} /> 

          <Route path="enroll" element={<Enroll />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;