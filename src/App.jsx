import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';

function App() {
    return (
        <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30">
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="projects/:id" element={<ProjectDetails />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
