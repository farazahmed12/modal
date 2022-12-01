import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Modal9 = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ borderBottom: "none" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          {/* Modal Header */}
          <div className="container-fluid">
            <h4 className="modal-title fw-bold" id="exampleModalLabel">
              Search Customer
            </h4>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Modal Body */}
        <div className="modal-body pt-0">
          <form>
            <div className="container-fluid" style={{ paddingLeft: "0px" }}>
              <div className="row">
                <div className="col-6">
                  <label
                    for="recipient-name"
                    className="col-form-label fw-bold d-flex justify-content-start"
                  >
                    By Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Name"
                  />
                </div>
                <div className="col-6">
                  <label
                    for="recipient-name"
                    className="col-form-label fw-bold d-flex justify-content-start"
                  >
                    By Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="recipient-name"
                    placeholder="0304"
                  />
                </div>
              </div>
              <h4 className="d-flex justify-content-start fw-bold mt-3 mt-4">
                Add Customer
              </h4>
              <div className="row">
                <div className="col-6">
                  <label
                    for="recipient-name"
                    className="col-form-label fw-bold d-flex justify-content-start"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Name"
                  />
                </div>
                <div className="col-6">
                  <label
                    for="recipient-name"
                    className="col-form-label fw-bold d-flex justify-content-start"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="recipient-name"
                    placeholder="0304***"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label
                    for="recipient-name"
                    className="col-form-label fw-bold d-flex justify-content-start"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Email"
                  />
                </div>
                <div className="col-6">
                  <label
                    for="recipient-name"
                    className="col-form-label fw-bold d-flex justify-content-start"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer
        style={{
          borderTop: "none",
          justifyContent: "space-between",
          display: "block",
        }}
      >
        {/* Modal Footer */}
        <div className="modal-footer" style={{ borderTop: "none" }}>
          <div className="container-fluid" style={{ paddingLeft: "0px" }}>
            <div className="row">
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn w-100 fw-bold"
                  style={{ backgroundColor: "#0a8d6e", color: "#fff" }}
                >
                  CONFIRM
                </button>
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn w-100 fw-bold"
                  style={{ backgroundColor: "#939393", color: "#fff" }}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal9;
