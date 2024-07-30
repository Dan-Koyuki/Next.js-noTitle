"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";

const Tiptap = ({ onChange, content }) => {
  const handleChange = (newContent) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full px-4 border">
      <Toolbar editor={editor} content={content}/>
      <div className="border"></div>
      <div className="border">
        <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;