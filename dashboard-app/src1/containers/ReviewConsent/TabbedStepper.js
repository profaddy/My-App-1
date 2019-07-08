import React from 'react';
import vars from '@miro/core-ui/lib/styles/variables';
import ArrowRight from '@material-ui/icons/ArrowForwardIos';

export default ({ data, activeIndex, style }) => (
  <div style={{ display: 'flex', ...style, fontSize: 21 }}>
    {data.map((d, index) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          color: index <= activeIndex ? vars.blueBright : vars.grayLighter,
          width: index === data.length - 1 ? '100%' : 'auto',
        }}
      >
        <div
          style={{
            padding: '5px 5px 10px 0',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '100%',
            }}
          >
            <div
              style={{
                textAlign: 'start',
                whiteSpace: 'nowrap',
                paddingLeft: index === 0 ? 0 : 20,
              }}
            >
              {d}
            </div>
            {index !== data.length - 1 && (
              <ArrowRight style={{ marginLeft: 20 }} />
            )}
          </div>
        </div>
        <div
          style={{
            border: `2px solid ${
              index <= activeIndex ? vars.blueBright : vars.grayLighter
            }`,
          }}
        />
      </div>
    ))}
  </div>
);
