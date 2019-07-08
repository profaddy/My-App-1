//-----------  Imports  -----------//

import React                   from 'react'
import { shallow }             from 'enzyme'

import AudioBlock              from './index'
import VolumeIcon              from './VolumeIcon'
import TimeDisplay             from './TimeDisplay'

import { audioAssignmentMock } from 'models/assignments/__mocks__/api'

//-----------  Definitions  -----------//

const map = {}
document.addEventListener = jest.fn((event, cb) => {
  map[event] = cb
})

const audioFile = audioAssignmentMock(true)

const component = shallow(
  <AudioBlock
    url={audioFile.audio_file}
    loop={false}
    muted={false}
    volume={1}
    active={true}
    playing={false}
    stopPlay={() => {}}
    startPlay={() => {}}
    togglePlay={() => {}}
    toggleMuted={() => {}}
    handleVolume={() => {}}
  />
)

const timeDisplay = shallow(<TimeDisplay seconds = {123456} />)
const volumeIcon  = shallow(<VolumeIcon />)

const fwrdEvt  = { code: 'Period', ctrlKey: true }
const bwrdEvt  = { code: 'Comma', ctrlKey: true }
const resetEvt = { code: 'Slash', ctrlKey: true }
const seekEvt  = { target: { value: 0.5 }}

component.instance().player.current = { seekTo: () => {} }

//-----------  Audio Block Tests  -----------//

describe('<AudioBlock />', () => {
  it('renders', () => {
    expect(component.length).toBe(1)
  })

  it('moves ahead 5 seconds on ctrl + >', () => {
    component.setState({ duration: 100 })
    map.keydown(fwrdEvt)

    expect(component.state().played).toEqual(5/100)
  })

  it('moves backwards 5 seconds on ctrl + <', () => {
    component.setState({ played: 0.5 })
    map.keydown(bwrdEvt)

    expect(component.state().played).toEqual(45/100)
  })

  it('retruns to start on ctrl + /', () => {
    component.setState({ played: 0.5 })
    map.keydown(resetEvt)

    expect(component.state().played).toEqual(0)
  })

  it('sets seeking state on range slider mouse down', () => {
    component.find('VisualRange').first().props().onMouseDown()

    expect(component.state().seeking).toEqual(true)
  })

  it('sets seeking state on range slider mouse up', () => {
    component.find('VisualRange').first().props().onMouseUp(seekEvt)

    expect(component.state().seeking).toEqual(false)
  })

  it('sets played state on range slider change', () => {
    component.find('VisualRange').first().props().onChange(seekEvt)

    expect(component.state().played).toEqual(0.5)
  })
})

//-----------  Time Display Tests  -----------//

describe('<TimeDisplay />', () => {
  it('renders', () => {
    expect(timeDisplay.length).toBe(1)
  })
})

//-----------  Volume Icon Tests  -----------//

describe('<VolumeIcon />', () => {
  it('renders', () => {
    expect(volumeIcon.length).toBe(1)
  })
})