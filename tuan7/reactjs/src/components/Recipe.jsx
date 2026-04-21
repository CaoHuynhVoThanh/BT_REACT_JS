import "./Recipe.css"

function Recipe({props, state}){
    return(
        <div className="summer-container">
            <div className="recipe-title">{props.title}</div>
            <div className="recipe-detail">{props.detail}</div>
            <div className="recipe-list">
            <div className="recipe-container">    
                <img className="recipe-img" src="./recipe1.jpg"></img>
                <div className="recipe-name">Italian-style tomato salad</div>
                <div className="recipe-tag">
                    <div className="recipe-tag-item">32 minutes</div>
                </div>
            </div>
            <div className="recipe-container">    
                <img className="recipe-img" src="./recipe1.jpg"></img>
                <div className="recipe-name">Italian-style tomato salad</div>
                <div className="recipe-tag">
                    <div className="recipe-tag-item">32 minutes</div>
                </div>
            </div>
            <div className="recipe-container">    
                <img className="recipe-img" src="./recipe1.jpg"></img>
                <div className="recipe-name">Italian-style tomato salad</div>
                <div className="recipe-tag">
                    <div className="recipe-tag-item">32 minutes</div>
                </div>
            </div>
            <div className="recipe-container">    
                <img className="recipe-img" src="./recipe1.jpg"></img>
                <div className="recipe-name">Italian-style tomato salad</div>
                <div className="recipe-tag">
                    <div className="recipe-tag-item">32 minutes</div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Recipe;