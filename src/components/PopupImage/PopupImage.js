export default function PopupImage({ onClose, image, about, title }) {
  return (
    <div className="popup">
      <div className="popup__container">
        <button onClick={onClose} className="popup__close" />
        <img alt={title} className="popup__image" src={image} />
      </div>
      <p className="popup__text">{about}</p>
    </div>
  );
}
