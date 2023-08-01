import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas, Navbar } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
