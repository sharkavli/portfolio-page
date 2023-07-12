// import { Link } from 'react-router-dom';

export default function ProjectCard({ card, onOpen }) {
  function handleOpen() {
    onOpen(card.image, card.about, card.title);
  }

  return (
    <div className="project-card">
      <img
        onClick={handleOpen}
        className="project-card__picture"
        alt={card.title}
        src={card.image}
      />
      <div className="project-card__bottom">
        <h1 className="project-card__title">{card.title}</h1>
        <a
          className="project-card__visit-link"
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Посетить!
        </a>
      </div>
    </div>
  );
}
