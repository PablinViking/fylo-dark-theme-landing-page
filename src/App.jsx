import { useRef } from "react"
import { CommentsSection } from "./components-react/CommentsSection"
import { EarlyAccessSection } from "./components-react/EarlyAccessSection"
import { Footer } from "./components-react/Footer"
import { Header } from "./components-react/Header"
import { InformationSection01 } from "./components-react/InformationSection01"
import { InformationSection02 } from "./components-react/InformationSection02"
import { Main } from "./components-react/Main"


function App() {
  const focusRef = useRef(null);

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Main focusRef={focusRef} />
        <InformationSection01 />
        <InformationSection02 />
        <CommentsSection />
      </div>
      <EarlyAccessSection focusRef={focusRef} />
      <Footer />
    </>
  )
}

export default App
