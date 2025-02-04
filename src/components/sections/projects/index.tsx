import CardProject from "../../card-project";
import {useGitHubAutomatedRepos} from "github-automated-repos";

const Projects = () => {

    const data = useGitHubAutomatedRepos("Breno-Mateus", "keyword");

    return (
        <section id="projects" className="bg-colorSecondary flex flex-col items-center py-16 md:px-[10%] gap-20">
            <h1 className="text-3xl md:text-4xl font-bold uppercase">Meus <span className="text-colorStyle">Projetos</span></h1>
            <div className="flex flex-wrap items-center justify-center gap-[5rem]">
                {data.map((item) => (
                    <CardProject data={item} key={item.id}/>
                ))}
            </div>
        </section>
    )
};

export default Projects;