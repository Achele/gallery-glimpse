import Input from "./Input";

const FormikControl = (props) => {
  const { ...rest } = props;

  // Always return the Input component
  return <Input {...rest} />;
};

export default FormikControl;
