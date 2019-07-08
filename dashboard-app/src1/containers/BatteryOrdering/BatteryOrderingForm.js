//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
import PropTypes from 'prop-types';
// import { reduxForm, Field } from 'redux-form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// import Modal from '@miro/core-ui/lib/components/Modal';
// import FormField from '@miro/core-ui/lib/forms/FormField';
// import FormSubmit from '@miro/core-ui/lib/forms/FormSubmit';
import Button from '@miro/core-ui/lib/components/Button';
// import GameCard from 'components/GameCard';
// import CategoryTabs from 'components/CategoryTabs';
// import GameDetail from 'containers/GameDetail';
// import QuestionnaireCard from 'components/QuestionnaireCard';
// import { Form } from 'redux-form';
import OrderCard from 'components/OrderCard';
import Modal from '@miro/core-ui/lib/components/Modal';

//-----------  Definitions ----------//

const getItemStyle = (isDragging, draggableStyle) => ({
  // // some basic styles to make the items look a bit nicer
  margin: `0 0 0.5rem 0`,
  // styles we need to apply on draggables
  ...draggableStyle,
});

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  let result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  result = result.map((element, index) => ({ ...element, counter: index }));

  return result;
};

//-----------  Component  -----------//
export class BatteryOrderingForm extends React.Component {
  state = {
    order: this.props.order,
  };

  onBeforeDragStart = () => {
    /*...*/
  };

  onDragStart = () => {
    /*...*/
  };

  onDragUpdate = args => {
    // console.log(args);
    /*...*/
  };

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const order = reorder(
      this.state.order,
      result.source.index,
      result.destination.index,
    );

    this.setState({
      order,
    });

    this.props.reorderItems(order);

    // TODO: Dispatch Save
  };

  render() {
    const {
      activities,
      questionnaires,
      editSuccess,
      requestEditBattery,
      batterySaveObj,
    } = this.props;

    const { order } = this.state;

    return (
      <Styled.BatteryOrderingForm>
        <Styled.Heading>Choose Ordering</Styled.Heading>
        <Styled.Subheading>
          Drag-and-drop to reorder this battery.
        </Styled.Subheading>
        <Styled.CardContainer>
          <DragDropContext
            onDragUpdate={this.onDragUpdate}
            onDragEnd={this.onDragEnd}
          >
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div ref={provided.innerRef}>
                  {order.map((element, index) => {
                    // generate a unique key per item (concatenate type with id)
                    const key = `${element.type}${element.activity}${
                      element.questionnaire
                    }`;

                    const orderElement =
                      element.type === 'activity'
                        ? activities.find(
                            activity => activity.id === element.activity,
                          )
                        : questionnaires.find(
                            questionnaire =>
                              questionnaire.id === element.questionnaire,
                          );
                    if (!orderElement) {
                      return undefined;
                    }
                    return (
                      <Draggable key={key} draggableId={key} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style,
                            )}
                          >
                            <OrderCard
                              isDragging={snapshot.isDragging}
                              key={index}
                              index={index}
                              name={orderElement.name}
                              duration={orderElement.duration}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Styled.CardContainer>
        <Styled.Footer>
          <Button
            to={`/batteries/${
              this.props.match.params.batteryId
            }/questionnaires/`}
          >
            Back
          </Button>
          <Button
            onClick={() =>
              requestEditBattery(
                this.props.match.params.batteryId,
                batterySaveObj,
              )
            }
          >
            Save
          </Button>
        </Styled.Footer>
        <Modal
          label="Save Success"
          isOpen={!!editSuccess}
          // onRequestClose={() => showGameDetailModal(false)}
          contentStyles={{ maxWidth: '88rem' }}
          overlayStyles={{}}
        >
          <div>
            <h1>Battery successfully created</h1>
            <div>
              <Button to={`/batteries/`}>Done</Button>
              <Button to={`/batteries/new`}>Create another battery</Button>
            </div>
          </div>
        </Modal>
      </Styled.BatteryOrderingForm>
    );
  }
}

//-----------  Type Definitions  -----------//

BatteryOrderingForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
};

//-----------  Export  -----------//

export default BatteryOrderingForm;
