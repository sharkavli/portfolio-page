import Header from '../Header';
import ProjectsGrid from './ProjectsGrid/ProjectsGrid';
import { projectCards } from '../../utils/utils';
import PopupImage from '../PopupImage/PopupImage';
import React from 'react';

export default function Projects() {
  const [isOpened, setOpened] = React.useState(false);
  const [image, setImage] = React.useState('');
  const [about, setAbout] = React.useState('');
  const [title, setTitle] = React.useState('');

  function openPopup(image, about, title) {
    setImage(image);
    setAbout(about);
    setTitle(title);
    setOpened(true);
  }

  function closePopup() {
    setImage('');
    setAbout('');
    setTitle('');
    setOpened(false);
  }

  return (
    <div className="projects-page">
      <Header />
      <ProjectsGrid onOpen={openPopup} cards={projectCards} />
      {isOpened ? (
        <PopupImage
          onClose={closePopup}
          image={image}
          about={about}
          title={title}
        />
      ) : null}
    </div>
  );
}
