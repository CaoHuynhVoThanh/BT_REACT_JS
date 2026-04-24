import "./BodyContent.css"
import EditorItemList from "./EditorItemList";
import Recipe from "./Recipe";

export default function BodyContent() {
    return(
        <div className="body-main-content">
            <Recipe title="This Summer Recipes" detail="We have all your Independence Day sweets covered."></Recipe>
            <Recipe title="Recipes With Videos" detail="Cooking Up Culinary Creations with Step-by-Step Videos"></Recipe>
            <EditorItemList title="Editor's pick" detail="Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!"></EditorItemList>
        </div>
    );
};
