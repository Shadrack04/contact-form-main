import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Success from "./components/Success";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  query: "",
  message: "",
  consent: false,
};

function App() {
  const [formData, setFormData] = useState(initialFormData);

  const [error, setError] = useState({});
  const [ShowSuccess, setShowSuccess] = useState(false);

  function validate() {
    let newError = {};
    if (formData.firstName === "") {
      newError.firstName = "This field is required";
    }

    if (formData.lastName === "") {
      newError.lastName = "This field is required";
    }

    if (formData.email === "") {
      newError.email = "This field is required";
    } else if (!emailRegex.test(formData.email)) {
      newError.email = "Please enter a valid email address";
    }

    if (formData.query === "") {
      newError.query = "Please select a query type";
    }

    if (formData.message === "") {
      newError.message = "This field is required";
    }

    if (!formData.consent) {
      newError.consent = "To submit this form, please consent to being contact";
    }

    setError(newError);

    return Object.keys(newError).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "consent") {
      const checkedValue = e.target.checked;
      setFormData((prev) => ({ ...prev, [name]: checkedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      setShowSuccess(true);
      setFormData(initialFormData);
    }
  }

  return (
    <div className="  flex items-center justify-center sm:max-w-[60%] sm:mx-auto">
      <div className=" shadow-md min-h- sm:min-h-[80%] p-4 bg-white rounded-lg w-[90%] h-[80%] m-auto">
        <div className=" mb-8">
          <h1 className=" text-2xl font-bold">Contact Us</h1>
        </div>
        {ShowSuccess && <Success />}

        <Form onChange={handleChange} onSubmit={handleSubmit} error={error} />
      </div>
    </div>
  );
}

export default App;
