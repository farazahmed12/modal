import React from "react";

import NewUser from "./NewUser";
import NewTable from "./NewTable";

function App() {
  return (
    <div className="App">
      <button
        type="button"
        className="btn btn-primary m-5"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        User Profile Modal
      </button>
      <button
        type="button"
        className="btn btn-primary m-5"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
        data-bs-whatever="@fat"
      >
        Open modal for 2
      </button>

      {/* New User Modal */}
      <NewUser />

      {/* New Table Modal */}
      <NewTable />
    </div>
  );
}

export default App;
