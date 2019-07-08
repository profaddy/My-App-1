import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Styled from './styles';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Divider from 'components/Divider';

const styles = theme => ({
  root: {
    width: '80%',
    boxShadow: '',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    flexShrink: 0,
    textTransform: 'uppercase',
    paddingRight: '0px !important',
    fontWeight: 'bold',
  },
  expandIcon: {
    position: 'absolute',
    left: 20,
    width: 20,
  },
  summary: {
    paddingLeft: 30,
    position: 'relative',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
});

class StatusAccordion extends React.Component {
  state = {
    expanded: this.props.data[0] ? this.props.data[0].title : false,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    const { data, classes } = this.props;
    if (!data) return <></>;
    return (
      <>
        {data.map(row => (
          <ExpansionPanel
            key={row.title}
            expanded={expanded === row.title}
            onChange={this.handleChange(row.title)}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{
                content: classes.summary,
                expandIcon: classes.expandIcon,
              }}
            >
              <Typography className={classes.heading}>{row.title}</Typography>
              {expanded === row.title && (
                <Divider
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: '100%',
                  }}
                />
              )}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Styled.AccordionDetails>
                {row.details &&
                  row.details.map(rowDetails => (
                    <Styled.AccordionDetailsRow>
                      <Styled.AccordionDetailsKey>
                        <Styled.Dot
                          style={{
                            backgroundColor: 'blue',
                            marginRight: 10,
                          }}
                        />
                        {rowDetails.key}
                      </Styled.AccordionDetailsKey>
                      <div style={{ textAlign: 'left' }}>
                        {rowDetails.value && (
                          <CheckIcon
                            style={{ color: 'green' }}
                            fontSize="large"
                          />
                        )}
                        {rowDetails.value === 'pending' && (
                          <span style={{ color: 'grey' }}>
                            {rowDetails.value}
                          </span>
                        )}
                        {!rowDetails.value && (
                          <ClearIcon
                            style={{ color: 'red' }}
                            fontSize="large"
                          />
                        )}
                      </div>
                    </Styled.AccordionDetailsRow>
                  ))}
                {!row.details && `No Data Found :(`}
              </Styled.AccordionDetails>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </>
    );
  }
}

export default withStyles(styles)(StatusAccordion);
