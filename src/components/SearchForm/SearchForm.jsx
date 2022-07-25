import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

export function SearchForm({ onSubmit, onChange }) {
  const schema = yup.object().shape({
    movieName: yup.string().required('This field cannot be empty'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ movieName: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            name="movieName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
}
