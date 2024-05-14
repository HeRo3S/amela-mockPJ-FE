import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./editor.style.scss";

interface IProps {
  data?: string;
  onChangeFunction: (key: string, value: string) => void;
}
export default function CustomEditor(props: IProps) {
  const { data, onChangeFunction } = props;
  return (
    <CKEditor
      editor={ClassicEditor}
      data={data || "<p>Hello from CKEditor&nbsp;5!</p>"}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        console.log(event);
        console.log(editor.getData());
        onChangeFunction("content", editor.getData());
      }}
      onBlur={(event, editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor);
      }}
    />
  );
}
