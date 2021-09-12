import DeliveryItem from './DeliveryItem';
import React from 'react';

const Delivery = () => {
  return (
    <div>
      {list.map((item) => {
        const {
          id,
          date,
          orderNumber,
          img,
          title,
          option,
          price,
          deliveryState,
          company,
        } = item;
        return (
          <DeliveryItem
            key={id}
            id={id}
            date={date}
            orderNumber={orderNumber}
            img={img}
            title={title}
            option={option}
            price={price}
            deliveryState={deliveryState}
            company={company}
          />
        );
      })}
    </div>
  );
};

export default Delivery;

const list = [
  {
    id: 1,
    date: '2021.04.27',
    orderNumber: 'ASDFASDFXDV-91237',
    img: '/assets/images/mobile/service-off-icon.svg',
    title: '인기 샐러드 간편식 도시락 모음전[닭가슴살]',
    option: '옵션: 리코타 치즈 샐러드 / 1개',
    price: '39,800',
    deliveryState: true,
    company: 'CJ대한 통운 3565423132124',
  },
];
