import "./Recipe.css"

function Recipe({ title, detail, items = [] }){
    return(
        <section className="recipe-section">
            <div className="section-heading">
                <h2 className="recipe-title">{title}</h2>
                <p className="recipe-detail">{detail}</p>
            </div>
            <div className="recipe-list">
                {items.map((item) => (
                    <article className="recipe-container" key={item.name}>
                        <img className="recipe-img" src={item.image} alt={item.name}></img>
                        <button className="bookmark-button" aria-label={`Save ${item.name}`}></button>
                        <div className="recipe-name">{item.name}</div>
                        <div className="recipe-tag">
                            <div className="recipe-tag-item">{item.time}</div>
                        </div>
                    </article>
                ))}
                </div>
        </section>
    );
}

export default Recipe;
