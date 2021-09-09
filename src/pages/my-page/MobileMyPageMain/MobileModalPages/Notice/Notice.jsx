import React from 'react';
import styled from 'styled-components';

import NoticeItem from 'pages/my-page/MobileMyPageMain/MobileModalPages/Notice/NoticeItem';
import NoticeDetail from 'pages/my-page/MobileMyPageMain/MobileModalPages/Notice/NoticeDetail';
import { useHistory, Route } from 'react-router';
import MobileTabs from 'components/MobileTabs/MobileTabs';

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

const Notice = () => {
  const [selectedId, setSelectedId] = React.useState('');
  const [tab, setTab] = React.useState('notice');

  const [selectedItem, setSelectedItem] = React.useState({
    title: '',
    createdAt: '',
    contents: null,
  });

  React.useEffect(() => {
    const result = noticeList.filter(({ id }) => id === selectedId);
    setSelectedItem(result[0]);
  }, [selectedId]);

  const handleTabsChange = (value) => {
    setTab(value);
  };

  const renderNotice = () => {
    return noticeList.map(({ index, title, createdAt, id }) => {
      return (
        <NoticeItem
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
    { key: 'notice', tabTitle: '공지사항' },
    {
      key: 'event-ing',
      tabTitle: '진행중인 이벤트',
      tabContents: renderNotice,
    },
    { key: 'event-end', tabTitle: '종료된 이벤트', tabContents: renderNotice },
  ];

  return (
    <div>
      {
        <MobileTabsContainer list={list} onChange={handleTabsChange}>
          {tab === 'notice' && renderNotice()}
        </MobileTabsContainer>
      }
    </div>
  );
};

export default Notice;

const noticeList = [
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
