import { useFormik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  // Схема валідації за допомогою Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Number is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const { name, number } = values; // Деструктуризація значень
      onAddContact(name, number); // Передача name та number окремими аргументами
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={s.form}>
      <label className={s.label}>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={s.input}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={s.error}>{formik.errors.name}</div>
        ) : null}
      </label>

      <label className={s.label}>
        Number:
        <input
          type="tel"
          name="number"
          placeholder="Enter number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={s.input}
        />
        {formik.touched.number && formik.errors.number ? (
          <div className={s.error}>{formik.errors.number}</div>
        ) : null}
      </label>

      <button
        type="submit"
        className={s.button}
        disabled={!formik.isValid || !formik.dirty}
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
