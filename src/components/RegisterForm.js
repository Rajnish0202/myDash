import React, { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmIsValid, setPasswordConfirmIsValid] = useState(false);
  const [passwordConfirmTouched, setPasswordConfirmTouched] = useState(false);
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [check, setCheck] = useState("");
  const [checkIsValid, setCheckIsValid] = useState(false);
  const [checkTouched, setCheckTouched] = useState(false);

  let formIsValid = false;

  if (
    emailIsValid &&
    passwordIsValid &&
    passwordConfirmIsValid &&
    nameIsValid &&
    phoneIsValid &&
    checkIsValid
  ) {
    formIsValid = true;
  }

  // ===============================Email Handler=================================================
  const emailInputHandler = (e) => {
    setEmail(e.target.value);

    if (e.target.value.trim() !== "") {
      setEmailIsValid(true);
    }
  };

  const emailInputBlurHandler = (e) => {
    setEmailTouched(true);
    if (email.trim() === "") {
      setEmailIsValid(false);
    }
  };

  // ==============================================================================================
  // ===============================Password Handler=================================================
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length === 6) {
      setPasswordIsValid(true);
    }
  };

  const passwordInputBlurHandler = (e) => {
    setPasswordTouched(true);
    if (password.length <= 5) {
      setPasswordIsValid(false);
    }
  };

  // ==============================================================================================
  // ===============================Confirm Password Handler=================================================
  const passwordConfirmInputHandler = (e) => {
    setPasswordConfirm(e.target.value);
    if (e.target.value.length === 6) {
      setPasswordConfirmIsValid(true);
    }
  };

  const passwordConfirmInputBlurHandler = (e) => {
    setPasswordConfirmTouched(true);
    if (passwordConfirm !== password) {
      setPasswordConfirmIsValid(false);
    }
  };

  // ==============================================================================================
  // ===============================Username Handler=================================================
  const nameInputHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      setNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (e) => {
    setNameTouched(true);
    if (name.trim() === "") {
      setNameIsValid(false);
    }
  };

  // ==============================================================================================
  // ===============================Phone Handler=================================================
  const phoneInputHandler = (e) => {
    setPhone(e.target.value);
    if (e.target.value.trim() !== "") {
      setPhoneIsValid(true);
    }
  };

  const phoneInputBlurHandler = (e) => {
    setPhoneTouched(true);
    if (name.trim() === "") {
      setPhoneIsValid(false);
    }
  };

  // ==============================================================================================
  // ===============================Phone Handler=================================================
  const checkInputHandler = (e) => {
    setCheck(e.target.value);
    if (e.target.value === "on") {
      setCheckIsValid(true);
    }
  };

  const checkInputBlurHandler = (e) => {
    setCheckTouched(true);
    if (check !== "on") {
      setCheckIsValid(false);
    }
  };

  // ==============================================================================================

  // ==================================Form Handler =================================================

  const formSubmitHanlder = (e) => {
    e.preventDefault();

    setEmailTouched(true);
    setPasswordTouched(true);
    setPasswordConfirmTouched(true);
    setNameTouched(true);
    setPhoneTouched(true);
    setCheckTouched(true);

    if (email.trim() === "") {
      setEmailIsValid(false);
      return;
    }

    if (password.trim() === "") {
      setPasswordIsValid(false);
      return;
    }

    if (passwordConfirm.trim() === "") {
      setPasswordConfirmIsValid(false);
      return;
    }

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }

    if (phone.trim() === "") {
      setPhoneIsValid(false);
      return;
    }

    if (check !== "on") {
      setCheckIsValid(false);
      return;
    }

    setEmailIsValid(true);
    console.log(email);
    setEmail(" ");
    setEmailTouched(false);

    setPasswordIsValid(true);
    console.log(password);
    setPassword(" ");
    setPasswordTouched(false);

    setPasswordConfirmIsValid(true);
    console.log(passwordConfirm);
    setPasswordConfirm(" ");
    setPasswordConfirmTouched(false);

    setNameIsValid(true);
    console.log(name);
    setName(" ");
    setNameTouched(false);

    setPhoneIsValid(true);
    console.log(phone);
    setPhone(" ");
    setPhoneTouched(false);

    setCheckIsValid(true);
    console.log(check);
    setCheck(" ");
    setCheckTouched(false);
  };

  // ======================================================================================

  const emailInputIsInvalid = !emailIsValid && emailTouched;
  const passwordInputIsInvalid = !passwordIsValid && passwordTouched;
  const passwordConfirmInputIsInvalid =
    !passwordConfirmIsValid && passwordConfirmTouched;

  const nameInputIsInvalid = !nameIsValid && nameTouched;
  const phoneInputIsInvalid = !phoneIsValid && phoneTouched;
  const checkInputIsInvalid = !checkIsValid && checkTouched;

  const emailInputClasses = emailInputIsInvalid
    ? "formInput invalid"
    : "formInput";

  const passwordInputClasses = passwordInputIsInvalid
    ? "formInput invalid"
    : "formInput";

  const passwordConfirmInputClasses = passwordConfirmInputIsInvalid
    ? "formInput invalid"
    : "formInput";

  const nameInputClasses = nameInputIsInvalid
    ? "formInput invalid"
    : "formInput";

  const phoneInputClasses = phoneInputIsInvalid
    ? "formInput invalid"
    : "formInput";

  const submitButtonHandler = () => {
    if (formIsValid) {
      window.location.href = "/home";
    }
  };

  return (
    <div className='form'>
      <div className='form_center'>
        <form onSubmit={formSubmitHanlder}>
          <div className='form_heading'>
            <h2>Create an account</h2>
          </div>
          <div className={emailInputClasses}>
            <label htmlFor='email'>Your email address</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={emailInputHandler}
              onBlur={emailInputBlurHandler}
            />
            {emailInputIsInvalid && (
              <p className='alert'>Please enter a valid email!</p>
            )}
          </div>
          <div className={passwordInputClasses}>
            <label htmlFor='password'>Your password</label>
            <input
              type='password'
              name='password'
              id='password'
              maxLength={15}
              onChange={passwordInputHandler}
              onBlur={passwordInputBlurHandler}
            />
            {passwordInputIsInvalid && (
              <p className='alert'>
                Password must not be empty or more than 5 characters!
              </p>
            )}
          </div>
          <div className={passwordConfirmInputClasses}>
            <label htmlFor='confirm_password'>Confirm your password</label>
            <input
              type='password'
              name='confirm_password'
              id='confirm_password'
              maxLength={15}
              onChange={passwordConfirmInputHandler}
              onBlur={passwordConfirmInputBlurHandler}
            />

            {passwordConfirmInputIsInvalid && (
              <p className='alert'>Confirm password must be same!</p>
            )}
          </div>
          <div className={nameInputClasses}>
            <label htmlFor='username'>Your full name</label>
            <input
              type='text'
              name='username'
              id='username'
              onChange={nameInputHandler}
              onBlur={nameInputBlurHandler}
            />
            {nameInputIsInvalid && (
              <p className='alert'>Username must not be empty!</p>
            )}
          </div>
          <div className={phoneInputClasses}>
            <label htmlFor='phone'>Your phone number</label>
            <input
              type='text'
              name='phone'
              id='phone'
              maxLength={10}
              onChange={phoneInputHandler}
              onBlur={phoneInputBlurHandler}
            />
            {phoneInputIsInvalid && (
              <p className='alert'>Phone must not be empty!</p>
            )}
          </div>
          <div className='checkbox'>
            <input
              type='checkbox'
              id='checkbox'
              onClick={checkInputHandler}
              onBlur={checkInputBlurHandler}
            />
            <span>I read and agree Terms and Conditions</span>
          </div>
          {checkInputIsInvalid && (
            <p className='alert'>Please check the box!</p>
          )}

          <div className='buttonContainer'>
            <button onClick={submitButtonHandler}>Create account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
