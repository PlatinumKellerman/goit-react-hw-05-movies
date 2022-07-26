import { Formik } from 'formik';
import * as yup from 'yup';
import { SearchInput, SearchButton, StyledForm } from './SearchForm.styled';

export function SearchForm({ onSubmit }) {
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
        <StyledForm>
          <SearchInput
            name="movieName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <SearchButton type="submit">Search</SearchButton>
        </StyledForm>
      </Formik>
    </>
  );
}
