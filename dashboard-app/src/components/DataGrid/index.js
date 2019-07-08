import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from './TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Menu from '../Menu';
import View from 'assets/icons/view.svg';
import moment from 'moment';
import TablePaginationActions from './TablePaginationActionsWrapper';

function desc(a, b, orderBy) {
  let toCompareB = b[orderBy];
  let toCompareA = a[orderBy];
  if (orderBy === 'name') {
    toCompareB = b.first_name + b.last_name;
    toCompareA = a.first_name + b.last_name;
  }
  if (orderBy === 'progress') {
    toCompareB = `${b.active_state.state}: ${b.active_state.status}`;
    toCompareA = `${a.active_state.state}: ${a.active_state.status}`;
  }
  if (toCompareB < toCompareA) {
    return -1;
  }
  if (toCompareB > toCompareA) {
    return 1;
  }
  return 0;
}

function stableSort(array = [], cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const getValueOfId = (indicces, objectArray) => {
  return objectArray.filter(f => indicces.includes(f.id));
};

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 820,
  },
  tableWrapper: {
    overflowX: 'auto',
    maxHeight: 500,
  },
  head: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#fff',
    zIndex: 10,
    fontWeight: 'bolder',
    fontSize: 14,
    color: 'black',
  },
  checkboxPadding: {
    paddingLeft: 0,
  },
  selected: {
    border: '2px solid blue',
    backgroundColor: 'transparent !important',
  },
});

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: '',
    page: 0,
    rowsPerPage: this.props.rowsPerPage,
    selected: [],
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleClick = (event, id) => {
    this.setState({ selected: [id] });
    this.props.selectParticipant(getValueOfId([id], this.props.data));
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
    this.props.onPageChange(page + 1); // backend apis start page from 1
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes, data, count, studyId, ...rest } = this.props;
    const { order, orderBy, selected, rowsPerPage, page } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <TableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data ? data.length : 0}
              checkboxPadding={classes.checkboxPadding}
              rows={this.props.headers}
              classes={classes}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy)).map((n, index) => {
                const isSelected = this.isSelected(n.id);
                return (
                  <TableRow
                    hover
                    onClick={event => this.handleClick(event, n.id || index)}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isSelected}
                    classes={{
                      hover: classes.hover,
                      selected: classes.selected,
                    }}
                  >
                    <TableCell padding="none" style={{ width: 150 }}>
                      <Menu {...rest} participant={n} />
                    </TableCell>
                    <TableCell padding="none">
                      {`${n.first_name} ${n.last_name}`}
                    </TableCell>
                    <TableCell padding="none">
                      {moment
                        .utc(n.contact_date)
                        .local()
                        .format('YYYY-MM-DD')}
                    </TableCell>
                    <TableCell padding="none">{`${n.active_state.state}: ${
                      n.active_state.status
                    }`}</TableCell>
                    <TableCell padding="none">
                      <View
                        onClick={() => {
                          this.props.push(
                            `/studies/${this.props.studyId}/participants/${
                              n.id
                            }/`,
                          );
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          rowsPerPageOptions={[this.props.rowsPerPage]}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          ActionsComponent={TablePaginationActions}
        />
      </div>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
