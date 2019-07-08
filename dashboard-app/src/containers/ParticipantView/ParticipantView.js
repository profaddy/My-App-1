import React from 'react';
import ParticipantGrid from 'components/DataGrid';
import FilterTabs from './FilterTabs';
import Styled from './style';
import Toolbar from './Toolbar';
import { ROWS_PER_PAGE } from '../../constants';
import RouteLoader from '@miro/core-ui/lib/components/RouteLoader';

const filters = [
  { name: 'all_participants', label: 'All Participants' },
  { name: 'potential_participants', label: 'Potential Participants' },
  { name: 'eligible_participants', label: 'Eligible Participants' },
  { name: 'ineligible_participants', label: 'Ineligible Participants' },
];

const headers = [
  { id: 'edit', numeric: false, disablePadding: false, label: 'Edit' },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'contact_date',
    numeric: false,
    disablePadding: true,
    label: 'Contact Date',
  },
  { id: 'progress', numeric: false, disablePadding: true, label: 'Progress' },
  { id: 'details', numeric: false, disablePadding: true, label: 'Details' },
];

export default class ParticipantComponent extends React.Component {
  state = {
    selectedFilter: filters[0],
  };

  componentDidMount() {
    const studyId = this.props.match.params.studyId;
    this.props.requestParticipants(studyId, 1, ROWS_PER_PAGE);
  }

  handleFilterChange = filterIndex =>
    this.setState({ selectedFilter: filters[filterIndex] });

  handleParticipantFormSubmit = (values, props) => {
    this.props.requestAddParticipant(values, props);
  };

  handlePageChange = page => {
    const studyId = this.props.match.params.studyId;
    this.props.requestParticipants(studyId, page, ROWS_PER_PAGE);
  };

  render() {
    return (
      <Styled.RootDiv>
        <Styled.FilterDiv>
          <FilterTabs
            filters={filters}
            onFilterChange={this.handleFilterChange}
          />
        </Styled.FilterDiv>
        <Toolbar
          selectedFilter={this.state.selectedFilter}
          onParticpantFormSubmit={this.handleParticipantFormSubmit}
          onParticpantFormSubmitSuccess={
            this.props.participantFormSubmitSuccess
          }
          {...this.props}
        />
        {this.props.isLoading && (
          <RouteLoader loadingText="Getting Participants" />
        )}
        {!this.props.isLoading && this.props.data.length === 0 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: 300,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>Please add your first participant!</div>
          </div>
        )}
        {!this.props.isLoading && this.props.data.length !== 0 && (
          <ParticipantGrid
            headers={headers}
            data={this.props.data}
            selectedParticipant={this.props.selectedParticipant}
            selectParticipant={this.props.selectParticipant}
            unselectParticipant={this.props.unselectParticipant}
            count={this.props.count}
            onPageChange={this.handlePageChange}
            rowsPerPage={ROWS_PER_PAGE}
            onParticipantDelete={id =>
              this.props.deleteParticipant(this.props.match.params.studyId, id)
            }
            studyId={this.props.match.params.studyId}
            {...this.props}
          />
        )}
      </Styled.RootDiv>
    );
  }
}
