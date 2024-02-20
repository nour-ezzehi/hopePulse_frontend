const FormAction = ({
  handleSubmit,
  type='Button',
  action='submit',
  text
}) => {
  return(
      <>
      {
          type==='Button' ?
          <button
              type={action}
              className="group flex mx-auto justify-center py-2 px-6 text-xl font-medium rounded-lg text-fafafa bg-primary hover:bg-secondary focus:outline focus:ring-4 focus:ring-offset-2 focus:ring-secondary mt-6"
              onSubmit={handleSubmit}
          >

              {text}
          </button>
          :
          <></>
      }
      </>
  );
};
export default FormAction;
