import { useState } from "react";
import { useFormik } from "formik";

const useFormikForm = (initialValues, validations, onSubmitCallback) => {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validations(),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (formValues) => {
      try {
        setRes(null);
        setLoading(true);
        await onSubmitCallback(formValues, setRes);
      } finally {
        setLoading(false);
      }
    },
  });

  return { ...formik, res, loading };
};

export { useFormikForm };
