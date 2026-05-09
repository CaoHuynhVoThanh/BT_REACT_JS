import "./BodyContent.css"
import EditorItemList from "./EditorItemList";
import Recipe from "./Recipe";

const summerRecipes = [
    {
        name: "Italian-style tomato salad",
        time: "14 minutes",
        image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?auto=format&fit=crop&w=720&q=80",
    },
    {
        name: "Spaghetti with vegetables and shrimp",
        time: "15 minutes",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=720&q=80",
    },
    {
        name: "Lotus delight salad",
        time: "20 minutes",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=720&q=80",
    },
    {
        name: "Snack cakes",
        time: "21 minutes",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=720&q=80",
    },
];

const videoRecipes = [
    {
        name: "Salad with cabbage and shrimp",
        time: "32 minutes",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=720&q=80",
    },
    {
        name: "Salad of cove beans, shrimp and potatoes",
        time: "20 minutes",
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=720&q=80",
    },
    {
        name: "Sunny-side up fried egg",
        time: "15 minutes",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=720&q=80",
    },
    {
        name: "Lotus delight salad",
        time: "20 minutes",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=720&q=80",
    },
];

const editorItems = [
    {
        title: "Stuffed sticky rice ball",
        time: "34 minutes",
        author: "Jennifer King",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&q=80",
        image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&w=720&q=80",
        description: "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
    },
    {
        title: "Strawberry smoothie",
        time: "40 minutes",
        author: "Matthew Martinez",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=720&q=80",
        description: "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
    },
    {
        title: "Latte Art",
        time: "19 minutes",
        author: "Sarah Hill",
        avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=96&q=80",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=720&q=80",
        description: "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
    },
    {
        title: "Butter fried noodles",
        time: "16 minutes",
        author: "Julia Lopez",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=720&q=80",
        description: "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
    },
];

export default function BodyContent() {
    return(
        <div className="body-main-content">
            <Recipe title="This Summer Recipes" detail="We have all your Independence Day sweets covered." items={summerRecipes}></Recipe>
            <Recipe title="Recipes With Videos" detail="Cooking Up Culinary Creations with Step-by-Step Videos" items={videoRecipes}></Recipe>
            <EditorItemList title="Editor's pick" detail="Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!" items={editorItems}></EditorItemList>
        </div>
    );
};
