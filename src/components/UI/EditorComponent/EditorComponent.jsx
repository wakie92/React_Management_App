import React , {Component} from 'react';
import classes from './EditorComponent.module.scss';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-ko-KR'; // you can import any other locale
import 'bootstrap/dist/css/bootstrap.css';
// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/dist/dropdown';

class EditorComponent extends Component {
  onChange(content) {
    console.log('onChange', content);
  }
 
  render() {
    return (
      <>
        <input  type = "text" 
                placeholder = "제목을 입력하세요" 
                className = {classes.NoticeTitle}
        />
        <ReactSummernote
          className = {classes.EditorBox}
          value="Default value"
          options = {{
            dialogsInBody: false,
            lang : 'ko-KR',
            height : 400,
            popover : false,
            toolbar: [
              ['style', ['bold', 'italic', 'underline', 'clear']],
              ['fontsize', ['fontsize']],
              ['color', ['color']],
              ['height', ['height']],
              ['table', ['table']],
              ['insert', ['link', 'picture', 'video']],
              ['view', ['fullscreen', 'codeview']]
            ],
            tooltip: false
          }}
        />
      </>
    );
  }
}
 
export default EditorComponent;