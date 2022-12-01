import React, { useState } from "react";

import Modal from "./Modal";
function App() {
  var [op, opf] = useState(false);
  function handlelick() {
    opf(true);
  }
  function handlelick2() {
    opf(false);
  }
  return (
    <div className="app">
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            onClick={handlelick}
            type="button"
            className="btn btn-primary"
          >
            Уведомления
          </button>
        </div>
      </div>

      {op ? <Modal func={handlelick2} /> : "click"}
    </div>
  );
}

export default App;
