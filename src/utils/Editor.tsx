import React, { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
  userId: number; // Define the type for userId prop
}

const Editor: React.FC<EditorProps> = ({ userId }) => {
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

  const [code, setCode] = useState("");

  useEffect(() => {
    const retrieveDataFromLocalStorage = () => {
      const storedData = localStorage.getItem(`user_${userId}`);
      if (storedData) {
        setCode(storedData);
      }
    };

    retrieveDataFromLocalStorage();
  }, [userId]);

  const handleProcedureContentChange = (
    content: string,
    delta: Quill.Delta,
    source: string,
    editor: Quill
  ) => {
    setCode(content);
  };

  const formatData = (data: string) => {
    // Split the data by newline characters and format it
    const formattedData = data.split("\n").map((line, index) => <p key={index}>{line}</p>);
    return formattedData;
  };

  const formattedData = formatData(code);
  const formattedString = formattedData.map(element => element.props.children).join('\n'); // Convert formatted data back to string

  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={formattedString} // Use 'formattedString' instead of 'code'
        onChange={handleProcedureContentChange}
        className="max-h-550 max-w-550"
      />
      {/* Render formatted data below the editor */}
      {/* <div>{formattedData}</div> */}
    </>
  );
};

export default Editor;
