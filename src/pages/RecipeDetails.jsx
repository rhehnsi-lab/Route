import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function RecipeDetails() {
    const { id } = useParams();      // תמיד מחרוזת
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipe(data));
    }, [id]);                        // כש-id משתנה, טוענים מחדש

    return (
        <div>
            <button onClick={() => navigate("/recipes")}>חזרה</button>
            {recipe && <h1>{recipe.name}</h1>}
        </div>
    );
}