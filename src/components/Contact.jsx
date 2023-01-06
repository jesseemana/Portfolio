import { useState, useRef, useEffect } from "react";
import { BiSend, BiError, BiCheck } from "react-icons/bi";
import { ImSpinner7 } from "react-icons/im";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || process.env.PUBLIC_KEY;
const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY || process.env.SERIVCE_KEY;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || process.env.TEMPLATE_ID;

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [typing, setTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const [canSend, setCanSend] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  // VARIABLE FOR ENABLING OR DISABLING THE SUBMIT BUTTON
  const activateBtn = [validEmail, name, subject, message.length >= 30].every(
    Boolean
  );

  useEffect(() => {
    if (activateBtn) {
      setCanSend(true);
    } else {
      setCanSend(false);
    }
  }, [activateBtn]);

  // SETTING STATE FOR TYPING AND EMAIL FOR VALIDATION
  const handleMail = (e) => {
    setEmail(e.target.value);
    setTyping(true);
  };

  // VALIDATING OUR EMAIL
  useEffect(() => {
    const validateEmail = (email) => {
      const valid = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

      if (valid) {
        setValidEmail(true);
      } else {
        // alert("enter a valid email please");
        setValidEmail(false);
      }
    };

    validateEmail(email);
  }, [email]);

  // FUNCTION HANDLING THE EMAIL SENDING FUNCTIONALITIES
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(SERVICE_KEY, TEMPLATE_ID, form.current, PUBLIC_KEY);

    setTimeout(() => {
      e.target.reset();
      setTyping(false);
      setLoading(false);
      setCanSend(false);

      toast.success("email sent", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }, 3000);
  };

  return (
    <div className="py-5">
      <h2 className="h2 text-center">Get in touch</h2>
      <h2 className="text-md lg:text-[19px] text-gray-400  text-center py-5">
        Have a project that needs to get done or want to get my resume? Reach
        out to me below.
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-col-3 gap-y-3 justify-center "
      >
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="form-sm lg:form"
          required
        />
        {!validEmail ? (
          <div>
            <input
              type="text"
              name="email"
              placeholder="name@example.com"
              onChange={handleMail}
              className="form-sm lg:form"
              required
            />{" "}
            {typing && (
              <span>
                <BiError className="text-2xl text-red-500" />
              </span>
            )}
          </div>
        ) : (
          <div>
            <input
              type="text"
              name="email"
              placeholder="name@example.com"
              onChange={handleMail}
              className="form-sm lg:form"
              required
            />
            {typing && validEmail && (
              <span>
                <BiCheck className="text-2xl text-green-400" />
              </span>
            )}
          </div>
        )}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
          className="form-sm lg:form"
          required
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Your message (at least 30 characters)."
          onChange={(e) => setMessage(e.target.value)}
          className="form-sm lg:form"
          required
        />
        {/* SUBMIT BUTTON */}
        {loading ? (
          <button className="group hover:bg-blue-300 flex justify-center uppercase rounded-md py-3 border border-blue-300 w-[100px] text-[11px] md:text-sm">
            <ImSpinner7 className="animate-spin text-[20px] text-blue-300 group-hover:text-black " />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canSend}
            className={`${
              canSend
                ? "text-blue-300 hover:bg-blue-300 hover:text-black flex items-center justify-around uppercase rounded-md py-3 border border-blue-300 w-[100px] text-[11px] md:text-sm"
                : "text-gray-400 text-center flex items-center justify-around uppercase rounded-md py-3 border border-gray-400 w-[100px] text-[11px] md:text-sm"
            }`}
          >
            <p>send</p>
            <span>
              <BiSend className={`${canSend ? "block" : "hidden"} `} />
            </span>
          </button>
        )}
        {/* END OF SUBMIT BUTTON */}
        <ToastContainer />
      </form>
    </div>
  );
};
