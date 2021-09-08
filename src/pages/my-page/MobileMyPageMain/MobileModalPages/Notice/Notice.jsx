import React from 'react';
import styled from 'styled-components';

import NoticeItem from 'pages/my-page/MobileMyPageMain/MobileModalPages/Notice/NoticeItem';
import NoticeDetail from 'pages/my-page/MobileMyPageMain/MobileModalPages/Notice/NoticeDetail';
import { useHistory, Route } from 'react-router';

const Notice = () => {
  const [selectedId, setSelectedId] = React.useState('');

  const [selectedItem, setSelectedItem] = React.useState({
    title: '',
    createdAt: '',
    contents: null,
  });

  console.log('selectedId', selectedId);

  React.useEffect(() => {
    const result = noticeList.filter(({ id }) => id === selectedId);
    console.log('selectedId', selectedId);
    console.log('result', result);
    setSelectedItem(result[0]);
  }, [selectedId]);

  return (
    <div>
      {!selectedId &&
        noticeList.map(({ index, title, createdAt, id }) => {
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
        })}
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
