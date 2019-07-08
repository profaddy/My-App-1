//-----------  Imports  -----------//

import React                   from 'react'
import { shallow }             from 'enzyme'
import { MemoryRouter }        from 'react-router-dom'

import AudioHandler            from './index'

import { audioAssignmentMock } from 'models/assignments/__mocks__/api'

//-----------  Definitions  -----------//

const map = {}
document.addEventListener = jest.fn((event, cb) => {
  map[event] = cb
})

const testUrl    = '/anything/goes'
const audioFiles = new Array(5).fill().map(() => audioAssignmentMock(true))

const wrapper = shallow(
  <MemoryRouter>
    <AudioHandler
      currentId={audioFiles[0].id}
      audioFiles={audioFiles}
      canAdvance={true}
      nextUrl={testUrl}
    />
  </MemoryRouter>
)

const component = wrapper.dive().dive()

const playEvt = { code: 'Space', ctrlKey: true }
const muteEvt = { code: 'KeyM', ctrlKey: true }

//-----------  Tests  -----------//

describe('<AudioHandler />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1)
  })

  it('marks the first audio block as active on default', () => {
    component.find('AudioBlock').forEach((block, index) => {
      expect(block.props().active).toEqual((0 === index))
    })
  })

  it('marks the correct audio block as active on URL change', () => {
    component.setProps({ currentId: audioFiles[3].id })

    component.find('AudioBlock').forEach((block, index) => {
      expect(block.props().active).toEqual((3 === index))
    })
  })

  it('renders the correct next module link (with nextURL provided)', () => {
    const linkHref = component.find('Link').props().to
    const expected = testUrl

    expect(linkHref).toEqual(expected)
  })

  it('renders the correct next module link (with no nextURL provided)', () => {
    component.setProps({ nextUrl: undefined })

    const linkHref = component.find('Link').props().to
    const expected = '/'

    expect(linkHref).toEqual(expected)
  })

  it('handles start event', () => {
    component.find('AudioBlock').first().props().startPlay()

    expect(component.state().playing).toEqual(true)
  })

  it('handles stop event', () => {
    component.find('AudioBlock').first().props().stopPlay()

    expect(component.state().playing).toEqual(false)
  })

  it('handles volume event', () => {
    component.find('AudioBlock').first().props().handleVolume({ target: { value: 0.675 }})

    expect(component.state().volume).toEqual(0.675)
  })

  it('toggles play on ctrl + spacebar', () => {
    expect(component.state().playing).toEqual(false)
    map.keydown(playEvt)

    expect(component.state().playing).toEqual(true)
    map.keydown(playEvt)

    expect(component.state().playing).toEqual(false)
  })

  it('toggles mute on ctrl + m', () => {
    expect(component.state().muted).toEqual(false)
    map.keydown(muteEvt)

    expect(component.state().muted).toEqual(true)
    map.keydown(muteEvt)

    expect(component.state().muted).toEqual(false)
  })
})
