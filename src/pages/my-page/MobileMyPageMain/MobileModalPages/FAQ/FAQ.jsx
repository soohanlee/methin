import React from 'react';
import styled from 'styled-components';

import MobileTabs from 'components/MobileTabs/MobileTabs';
import FAQItem from 'pages/my-page/MobileMyPageMain/MobileModalPages/FAQ/FAQItem.jsx';

const MobileTabsContainer = styled(MobileTabs)`
  &.ant-tabs {
    padding: 1rem;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn,
  .ant-tabs-tab:hover {
    color: ${(props) => props.theme.MAIN};
  }
  .ant-tabs-ink-bar {
    background: ${(props) => props.theme.MAIN};
  }
  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 0 0 14px;
  }
  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    border: 0;
  }
`;

const FAQ = () => {
  const [selectedId, setSelectedId] = React.useState('');
  const [tab, setTab] = React.useState('faq');

  const [selectedItem, setSelectedItem] = React.useState({
    title: '',
    createdAt: '',
    contents: null,
  });

  const handleTabsChange = (value) => {
    setTab(value);
  };

  const renderFAQ = () => {
    return FAQList.map(({ index, title, createdAt, id }) => {
      return (
        <FAQItem
          index={index}
          title={title}
          createdAt={createdAt}
          setSelectedId={setSelectedId}
          id={id}
          key={id}
        />
      );
    });
  };

  const list = [
    { key: 'faq', tabTitle: '주문 결제' },
    {
      key: 'delivery',
      tabTitle: '배송',
    },
    { key: 'cancel', tabTitle: '취소 반품' },
    { key: 'other', tabTitle: '기타' },
  ];

  return (
    <div>
      {
        <MobileTabsContainer list={list} onChange={handleTabsChange}>
          {tab === 'faq' && renderFAQ()}
        </MobileTabsContainer>
      }
    </div>
  );
};

export default FAQ;

const FAQList = [
  {
    id: 1,
    index: 1,
    title: '강남 스토어 오픈예정일',
    createdAt: '2021.04.07',
    contents: '하하하하하',
  },
  {
    id: 2,
    index: 2,
    title: '강남 스토어 오픈예정일',
    createdAt: '2021.04.07',
    contents: '하하하하하',
  },
  {
    id: 3,
    index: 3,
    title: '강남 스토어 오픈예정일',
    createdAt: '2021.04.07',
    contents: '하하하하하',
  },
  {
    id: 4,
    index: 4,
    title: '강남 스토어 오픈예정일',
    createdAt: '2021.04.07',
    contents: '하하하하하',
  },
];
