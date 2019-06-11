import React from 'react';
import Layout from 'components/UI/Layout';
import Editor from 'components/Editor';



const editor: React.FC = () => {
  return (
    <Layout pageType = "Editor">
      <Editor/>
    </Layout>
  )
}
export default editor;