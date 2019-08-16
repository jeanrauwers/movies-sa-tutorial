import React from "react";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MovieImage from "./MovieImage";
const ModalComponent = ({
  modalState,
  setModalState,
  className,
  modalSelectedMovie
}) => {
  const toggleState = () => {
    setModalState(!modalState);
  };

  console.log(modalState);

  return (
    <div>
      <Modal isOpen={modalState} toggle={toggleState} className={className}>
        <ModalHeader toggle={toggleState}>
          {modalSelectedMovie ? modalSelectedMovie.title : ""}
        </ModalHeader>
        <ModalBody>
          <MovieImage
            movieImageUrl={
              modalSelectedMovie ? modalSelectedMovie.backdrop_path : ""
            }
            movieTitle={
              modalSelectedMovie ? modalSelectedMovie.title : "No title"
            }
            width={"100%"}
          />
          {modalSelectedMovie ? modalSelectedMovie.overview : ""}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleState}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComponent;
