//-----------  Imports  -----------//

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import RouteLoader from '@miro/core-ui/lib/components/RouteLoader';
import ConnectedSwitch from '@miro/core-ui/lib/containers/ConnectedSwitch';

import DeleteConfirmBox from 'components/DeleteConfirmBox';
import CreateBatteryWrapper from 'components/CreateBatteryWrapper';

//-----------  Helpers  -----------//

const load = route => {
  return Loadable({
    loader: () => import(`./${route}/index`),
    loading: RouteLoader,
  });
};

//-----------  Router Component  -----------//

export default () => (
  <React.Fragment>
    <ConnectedSwitch>
      <Route path="/" component={load('DashboardRoute')} exact />

      {/* -----------  Studies  ----------- */}

      <Route path="/studies" component={load('StudiesRoute')} exact />
      <Route path="/studies/new" component={load('StudiesRoute')} exact />
      <Route
        path="/studies/:studyId"
        render={({ match, ...props }) => (
          <React.Fragment>
            <Route
              path={`${match.path}/`}
              component={load('StudyIndexRoute')}
              exact
            />
            <Route
              path={`${match.path}/batteries`}
              component={load('StudyBatteriesRoute')}
              exact
            />
            <Route
              path={`${match.path}/questionnaires`}
              component={load('StudyQuestionnairesRoute')}
              exact
            />

            {/* -----------  Study Particiapnts  ----------- */}

            <Route
              path={`${match.path}/participants`}
              component={load('StudyParticipantsRoute')}
              exact
            />
            <Route
              path={`${match.path}/participants/new`}
              component={load('StudyParticipantsRoute')}
              exact
            />
            <Route
              path={`${match.path}/participants/:participantId`}
              render={({ match, ...props }) => (
                <React.Fragment>
                  <Route
                    path={`${match.path}/`}
                    component={load('StudyParticipantIndexRoute')}
                    exact
                  />
                  <Route
                    path={`${match.path}/tics`}
                    component={load('StudyParticipantTicsRoute')}
                  />
                  <Route
                    path={`${match.path}/review`}
                    component={load('StudyParticipantReviewRoute')}
                  />
                </React.Fragment>
              )}
            />
          </React.Fragment>
        )}
      />

      {/* -----------  Batteries  ----------- */}

      <Route path="/batteries" component={load('BatteriesRoute')} exact />
      <Route path="/batteries/new" component={load('BatteriesRoute')} exact />
      <Route
        path="/batteries/:batteryId/"
        component={load('BatteryIndexRoute')}
        exact
      />
      <Route
        path="/batteries/:batteryId"
        render={({ match, ...props }) => (
          <CreateBatteryWrapper match={match} {...props}>
            <Route
              path={`${match.path}/activities`}
              component={load('BatteryActivitiesRoute')}
            />
            <Route
              path={`${match.path}/questionnaires`}
              component={load('BatteryQuestionnairesRoute')}
            />
            <Route
              path={`${match.path}/order`}
              component={load('BatteryOrderingRoute')}
            />
            <Route
              path={`${match.path}/preview`}
              component={load('BatteryPreviewRoute')}
            />
          </CreateBatteryWrapper>
        )}
      />

      {/* -----------  Questionnaires  ----------- */}

      <Route
        path="/questionnaires"
        component={load('QuestionnairesRoute')}
        exact
      />
      <Route
        path="/questionnaires/new"
        component={load('QuestionnairesRoute')}
        exact
      />
      <Route
        path="/questionnaires/:questionnaireId"
        render={({ match, ...props }) => (
          <React.Fragment>
            <Route
              path={`${match.path}/`}
              component={load('QuestionnaireIndexRoute')}
              exact
            />
          </React.Fragment>
        )}
      />
      <Route path="/pending_reviews" component={load('Reviews')} exact />
      <Redirect from="/*" to="/" />
    </ConnectedSwitch>
    <DeleteConfirmBox />
  </React.Fragment>
);
