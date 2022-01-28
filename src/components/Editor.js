import React, { forwardRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const EditorComp = forwardRef((props, ref) => {
  return (
    <>
      <Editor
        onInit={(evt, editor) => (ref.current = editor)}
        initialValue={props.value}
        init={{
          selector: "textarea#basic-example",
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
});

export default EditorComp;
