import React, { useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

import useInput from "../../hooks/use-input";

const Form = () => {
  const formRef = useRef();
  const sendRef = useRef();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "" && value.length < 40);

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput((value) => value.trim() !== "" && value.length < 40);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => validateEmail(value) && value.length < 40);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "" && value.length < 350);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredSubjectIsValid &&
    enteredEmailIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const resetAll = useCallback(() => {
    resetNameInput();

    resetSubjectInput();

    resetEmailInput();

    resetMessageInput();
  }, [resetNameInput, resetSubjectInput, resetEmailInput, resetMessageInput]);

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredSubjectIsValid ||
      !enteredEmailIsValid ||
      !enteredMessageIsValid
    ) {
      return;
    }

    sendRef.current.setAttribute("disabled", "disabled");
    emailjs
      .sendForm(
        "service_5858csb",
        "template_xey7l6r",
        formRef.current,
        "user_nP9AOSXYsjJsdscGRzVl4"
      )
      .then(
        (result) => {
          console.log(result.text);
          resetNameInput();
          resetSubjectInput();
          resetEmailInput();
          resetMessageInput();

          swal({
            title: "Email sent!",
            text: "I'll contact you as soon as possible!",
            icon: "success",
          });
        },
        (error) => {
          swal({
            title: "Problem",
            text: "It seems there has been a problem please address your message to santiagochantada@gmail.com",
            icon: "warning",
          });
          console.log(error.text);
        }
      );
  };

  return (
    <section className="s2">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Get In Touch</h3>

        <form ref={formRef} onSubmit={formSubmissionHandler} id="contact-form">
          <label>Name</label>
          <input
            className="input-field"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            type="text"
            name="name"
          />
          {nameInputHasError && (
            <p className="error-text">
              Name must not be empty and have less than 40 characters
            </p>
          )}

          <label>Subject</label>
          <input
            className="input-field"
            type="text"
            name="subject"
            onChange={subjectChangeHandler}
            onBlur={subjectBlurHandler}
            value={enteredSubject}
          />
          {subjectInputHasError && (
            <p className="error-text">
              Subject must not be empty and have less than 40 characters
            </p>
          )}

          <label>Email</label>
          <input
            className="input-field"
            type="text"
            name="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />

          {emailInputHasError && <p className="error-text">Invalid Email</p>}

          <label>Message</label>
          <textarea
            className="input-field"
            type="text"
            name="message"
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            value={enteredMessage}
          ></textarea>
          {messageInputHasError && (
            <p className="error-text">
              Message must not be empty and have less than 350 characters
            </p>
          )}

          <button
            id="submit-btn"
            disabled={!formIsValid}
            ref={sendRef}
            type="submit"
          >
            Send
          </button>
          <button id="reset-btn" onClick={resetAll}>
            Reset
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
