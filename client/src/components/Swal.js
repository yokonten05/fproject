import React from "react";
import { useHistory } from "react-router-dom";
import SweetAlert2 from "react-sweetalert2";

const SwalError = ({ text }) => {
  return (
    <div>
      <SweetAlert2
        show={true}
        text={text}
        icon={"error"}
        confirmButtonText={"ตกลง"}
      />
    </div>
  );
};

const SwalSuccess = ({ text, path }) => {
  const history = useHistory();
  return (
    <div>
      <SweetAlert2
        show={true}
        text={text}
        icon={"success"}
        confirmButtonText={"ตกลง"}
        onConfirm={() => history.push(path)}
      />
    </div>
  );
};

export { SwalError, SwalSuccess };
