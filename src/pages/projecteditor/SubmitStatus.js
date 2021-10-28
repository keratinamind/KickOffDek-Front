import { HiArrowNarrowLeft, HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEditorContext } from "../../contexts/EditorContext";

function SubmitStatus() {
    const { project } = useEditorContext();
    return (
        <div className="w-100 border">
            <div className="flex items-center">
                <Link to={{ pathname: "/project", state: { projectId: project.id } }}>
                    <HiArrowNarrowLeft />
                </Link>
                <p>Submit for Review & Launch</p>
            </div>
            <div className="flex w-100 justify-evenly items-center">
                <div className="border p-10 h-56">
                    <h1>Draft</h1>
                    <h3>Submit for a review once you have complete the checklist.</h3>
                </div>
                <HiChevronRight className="text-8xl" />
                <div className="border p-10 h-56">
                    <h1>Pre-Approved</h1>
                    <h3>Your project has been approved and ready to launch.</h3>
                </div>
                <HiChevronRight className="text-8xl" />
                <div className="border p-10 h-56">
                    <h1>Draft</h1>
                    <h3>Your project is LIVE, time to make some noise!</h3>
                </div>
            </div>
            <div>Function...</div>
        </div>
    );
}

export default SubmitStatus;
