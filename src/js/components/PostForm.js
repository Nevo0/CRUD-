import React from "react";
import { Field, reduxForm } from "redux-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "5%",
    transform: "translate(-50%, -50%)"
  }
};

const validate = (values, postList) => {
  console.log(values);

  const errors = {};
  if (!values.post_title) {
    errors.post_title = "Tytuł jest pusta";
  } else if (values.post_title.length < 3) {
    errors.post_title = "Tytuł musi mieć conajmniej 3 znaki";
  } else if (values.post_title.length > 50) {
    errors.post_title = "Nie przesadzaj z długościa tytułu";
  }

  if (!values.post_content) {
    errors.post_content = "Teks jest wymagany";
  } else if (values.post_content.length < 50) {
    errors.post_content = "coś krotki ten artykuł, postaraj się(50 znaków)";
  } else if (values.post_content.length > 5050) {
    errors.post_content = "Nie przesadzaj z długościa artykuł";
  }
  if (!values.post_status) {
    errors.post_status = "Zaznacz status";
  }

  return errors;
};

const warn = values => {
  const warnings = {};
  if (!values.post_autor) {
    warnings.post_autor = "Podaj swoje imię :)";
  }
  return warnings;
};

const renderField = ({ input, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

Modal.setAppElement("#root");

let PostForm = props => {
  const {
    isOpenModal,
    onCloseModal,
    handleSubmit,
    initialValues,
    load,
    pristine,
    reset,
    submitting
  } = props;
  // console.log(props.initialValues);

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={onCloseModal}
      contentLabel="Dodaj Post"
      style={customStyles}
    >
      <h2>Dodaj Nowy Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span htmlFor="post_title" className="input-group-text">
              Tytuł
            </span>
            <Field
              className="input-group-text"
              name="post_title"
              component="input"
              type="text"
              component={renderField}
            />
          </div>
        </div>
        <div className="input-group ">
          <div className="input-group-prepend">
            <span className="input-group-text" htmlFor="post_content">
              Tekst
            </span>
            <Field
              name="post_content"
              component="textarea"
              component={renderField}
            />
          </div>
        </div>
        <label>Status</label>
        <div className="input-group mb-3">
          <label>
            <Field
              name="post_status"
              component="input"
              type="radio"
              value="private"
            />
            Prywatny
          </label>
          <label>
            <Field
              name="post_status"
              component="input"
              type="radio"
              value="public"
              // component={renderField}
            />
            Publiczny
          </label>
        </div>

        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span htmlFor="post_autor" className="input-group-text">
              Autor
            </span>
            <Field
              name="post_autor"
              component="input"
              component={renderField}
              type="text"
            />
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <input
            type="submit"
            value="zapisz"
            disabled={pristine || submitting}
          />
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
          <button onClick={onCloseModal}>zamknij</button>
          <button className="btn btn-primary btn-sm mx-1 " type="submit">
            Dodaj
          </button>

          <button
            className="btn btn-secondary btn-sm mx-1"
            onClick={onCloseModal}
          >
            Zamknij
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default reduxForm({
  // a unique name for the form
  form: "newPost",
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(PostForm);