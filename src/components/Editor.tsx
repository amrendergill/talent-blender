"use client"
import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
 
 
export default function AppEditor({
  onChange,
  value,
  oneditorValue,
  onBlur,
  toolsController,
  disabled,
  onkeyupHandler,
  specificTools,
}: any) {
  const editorRef: any = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
 
 
  oneditorValue = () => {
    if (editorRef.current) {
      return editorRef.current.getContent();
    }
  };
 
  return (
    <>
     
      {
      // isLoading ? (
      //   <Loader />
      // ) :
       (
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={value}
          init={{
            menubar: false,
            extended_valid_elements: "span[class|style|data-atom-id]", // Important for MathLive to work
            plugins: [
              "advlist autolink lists link image charmap print preview paste anchor",
              "searchreplace visualblocks code fullscreen paste",
              "insertdatetime media table contextmenu paste,code,codesample,equation-editor,preview ",
            ],
            paste_as_text: true,
            // selector:#tox-statusbar,
            branding: false,
            codesample_languages: [
              { text: "HTML/XML", value: "markup" },
              { text: "JavaScript", value: "javascript" },
              { text: "CSS", value: "css" },
              { text: "PHP", value: "php" },
              { text: "Ruby", value: "ruby" },
              { text: "Python", value: "python" },
              { text: "Java", value: "java" },
              { text: "C", value: "c" },
              { text: "C#", value: "csharp" },
              { text: "C++", value: "cpp" },
            ],
 
            toolbar:
              specificTools == "instruction"
                ? " bold italic underline  | formats blockformats fontformats fontsizes align  | bullist numlist outdent indent | removeformat  |preview"
                : "fontsizeselect | bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align  | bullist numlist outdent indent | removeformat  | table tabledelete    |codesample |preview",
          }}
          onBlur={() => onBlur(editorRef.current.getContent())}
          disabled={disabled}
          onKeyUp={onkeyupHandler}
        />
      )}
    </>
  );
}