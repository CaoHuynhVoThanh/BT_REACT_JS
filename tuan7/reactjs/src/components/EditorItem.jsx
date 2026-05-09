import "./EditorItem.css"

export default function EditorItem({ item }) {
    return(
        <div className="editor-item-container">
            <img className="editor-image" src={item.image} alt={item.title} />
            <div className="e-item-detail">
                <button className="bookmark-button editor-bookmark" aria-label={`Save ${item.title}`}></button>
                <div className="e-title">{item.title}</div>
                <div className="e-time">{item.time}</div>
                <div className="e-auth">
                    <img src={item.avatar} alt={item.author}></img>
                    <div className="e-name">{item.author}</div>
                </div>
                <div className="e-des">{item.description}</div>
            </div>
        </div>
    );
};
