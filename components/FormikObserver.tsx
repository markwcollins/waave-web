import { useFormikContext } from "formik";
import { useEffect } from "react";


const FormikObserver = <T extends unknown>({
  onChange
}: {
  onChange: (values: T) => any
}) => {
  const { values } = useFormikContext<T>()
  useEffect(() => {
    onChange(values as T)
  }, [ onChange, values ])
  return null
};

export default FormikObserver