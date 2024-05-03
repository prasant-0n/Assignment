import React, { useState } from "react";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor() {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  const [code, setCode] = useState("hello");

  const handleProcedureContentChange = (
    content: string,
    delta: Quill.Delta,
    source: string,
    editor: Quill
  ) => {
    setCode(content);
    // Accessing attributes of the delta
    const hasAttributes = delta.ops[0]?.attributes;
    console.log(hasAttributes);
  };

  return (
    <>
      {console.log(code)}
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
        className="max-h-550 max-w-550"
      />
    </>
  );
}

export default Editor;

render(<Editor />, document.getElementById("root"));
