
import { useEffect } from "react";
import { useNavigate } from "react-router";

useEffect(() => {
    const navigate = useNavigate(); 
    navigate("/recipes");             // מעבר לכתובת
    navigate(`/recipes/${id}`);       // כתובת עם משתנה
    navigate(-1);                     // צעד אחורה בהיסטוריה
    navigate("/", { replace: true });
},[id])

navigate("/recipes");             // מעבר לכתובת
navigate(`/recipes/${id}`);       // כתובת עם משתנה
navigate(-1);                     // צעד אחורה בהיסטוריה
navigate("/", { replace: true });