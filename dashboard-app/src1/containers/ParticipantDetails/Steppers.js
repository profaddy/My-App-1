import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from 'components/Divider';
import StepConnector from '@material-ui/core/StepConnector';

const styles = theme => ({
  root: { width: '100%' },
  connectorActive: {
    '& $connectorLine': {
      borderColor: theme.palette.primary.main,
    },
  },
  connectorCompleted: {
    '& $connectorLine': {
      borderColor: theme.palette.primary.main,
    },
  },
  connectorLine: {
    transition: theme.transitions.create('border-color'),
    borderWidth: 8,
    marginTop: -2,
    marginLeft: -4,
  },
  vertical: {
    padding: 0,
  },
  verticalLine: {
    minHeight: 80,
  },
  connectorRoot: {
    borderColor: theme.palette.primary.main,
    borderWidth: 8,
    marginTop: -2,
  },
});

class VerticalLinearStepper extends React.Component {
  render() {
    const { classes, steps, activeState } = this.props;
    // const steps = getSteps();

    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine,
          vertical: classes.vertical,
          root: classes.connectorRoot,
          lineVertical: classes.verticalLine,
        }}
      />
    );
    if (steps.length === 0) return <div />;
    return (
      <Paper className={classes.root}>
        <div
          style={{
            position: 'relative',
            paddingRight: 24,
            paddingLeft: 24,
            width: '85%',
          }}
        >
          <div
            style={{
              minHeight: 64,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            Progress
            <Divider
              style={{ position: 'absolute', bottom: 10, width: '100%' }}
            />
          </div>
        </div>
        <Stepper
          activeStep={steps.indexOf(activeState)}
          orientation="vertical"
          connector={connector}
        >
          {steps.map(label => (
            <Step key={label} style={{ zIndex: 1 }}>
              <StepLabel>
                <Typography style={{ fontSize: 16 }}>{label}</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
