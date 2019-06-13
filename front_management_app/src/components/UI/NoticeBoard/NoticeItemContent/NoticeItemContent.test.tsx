import React from 'react';
import { render } from '@testing-library/react'
import NoticeItemContent from './NoticeItemContent';

describe('<NoticeItemContent/>' , () => {
  const setup = (props = {}) => {
    const utils = render(<NoticeItemContent {...props}/>);
    const { getByText } = utils;
    const title = getByText('제모긴');
    const writtenDate = getByText('2019.05.10'); 
    const noticeContent = getByText('내용입니다.');
    return {
      ...utils,
      title,
      writtenDate,
      noticeContent
    }
  }

  it('has a title, writtenDate, noticeContent', () => {
    const { title , writtenDate, noticeContent} = setup();
    expect(title).toBeTruthy();
    expect(writtenDate).toBeTruthy();
    expect(noticeContent).toBeTruthy();
  })
  
})