import ProductQnaItem from 'pages/my-page/MobileMyPageMain/MobileModalPages/ProductQna/ProductQnaItem';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
`;

const ProductQna = () => {
  const [qnaList, setQnaList] = React.useState([]);
  const [selectedQna, setSelectedQna] = React.useState('');

  const getQnaList = () => {
    setQnaList(list);
  };
  React.useEffect(() => {
    getQnaList();
  }, []);
  return (
    <Container>
      {qnaList.map((item) => {
        return (
          <ProductQnaItem
            id={item.id}
            isAnswer={item.isAnswer}
            userId={item.userId}
            title={item.title}
            createdAt={item.createdAt}
            answer={item.answer}
            setSelectedQna={setSelectedQna}
            selectedQna={selectedQna}
          />
        );
      })}
    </Container>
  );
};

export default ProductQna;

const list = [
  {
    id: '123',
    title: '안녕하세요. 문의드립니다. 너무 맛있게 잘먹었어요 진짜 맛잇네요',
    isAnswer: true,
    userId: 'qwer',
    createdAt: '2020-10-10',
    answer: '고마워요 맛잇게 먹어줘서',
  },
  {
    id: '12355zxc',
    title: '안녕하세요. 문의드립니다. 너무 맛있게 잘먹었어요',
    isAnswer: true,
    userId: 'qwer',
    createdAt: '2020-10-10',
    answer: '고마워요 맛잇게 먹어줘서',
  },
];
