import React, { useState } from "react";
import Select from "react-select";

/* // Dummy Content  */
const tableOptions = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
];

const waiterOption = [
  { value: "john", label: "John" },
  { value: "smith", label: "smith" },
  { value: "Steve", label: "Steve" },
];

const guestOptions = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
];

const offerOption = [
  { value: "john", label: "Offer1" },
  { value: "smith", label: "offer2" },
  { value: "Steve", label: "offer3" },
];

const NewTable = () => {
  /* // Storing Values in State */
  const [tableSelected, settableSelected] = useState(null);
  const [waiterSelected, setwaiterSelected] = useState(null);
  const [guestSelected, setGuestSelected] = useState(null);
  const [offersSelected, setOffersSelected] = useState(null);
  return (
    <div
      className="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4" style={{ borderRadius: "16px" }}>
          {/* Modal Body */}
          <div className="modal-body">
            <form>
              <div className="container-fluid" style={{ paddingLeft: "0px" }}>
                <div className="row">
                  <div className="col-6">
                    <label
                      for="recipient-name"
                      className="col-form-label fw-bold"
                    >
                      Table
                    </label>
                    <Select
                      options={tableOptions}
                      defaultValue={tableSelected}
                      onChange={settableSelected}
                      placeholder={0}
                    />
                  </div>
                  <div className="col-6">
                    <label
                      for="recipient-name"
                      className="col-form-label fw-bold"
                    >
                      Waiter
                    </label>
                    <Select
                      options={waiterOption}
                      defaultValue={waiterSelected}
                      onChange={setwaiterSelected}
                      placeholder={"Name"}
                    />
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-6">
                    <label
                      for="recipient-name"
                      className="col-form-label fw-bold"
                    >
                      Guest
                    </label>
                    <Select
                      options={guestOptions}
                      defaultValue={guestSelected}
                      onChange={setGuestSelected}
                      placeholder={0}
                    />
                  </div>
                  <div className="col-6">
                    <label
                      for="recipient-name"
                      className="col-form-label fw-bold"
                    >
                      Offers
                    </label>
                    <Select
                      options={offerOption}
                      defaultValue={offersSelected}
                      onChange={setOffersSelected}
                      placeholder={"offers"}
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

export default NewTable;
