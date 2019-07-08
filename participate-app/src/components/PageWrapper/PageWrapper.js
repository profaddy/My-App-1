//-----------  Imports  -----------//

import Styled    from './styles'

import React     from 'react'
import PropTypes from 'prop-types'

//-----------  Component  -----------//

class PageWrapper extends React.Component {

  componentDidMount(){
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  }

  //-----------  HTML Render  -----------//

  render(){
    const { title, action, children, ...props } = this.props

    return (
      <Styled.PageWrapper {...props}>
        <Styled.PageHeader>
          <Styled.PageTitle>{title}</Styled.PageTitle>
          {action && (
            <Styled.PageAction>{action}</Styled.PageAction>
          )}
        </Styled.PageHeader>
        <Styled.PageContent>
          {children}
        </Styled.PageContent>
      </Styled.PageWrapper>
    )
  }
}

//-----------  Type Definitions  -----------//

PageWrapper.propTypes = {
  title    : PropTypes.string.isRequired,
  actiion  : PropTypes.node,
  children : PropTypes.node.isRequired
}

//-----------  Export  -----------//

export default PageWrapper
