import "./EditorItemList.css"
import EditorItem from "./EditorItem";

export default function EditorItemList({ title, detail, items = [] }) {
    return(
        <section className="recipe-section editor-section">
            <div className="section-heading">
                <h2 className="recipe-title">{title}</h2>
                <p className="recipe-detail">{detail}</p>
            </div>
            <div className="auth-list">
                {items.map((item) => (
                    <EditorItem key={item.title} item={item}/>
                ))}
            </div>      
        </section>
    );
};
