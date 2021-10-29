import { useState } from "react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link, useHistory } from "react-router-dom";
import { CKEditor, CKFinder } from "@ckeditor/ckeditor5-react";
import { useEditorContext } from "../../../contexts/EditorContext";
import axios from "../../../config/axios";

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
    const [campaignStory, setCampaignStory] = useState(project.campaignStory);
    const [budgetOverview, setBudgetOverview] = useState(project.budgetOverview);
    const history = useHistory();

    const clickSave = async () => {
        try {
            const formData = new FormData();
            formData.append("campaignStory", campaignStory);
            formData.append("budgetOverview", budgetOverview);
            const res = await axios.put(`/projects/update/${project.id}`, formData);
            alert(res.data?.msg);
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <>
            <div className="mx-5 my-5 mb-5 flex flex-row items-center">
                <Link to={{ pathname: "/project", state: { projectId: project.id } }}>
                    <HiArrowNarrowLeft className="text-xl mr-3" />
                </Link>
                <h1 className="font-semibold text-md mr-3">Description</h1>
                <button className="bg-green-700 text-white rounded-md h-7 w-24" onClick={clickSave}>
                    Save
                </button>
            </div>
            <div className="flex flex-col align-center items-center">
                <div className="">
                    <h1>STORY & PROJECT OUTLINE</h1>
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
                            data={campaignStory}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                                setCampaignStory(data);
                            }}
                            onReady={(editor) => {
                                editor.ui
                                    .getEditableElement()
                                    .parentElement.insertBefore(
                                        editor.ui.view.toolbar.element,
                                        editor.ui.getEditableElement()
                                    );
                                editor.editing.view.change((writer) => {
                                    writer.setStyle("height", "600px", editor.editing.view.document.getRoot());
                                });
                            }}
                        />
                    </div>
                </div>
                <div className="">
                    <h1>Budget Overview</h1>
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
                            data={budgetOverview}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                                setBudgetOverview(data);
                            }}
                            onReady={(editor) => {
                                editor.ui
                                    .getEditableElement()
                                    .parentElement.insertBefore(
                                        editor.ui.view.toolbar.element,
                                        editor.ui.getEditableElement()
                                    );
                                editor.editing.view.change((writer) => {
                                    writer.setStyle("height", "600px", editor.editing.view.document.getRoot());
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;
