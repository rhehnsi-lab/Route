import { useSearchParams } from "react-router";

const [searchParams, setSearchParams] = useSearchParams();
const search = searchParams.get("q") || "";
