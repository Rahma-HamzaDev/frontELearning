import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./components/Authentification/Login";



import InsertInscription from "./components/Inscription/Insertinscription";
import ViewInscription from "./components/Inscription/Viewinscription";

import ViewFormations from "./components/Formation/Viewformation";
import ViewFormationDetails from "./components/Formation/Viewformation";
import CreateFormation from "./components/Formation/Insertformation";
import ViewEvaluationsByUser from "./components/evaluation/ViewFormationuser";

import CreateEvaluation from "./components/evaluation/CreateEvaluation";
import ViewEvaluationsByFormation from "./components/evaluation/ViewEvaluationfor";
import ListFormation from "./components/Formation/ListFormation";
import Navbar from "./components/pages/Navbar";
import RegisterForm from "./components/Authentification/RegisterForm";


const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <br/>
                <Routes>
                    {/* Authentification */}
                    <Route path="/register" element={<RegisterForm />} />

                    <Route path="/login" element={<LoginForm />} />

                    {/* Formations */}
                    <Route path="/formations/:id" element={<ViewFormations />} />
                    <Route path="/formations/create" element={<CreateFormation />} />
                    <Route path="/formations/:id" element={<ViewFormationDetails />} />
                    <Route path="/formations" element={<ListFormation/>} />

                    {/* Inscriptions */}
                    <Route path="/inscriptions/create" element={<InsertInscription />} />
                    <Route path="/inscriptions/user/:userId" element={<ViewInscription />} />

                    {/* Évaluations */}
                    <Route path="/evaluations/formation/:formationId" element={<ViewEvaluationsByFormation />} />
                    <Route path="/evaluations/user/:userId" element={<ViewEvaluationsByUser />} />
                    <Route path="/evaluations/create" element={<CreateEvaluation />} />

                  
                </Routes>



            </Router>
        </div>
    );
};

export default App;
