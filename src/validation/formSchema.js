import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters.")
    .required("Name is required."),

  size: yup
    .string()
    .oneOf(
      ["small", "medium", "large", "extra-large"],
      "Pizza size is required."
    ),

  address: yup
    .string()
    .min(10, "Address needed to fill the order.")
    .required("Address is required."),
  
  specialInstructions: yup.string(),
});

export default formSchema;