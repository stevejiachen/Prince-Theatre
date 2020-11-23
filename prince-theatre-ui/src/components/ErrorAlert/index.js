import React from 'react';
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Alert from '@material-ui/lab/Alert';

const ErrorAlert = (props) => {
  const { errorMessage, callback } = props;

  return (
    <Alert
      style={{width: 500, margin: 'auto'}}
      severity="error"
      action={
        <Button
          color="inherit"
          size="small"
          onClick={callback}
        >
          Retry
        </Button>
      }
    >
      {errorMessage}
    </Alert>
  );
};

ErrorAlert.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default ErrorAlert;
