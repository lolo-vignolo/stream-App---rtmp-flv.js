export const formValidation = (state) => {
  const { title, description, codeToDelete } = state;
  const errors = {};

  if (!title || title.length < 3) {
    errors.title = 'Title is required';
  }

  if (!description || description.length < 3) {
    errors.description = 'Description is required';
  }

  if (!codeToDelete || codeToDelete.length === 0) {
    errors.codeToDelete = 'code is required';
  }

  return errors;
};
