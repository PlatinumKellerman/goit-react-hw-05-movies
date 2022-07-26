import { Formik } from 'formik';
import * as yup from 'yup';
import { SearchInput, SearchButton } from './SearchForm.styled';

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
        <SearchForm>
          <SearchInput
            name="movieName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
      </Formik>
    </>
  );
}
