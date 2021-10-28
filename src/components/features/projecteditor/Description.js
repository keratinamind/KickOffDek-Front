import { useState } from "react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CKEditor, CKFinder } from "@ckeditor/ckeditor5-react";
import { useEditorContext } from "../../../contexts/EditorContext";

const editorConfiguration = {
  plugins: CKFinder,
  ckfinder: {
    uploadUrl: "http://localhost:8888/uploads",
  },
  fontSize: {
    options: [9, 11, 13, "default", 17, 19, 21],
  },
};

function Description() {
  const { project } = useEditorContext();
  const [text, setText] = useState(project.campaignStory);
  const [text2, setText2] = useState(project.budgetOverview);
  return (
    <>
      <Link to="/project">
        <div className="mx-5 my-5 mb-5 flex flex-row items-center">
          <HiArrowNarrowLeft className="text-xl mr-3" />
          <h1 className="font-semibold text-md">Visuals</h1>
        </div>
      </Link>
      <div className="flex flex-col align-center items-center">
        <div className="">
          <h1>STORY & PROJECT OUTLINE</h1>
          <h2>Content</h2>
          <p>{text}</p>
          <div
            className="editor w-192"
            style={{
              margin: "3rem",
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
        <div className="">
          <h1>Budget Overview</h1>
          <h2>Content</h2>
          <p>{text2}</p>
          <div
            className="editor w-192"
            style={{
              margin: "3rem",
              border: "1px gray solid",
              borderRadius: "3px",
              padding: "1px",
            }}
          >
            <CKEditor
              editor={DecoupledEditor}
              config={editorConfiguration}
              data={text2}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setText2(data);
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

export default Description;
