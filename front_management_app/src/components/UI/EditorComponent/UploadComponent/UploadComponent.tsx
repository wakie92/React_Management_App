import React from 'react';
import classes from './UploadCompoent.module.scss';
import { Upload, Button, Icon } from 'antd';

const UploadCompoent: React.FC = () => {
  const fileList = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ];
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [...fileList],
  };

  return (
    <div>
      <Upload>
        {/* <Upload {...props}> */}
        <Button>
          <Icon type="upload" /> Upload
        </Button>
      </Upload>
    </div>
  );
};
export default UploadCompoent;
