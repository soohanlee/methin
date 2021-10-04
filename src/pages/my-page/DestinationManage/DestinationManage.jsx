import * as React from 'react';
import { getUserAddressList } from 'apis/delivery';
import { Empty, message } from 'antd';

const DestinationManage = () => {
  const [deliveryList, setDeliveryList] = React.useState([]);
  const [listCount, setListCount] = React.useState(0);

  const getAddressList = async () => {
    try {
      const response = await getUserAddressList();
      if (response.data && response.data.message === 'success') {
        setDeliveryList(response.data.data.list);
        setListCount(response.data.data.count);
      }
    } catch (e) {
      message.error('새로고침 후 시도해주세요.');
    }
  };

  const renderDeliveryList = () => {
    if (deliveryList && deliveryList.length === 0) {
      return <Empty />;
    } else {
      return (
        deliveryList &&
        deliveryList.map((item) => {
          const {
            address_main,
            address_sub,
            created_at,
            id,
            is_default,
            name,
            user_id,
            zip_code,
          } = item;
          return <div>{item.name}</div>;
        })
      );
    }
  };

  React.useEffect(() => {
    getAddressList();
  }, []);

  return (
    <div>
      배송지 관리
      {renderDeliveryList()}
      {listCount}
    </div>
  );
};

export default DestinationManage;
