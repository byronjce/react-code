import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";
import SongSearch from "./SongSearch";

export const Modals = () => {
  const [isOpenModal1, opendModal1, closeModal1] = useModal(false);
  const [isOpenModal2, opendModal2, closeModal2] = useModal(false);
  const [isOpenModal3, opendModal3, closeModal3] = useModal(false);
  const [isOpenModalSong, opendModalSong, closeModalSong] = useModal(false);

  const [isOpenModal4, opendModal4, closeModal4] = useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={opendModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Este en el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>

      <button onClick={opendModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Este en el contenido de mi modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>

      <button onClick={opendModal3}>Modal 3</button>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <ContactForm />
      </Modal>

      <button onClick={opendModalSong}>Modal song</button>
      <Modal isOpen={isOpenModalSong} closeModal={closeModalSong}>
        <SongSearch />
      </Modal>

      <button onClick={opendModal4}>Modal portal</button>
      <ModalPortal isOpen={isOpenModal4} closeModal={closeModal4}>
        <h3>Modal portal</h3>
        <p>Este en el contenido de mi modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </ModalPortal>
    </div>
  );
};
