import Header from './components/Header'
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjecyForm';
import projectsArr from './projects';


function App() {
  return(
  <div className="App">
  <Header/>
  <ProjectForm/>
  <ProjectList projects={projectsArr}/>
  
  </div> 
  )
}

export default App;
