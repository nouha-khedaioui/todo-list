import React, { useState, useEffect } from 'react';
import './Calender.css'; 
import Calendar from 'react-calendar';
import profileImage from '../assets/profileImage.jpg';
import { FaHome, FaCalendarAlt, FaCheckSquare, FaComments, FaTrash, FaBell, FaPlusCircle } from 'react-icons/fa';
import axios from 'axios';  // Importer Axios
import { Route } from 'react-router-dom';
const Calender = () => {
    const [view, setView] = useState('day');  // 'day' or 'week'
    const [tasks, setTasks] = useState([]);   // Store tasks for day or week

    // Get today's date and the current week
    const today = new Date();
    const todayString = today.toLocaleDateString();  // Date format: "MM/DD/YYYY"
    
    // Calculate the current week number
    const weekNumber = Math.ceil((today.getDate() - today.getDay() + 1) / 7); // Week calculation logic
    const weekString = `Week ${weekNumber}`;

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                // Selon la vue, on fait une requête vers l'API
                let response;
                if (view === 'day') {
                    response = await axios.get('/api/tasks/today');  // Récupérer les tâches du jour
                } else if (view === 'week') {
                    response = await axios.get('/api/tasks/week');  // Récupérer les tâches de la semaine
                }

                // Mettre à jour les tâches dans l'état
                setTasks(response.data);  // Assurez-vous que l'API renvoie les tâches sous forme de tableau
            } catch (error) {
                console.error("Erreur lors de la récupération des tâches:", error);
            }
        };

        fetchTasks();
    }, [view]);  // Recharger les tâches quand la vue change

    const handleViewChange = (viewType) => {
        setView(viewType);
    };

    return (
        <div className="calendar-container">
            <header>
                <h2>Calendar</h2>
            </header>
            
            <div className="main-container">
                {/* Calendar Section */}
                <div className="calendar-section">
                    <Calendar className="my-custom-calendar" />
                </div>

                {/* Tasks Section */}
                <div className="tasks-section">
                    <div className="button-container">
                        <button 
                            className={`task-button ${view === 'day' ? 'active' : ''}`} 
                            onClick={() => handleViewChange('day')}
                        >
                            Day
                        </button>
                        <button 
                            className={`task-button ${view === 'week' ? 'active' : ''}`} 
                            onClick={() => handleViewChange('week')}
                        >
                            Week
                        </button>
                    </div>

                    <div id="tasks">
                        {/* Day Tasks */}
                        {view === 'day' && (
                            <div className="task-container day">
                                <h4>{todayString}</h4> {/* Display today's date */}
                                {tasks.length > 0 ? (
                                    tasks.map((task) => (
                                        <div key={task.id} className="task">{task.name}</div>
                                    ))
                                ) : (
                                    <p>No tasks for today</p>
                                )}
                            </div>
                        )}

                        {/* Week Tasks */}
                        {view === 'week' && (
                            <div className="task-container week">
                                <h4>{weekString}</h4> {/* Display the current week */}
                                {tasks.length > 0 ? (
                                    tasks.map((task) => (
                                        <div key={task.id} className="task">{task.name}</div>
                                    ))
                                ) : (
                                    <p>No tasks for this week</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <aside className="sidebar">
                {/* Profile */}
                <div className="profile-section">
                    <div className="profile-icon">
                        <img src={profileImage} alt="Profile" className="profile-img" />
                    </div>
                    <p>Profile</p>
                    <FaBell className="bell-icon" />
                </div>
                <hr />

                {/* Create New Task */}
                <button className="create-task">
                    <FaPlusCircle className="icon" />
                    Create New Task
                </button>

                {/* Menu */}
                <ul className="menu">
                    <li className="active">
                        <FaHome className="icon" />
                        Home Page
                    </li>
                    <li>
                        <FaCalendarAlt className="icon" />
                        Calendar
                    </li>
                    <li>
                        <FaCheckSquare className="icon" />
                        Habit Tracker
                    </li>
                    <li>
                        <FaComments className="icon" />
                        Feedback
                    </li>
                    <li>
                        <FaTrash className="icon" />
                        Trash
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Calender;

