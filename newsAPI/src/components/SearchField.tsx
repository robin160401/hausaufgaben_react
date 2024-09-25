import { useState } from "react";
import RenderNewsCards from "./RenderNewsCards";

function SearchField(){
    const [searchFor, setSearchFor] = useState("");
    const [language, setLanguage] = useState("en");
    const [checkSubmit, setSubmit] = useState(false)

    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setSubmit(true);
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={
                (event) => {setSearchFor(event.target.value);
                    setSubmit(false);
                }
            } />
            <select id="language" onChange={
                (event) => (setLanguage(event.target.value))
            }>
                <option value="en" selected>English</option>
                <option value="de">German</option>
            </select>
            <button type="submit">Search</button>
        </form>
        {checkSubmit && <RenderNewsCards key={searchFor} getSearchfor={searchFor} getLanguage={language}/>}
    </div>
}

export default SearchField;