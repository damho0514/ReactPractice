import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<PostPage />} />
        </Routes>
    );
}

export default App;
