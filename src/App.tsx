import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { RouteScrollManager } from "./components/RouteScrollManager";
import { HomePage } from "./pages/HomePage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";

function AppLayout() {
  return (
    <>
      <RouteScrollManager />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Navigate to="/#blogs" replace />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
