import React from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from '@material-ui/icons/ArrowBackIos';
import ArrowRight from '@material-ui/icons/ArrowForwardIos';
import withTheme from '@material-ui/core/styles/withTheme';
import IconButton from '@material-ui/core/IconButton';

/**
 * @ignore - internal component.
 */
class TablePaginationActions extends React.Component {
  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  render() {
    const {
      backIconButtonProps,
      count,
      nextIconButtonProps,
      onChangePage,
      page,
      rowsPerPage,
      theme,
      ...other
    } = this.props;

    return (
      <div {...other}>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          color={page === 0 ? 'inherit' : 'primary'}
          {...backIconButtonProps}
        >
          {theme.direction === 'rtl' ? <ArrowRight /> : <ArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          color={
            page >= Math.ceil(count / rowsPerPage) - 1 ? 'inherit' : 'primary'
          }
          {...nextIconButtonProps}
        >
          {theme.direction === 'rtl' ? <ArrowLeft /> : <ArrowRight />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  backIconButtonProps: PropTypes.object,
  count: PropTypes.number.isRequired,
  nextIconButtonProps: PropTypes.object,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default withTheme()(TablePaginationActions);
