//-----------  Imports  -----------//

import Styled from './styles';

import React from 'react';
// import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Button from 'components/Button';
import FormField from 'forms/FormField';
import { colors } from 'styles/variables';

//-----------  Validation  -----------//

const validate = ({ email, password, ...values }) => {
  let errors = {};

  if (!email) errors.email = 'Required';

  if (!password) errors.password = 'Required';

  return errors;
};

//-----------  Component  -----------//

const Styleguide = ({ submitting, handleSubmit, ...props }) => {
  return (
    <Styled.Styleguide>
      <Styled.ColorPalette>
        <legend>Color Palette</legend>

        {Object.keys(colors).map(key => (
          <Styled.ColorBlock key={key}>
            <Styled.ColorDot style={{ backgroundColor: colors[key] }} />
            <div>
              <h4>{key}</h4>
              <small>{colors[key]}</small>
            </div>
          </Styled.ColorBlock>
        ))}
      </Styled.ColorPalette>

      <Styled.OtherStyles>
        <fieldset>
          <legend>Typography</legend>

          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>

          <p>
            This is an example of a paraghraph. This is what long pieces of copy
            will look like when presented on screen. It can also contain various
            other types of elements, such as <em>italicized words</em>,{' '}
            <strong>bolded words</strong> and <a href="#">links</a>.
          </p>

          <small>(small text example)</small>
        </fieldset>

        <fieldset>
          <legend>Buttons</legend>

          <Button>Default</Button>
          <Button active disabled>
            Default
          </Button>
          <Button active>Active</Button>
          <br />
          <Button small>Small</Button>
          <Button small active disabled>
            Small
          </Button>
          <Button small active>
            Small
          </Button>
        </fieldset>

        <form noValidate onSubmit={handleSubmit}>
          <fieldset>
            <legend>Inputs</legend>

            <div>
              <label>Default</label>
              <input type="text" placeholder="Placeholder" />
            </div>

            <Field
              type="text"
              name="email"
              label="Default"
              component={FormField}
              placeholder="Placeholder"
              autoComplete="email"
            />

            <div>
              <label>Disabled</label>
              <input type="text" placeholder="Placeholder" disabled />
            </div>

            <Field
              type="tel"
              name="phone"
              label="Disabled"
              component={FormField}
              placeholder="Placeholder"
              autoComplete="tel-local"
              disabled
            />

            <div className="has-error">
              <label>Error</label>
              <input type="text" placeholder="Placeholder" />
            </div>

            <Field
              type="text"
              name="password"
              label="Error"
              component={FormField}
              placeholder="Placeholder"
              autoComplete="current-password"
            />
          </fieldset>

          <fieldset>
            <legend>Checkboxes</legend>

            <div className="selector-wrapper">
              <input type="checkbox" id="checkbox1" name="checkbox" />
              <label htmlFor="checkbox1">Default Label</label>
            </div>

            <div className="selector-wrapper">
              <input
                type="checkbox"
                id="checkbox2"
                name="checkbox"
                defaultChecked
              />
              <label htmlFor="checkbox2">Selected Label</label>
            </div>

            <div className="selector-wrapper">
              <input type="checkbox" id="checkbox3" name="checkbox" disabled />
              <label htmlFor="checkbox3">Disabled Label</label>
            </div>

            <div className="selector-wrapper">
              <input
                type="checkbox"
                id="checkbox4"
                name="checkbox"
                className="error"
              />
              <label htmlFor="checkbox4">Error Label</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Radio Buttons</legend>

            <div className="selector-wrapper">
              <input type="radio" id="radio1" name="radio" />
              <label htmlFor="radio1">Default Label</label>
            </div>

            <div className="selector-wrapper">
              <input type="radio" id="radio2" name="radio" defaultChecked />
              <label htmlFor="radio2">Selected Label</label>
            </div>

            <div className="selector-wrapper">
              <input type="radio" id="radio3" name="radio" disabled />
              <label htmlFor="radio3">Disabled Label</label>
            </div>

            <div className="selector-wrapper">
              <input type="radio" id="radio4" name="radio" className="error" />
              <label htmlFor="radio4">Error Label</label>
            </div>
          </fieldset>
        </form>
      </Styled.OtherStyles>
    </Styled.Styleguide>
  );
};

//-----------  Type Definitions  -----------//

Styleguide.propTypes = {};

//-----------  Export  -----------//

export default reduxForm({ form: 'styleguide', validate })(Styleguide);
