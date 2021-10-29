import React, { useEffect, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link, useHistory } from "react-router-dom";
import { useEditorContext } from "../../../../contexts/EditorContext";
import axios from "../../../../config/axios";

function SidebarSetupProfile() {
    const { project } = useEditorContext();
    const [categories, setCategories] = useState([]);
    const [input, setIntput] = useState({
        organization: project.organization,
        tagline: project.tagline,
        province: project.province,
        country: project.country,
        categoryId: project.categoryId,
        about: project.about,
        facebook: project.facebook,
        instagram: project.instagram,
        twitter: project.twitter,
        website: project.website,
    });
    const history = useHistory();

    useEffect(() => {
        axios
            .get("/categories/get-all")
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    const handleChangeInput = async (e) => {
        setIntput((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
    };

    const clickSave = async () => {
        try {
            const formData = new FormData();
            formData.append("organization", input.organization);
            formData.append("tagline", input.tagline);
            formData.append("province", input.province);
            formData.append("country", input.country);
            formData.append("categoryId", input.categoryId);
            formData.append("about", input.about);
            formData.append("facebook", input.facebook);
            formData.append("instagram", input.instagram);
            formData.append("twitter", input.twitter);
            formData.append("website", input.website);
            const res = await axios.put(`/projects/update/${project.id}`, formData);
            alert(res.data?.msg);
            history.push("/project", { projectId: project.id });
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className="w-96 h-screen bg-gray-100 mx-5 my-5 mb-5">
            <div className="flex flex-row items-center">
                <Link to={{ pathname: "/project", state: { projectId: project.id } }}>
                    <HiArrowNarrowLeft className="text-xl mr-3" />
                </Link>
                <h1 className="font-semibold text-xl mr-3">Profile Details</h1>
                <button className="bg-green-700 text-white rounded-md h-7 w-24" onClick={clickSave}>
                    Save
                </button>
            </div>
            <div className="mt-8">
                <h1 className="text-sm ">Overview</h1>
            </div>
            <div className="flex flex-col py-2 my-2 w-full ">
                {/* Input Name */}
                <div className="flex my-2 rounded items-center">
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <input
                            name="organization"
                            className="text-sm  rounded px-4 py-2 border border-gray-300 focus:border-indigo-500 w-full focus:outline-none focus:ring-indigo-500"
                            type="text"
                            placeholder="Your name"
                            value={input?.organization}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                {/* Input Name */}
                <div className="flex my-2 rounded items-center">
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <input
                            name="tagline"
                            className="text-sm  rounded px-4 py-2 border border-gray-300 focus:border-indigo-500 w-full focus:outline-none focus:ring-indigo-500"
                            type="text"
                            placeholder="Your tagline"
                            value={input?.tagline}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                {/* Input Name */}
                <div className="flex my-2 rounded items-center">
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <input
                            name="province"
                            className="text-sm  rounded px-4 py-2 border border-gray-300 focus:border-indigo-500 w-full focus:outline-none focus:ring-indigo-500"
                            type="text"
                            placeholder="City"
                            value={input?.province}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                <div className="flex my-2 rounded items-center">
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <input
                            name="country"
                            className="text-sm  rounded px-4 py-2 border border-gray-300 focus:border-indigo-500 w-full focus:outline-none focus:ring-indigo-500"
                            type="text"
                            placeholder="Country"
                            value={input?.country}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                <div className="flex my-2 rounded items-center">
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <select
                            id="categoryId"
                            name="categoryId"
                            class="mt-1 h-10 block w-full py-2 px-3 text-gray-600 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={input?.categoryId}
                            onChange={handleChangeInput}
                        >
                            <option value="">Select Category</option>
                            {categories.map((elem) => (
                                <option key={elem.id} value={elem.id}>
                                    {elem.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Input About  */}
                <div className="my-2 rounded items-center">
                    <h1 className="text-sm my-3">About</h1>
                    <textarea
                        class="px-2 py-2 text-sm font-normal border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 rounded w-full h-20"
                        name="about"
                        value={input?.about}
                        onChange={handleChangeInput}
                    ></textarea>
                </div>

                {/* Input FB  */}
                <div className="my-2 rounded items-center">
                    <h1 className="text-sm my-3">Social Link</h1>
                    <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                        <div className=" flex items-center pointer-events-none">
                            <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-500">
                                facebook.com/
                            </span>
                        </div>
                        <input
                            type="text"
                            name="facebook"
                            id="facebook"
                            className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                            placeholder="facebook"
                            value={input?.facebook}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                {/* Input IG  */}
                <div className="my-2 rounded items-center">
                    <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                        <div className=" flex items-center pointer-events-none">
                            <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-500">@</span>
                        </div>
                        <input
                            type="text"
                            name="instagram"
                            id="instagram"
                            className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                            placeholder="instagram"
                            value={input?.instagram}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                {/* Input TWIT  */}
                <div className="my-2 rounded items-center">
                    <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                        <div className=" flex items-center pointer-events-none">
                            <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-500">@</span>
                        </div>
                        <input
                            type="text"
                            name="twitter"
                            id="twitter"
                            className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                            placeholder="twitter"
                            value={input?.twitter}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                {/* Input web url  */}
                <div className="my-2 rounded items-center">
                    <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
                        <div className=" flex items-center pointer-events-none">
                            <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-500">http://</span>
                        </div>
                        <input
                            type="text"
                            name="website"
                            id="website"
                            className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                            placeholder="Website"
                            value={input?.website}
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarSetupProfile;
