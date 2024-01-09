import ProjectListItem from "./ProjectListItem"

export default function ProjectList(props){
    const {projects} = props //destructuring assignment
    console.log(projects)
    return (
        <section>
            <h1>
                All Projects
            </h1>
            <ul className="cards">
                {projects.map(projectObj => {
                    return <ProjectListItem key={projectObj.id} project={projectObj} />
            })}
            </ul>
        </section>
    )
}