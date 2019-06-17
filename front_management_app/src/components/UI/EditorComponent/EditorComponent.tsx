import React, { useState, useEffect, useRef, useCallback } from 'react';
import classes from './EditorComponent.module.scss';
import { Input, Button } from 'antd';
import UploadCompoent from './UploadComponent';

const EditorComponent: React.FC = () => {
  const { TextArea } = Input;
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  let [inWidth, setinWidth] = useState();
  const widthTest = useRef(null);
  const onChangeTitle = useCallback((e: any) => {
    console.log(title)
    setTitle(e.target.value);
  }, [title]);
  const onChangeContent = useCallback((e: any) => {
    console.log( content)
    setContent(e.target.value);
  }, [content]);
  useEffect(() => {
    if(widthTest.current) {
    //  widthTest.current.querySelector('antd-input')
    }
    setinWidth(window.innerWidth)
  },[widthTest]);
  return (
    <>
      <div className={classes.TextAreaWrpper}>
        <TextArea
          ref = {widthTest}
          placeholder="제목을 입력해주세요"
          autosize
          onChange={onChangeTitle}
          autoFocus = {true}
        />
        <TextArea
          onChange={onChangeContent}
          placeholder="Autosize height with minimum and maximum number of lines"
          autosize={{ minRows: 10, maxRows: 10 }}
        />
      </div>
      <UploadCompoent />
      <Button type="primary">게시</Button>
    </>
  );
};
export default EditorComponent;
