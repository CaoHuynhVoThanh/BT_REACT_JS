import "./EditorItemList.css"
import EditorItem from "./EditorItem";

export default function EditorItemList(props) {
    return(
        <div className="summer-container">
            <div className="recipe-title">{props?.title}</div>
            <div className="recipe-detail">{props?.detail}</div>
            <div className="auth-list">
                <EditorItem/>
                <EditorItem/>
                <EditorItem/>
                <EditorItem/>
            </div>      
        </div>
    );
};
