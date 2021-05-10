import React from 'react';
import styled from 'styled-components';
import { Calendar, Input, Popover } from 'antd';
import moment from 'moment';
import { DateFormat } from 'configs/config';

const Container = styled.div`
  position: relative;
`;

const CalendarContainer = styled.div`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
`;

const CustomCalendar = ({ onSelect, onPanelChange, value, selectedValue }) => {
  const content = (
    <CalendarContainer className="site-calendar-customize-header-wrapper">
      <Calendar
        onPanelChange={onPanelChange}
        value={value}
        onSelect={onSelect}
        fullscreen={false}
      />
    </CalendarContainer>
  );

  return (
    <Container>
      <Popover placement="bottomLeft" content={content} trigger="click">
        <Input
          value={
            selectedValue && moment(selectedValue).format(DateFormat.Default)
          }
        />
      </Popover>
    </Container>
  );
};

export default CustomCalendar;
