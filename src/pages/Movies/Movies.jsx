import { Formik, Field } from 'formik';
import * as yup from 'yup';

export function Movies() {
  const schema = yup.object().shape({
    movieName: yup.string().required('This field cannot be empty'),
  });

  return (
    <>
      <Formik initialValues={{ movieName: '' }} validationSchema={schema}>
        <form>
          <Field
            name="movieName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button></button>
        </form>
      </Formik>
    </>
  );
}
