import { Route, Routes } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostPage from "./pages/PostPage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<PostListPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/posts/:postId" element={<PostPage />} />
        </Routes>
    );
}

export default App;
