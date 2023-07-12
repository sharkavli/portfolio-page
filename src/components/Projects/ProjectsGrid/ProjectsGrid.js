import ProjectCard from '../ProjectCard/ProjectCard';

export default function ProjectsGrid({ cards, onOpen }) {
  return (
    <div className="projects">
      {cards.map((card) => {
        return <ProjectCard onOpen={onOpen} key={card.title} card={card} />;
      })}
    </div>
  );
}
