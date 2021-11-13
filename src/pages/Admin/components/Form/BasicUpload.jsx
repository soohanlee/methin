import { Upload } from 'antd';
import styled from 'styled-components';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
// import './BasicUpload.css';

const CustomUpload = styled(Upload)`
  overflow: auto;
  .ant-upload-list {
    display: none;
  }
`;

const BasicUpload = ({ BtnLabel, props }) => {
  return (
    <CustomUpload {...props}>
      <BasicButton label={BtnLabel} />
    </CustomUpload>
  );
};

export default BasicUpload;
