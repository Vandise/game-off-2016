export const UndefinedFunction = () => {
  return {
    name: "Undefined Function",
    message: "Call to undefined function. System haulted.",
  };
};

export const InvalidParameters = (message) => {
  return {
    name: "Invalid Parameters",
    message,
  };
};

export const UndefinedVariable = (variableName) => {
  return {
    name: "Undefined Variable",
    message: `Variable ${variableName} is undefined`
  };
};