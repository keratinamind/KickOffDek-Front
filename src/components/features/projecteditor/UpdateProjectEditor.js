import { useState } from "react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { HiArrowNarrowLeft } from "react-icons/hi";

import { CKEditor, CKFinder } from "@ckeditor/ckeditor5-react";
import { Link } from "react-router-dom";

const editorConfiguration = {
  plugins: CKFinder,
  ckfinder: {
    uploadUrl: "http://localhost:8888/uploads",
  },
  fontSize: {
    options: [9, 11, 13, "default", 17, 19, 21],
  },
};

function UpdateProjectEditor() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="mx-5 my-5 mb-5 flex flex-row items-center">
        <Link to="/project/update">
          <HiArrowNarrowLeft className="text-xl mr-3" />
        </Link>
        <h1 className="font-semibold text-md">Update project</h1>
      </div>
      <div className="container mx-auto w-192">
        <label
          htmlFor="lastName"
          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
        >
          Update Title
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
          placeholder="LastName"
        />
        <p className="text-xs pt-2 text-red-700">Required!</p>
      </div>
      <div className="container mx-auto w-192">
        <div className="">
          <h1>STORY & PROJECT OUTLINE</h1>
          <h2>Content</h2>
          <p>{text}</p>
          <div
            className="editor w-192"
            style={{
              border: "1px gray solid",
              borderRadius: "3px",
              padding: "1px",
            }}
          >
            <CKEditor
              editor={DecoupledEditor}
              config={editorConfiguration}
              data={text}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setText(data);
              }}
              onReady={(editor) => {
                // console.log("Editor is ready to use!", editor);

                // Insert the toolbar before the editable area.
                editor.ui
                  .getEditableElement()
                  .parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                  );
                editor.editing.view.change((writer) => {
                  writer.setStyle(
                    "height",
                    "600px",
                    editor.editing.view.document.getRoot()
                  );
                });
              }}
              // onError={({ willEditorRestart }) => {
              //     // If the editor is restarted, the toolbar element will be created once again.
              //     // The `onReady` callback will be called again and the new toolbar will be added.
              //     // This is why you need to remove the older toolbar.
              //     if (willEditorRestart) {
              //         this.editor.ui.view.toolbar.element.remove();
              //     }
              // }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProjectEditor;
