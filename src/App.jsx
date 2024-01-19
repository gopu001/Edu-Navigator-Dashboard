import './App.css'
import Hero from './Components/Hero/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Components/SignUp/SignUp'
import SignIn from './Components/SignIn/SignIn'
import StudentProfile_hero from './Pages/StudentProfile/ProfileHero/StudentProfile_hero'
import StudentProfileEdit from './Pages/StudentProfileEdit/StudentProfileHero/StudentProfileEdit'


// import Student from './Components/StudentDashboard/Student'
// import Progress from './Components/ProgressBar/Progress'
// import Graphic from './Components/GraphicDesign/Graphic'
// import Last from './Components/LastCard/Last'
// import MiddleContent from './Components/MiddleContent/MiddleContent'
// import RightBar1 from './Components/RightBar/RightBar1/RightBar1'
// import RightBar2 from './Components/RightBar/RightBar2/RightBar2'
// import RightBar3 from './Components/RightBar/RightBar3/RightBar3'
// import RightBar_Hero from './Components/RightBar/RightBar_Hero'
// import Top_Part1 from './Pages/StudentProfile/Top_Part/Top_Part1'
// import Middle_Part from './Pages/StudentProfile/Middle_Part/Middle_Part'
// import Last_Part from './Pages/StudentProfile/Last_Part/Last_Part'

{/* <Route path='student' element={<Student/>}/>
      <Route path='progress' element={<Progress/>} />
      <Route path='graphic' element={<Graphic/>} />
      <Route path='last' element={<Last/>}/> */}
      {/* <Route path='middle' element={<MiddleContent/>} /> */}
      {/* <Route path='right1' element={<RightBar1/>}/>
      <Route path='right2' element={<RightBar2/>} />
      <Route path='right3' element={<RightBar3/>} /> */}
      {/* <Route path='rightBar' element={<RightBar_Hero/>} /> */}
      {/* <Route path='profile1' element={<Top_Part1/>} />
      <Route path='middleProfile' element={<Middle_Part/>} />
     <Route path='lastProfile' element={<Last_Part/>} /> */}

function App() {




  return (
    <div className='routes'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>} />
      <Route path='/signin' element= {<SignIn/>} />
      <Route path='/hero' element={<Hero/>}/>
     <Route path='/studentProfile' element={<StudentProfile_hero/>} />
     <Route path='/studentProfileEdit' element={<StudentProfileEdit/>} />
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
