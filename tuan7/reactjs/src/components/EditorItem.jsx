import "./EditorItem.css"

export default function EditorItem() {
    return(
        <div className="editor-item-container">
            <img src="/EItem1.jpg" alt="" />
            <div className="e-item-detail">
                <div className="e-title">Stuffed sticky rice ball</div>
                <div className="e-time">34 minutes</div>
                <div className="e-auth">
                    <img src="./G1.jpg"></img>
                    <div className="e-name">Jennifer King</div>
                </div>
                <div className="e-des">Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...</div>
            </div>
        </div>
    );
};
