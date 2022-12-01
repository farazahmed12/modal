import React from "react";

const NewUser = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4" style={{ borderRadius: "16px" }}>
          {/* Modal Header */}
          <div className="modal-header" style={{ borderBottom: "none" }}>
            <h4 className="modal-title fw-bold" id="exampleModalLabel">
              Search Customer
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default NewUser;
