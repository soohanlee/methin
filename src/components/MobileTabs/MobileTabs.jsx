import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const MobileTabs = ({ list, onChange, className, children }) => {
  return (
    <Tabs
      defaultActiveKey={list[0].key}
      onChange={onChange}
      className={className}
    >
      {list.map((item) => {
        return (
          <TabPane tab={item.tabTitle} key={item.key}>
            {children}
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default MobileTabs;

// https://ant.design/components/tabs/
