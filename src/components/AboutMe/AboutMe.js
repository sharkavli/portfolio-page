import Header from '../Header';
import Slider from './Slider/Slider.js';
import { cards } from '../../utils/utils.js';
import DescriptionAboutMe from './DescriptionAboutMe/DescriptionAboutMe.js';

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <Header />
      <DescriptionAboutMe />
      <Slider cards={cards} />
    </div>
  );
}
