import React, { useState } from "react";
import {  FaTrash } from "react-icons/fa";
import "./ManageTasks.css";
import "./TaskModal";
import TaskModal from "./TaskModal.js";

function ManageTasks({ tasks = {},  setTasks, deletedTasks, setDeletedTasks}) {


const handleDelete = (section, task) => {
  if (!task || !section) {
    console.error("Task or section is undefined!", 
      { task, section });
    return;
  }

// Ajouter la tâche supprimée à `deletedTasks`
setDeletedTasks((prevDeleted) => [
...prevDeleted,
{ ...task, section, deletedAt: new Date() }, // Ajout de toutes les propriétés et de la date
]);
// Supprimer la tâche de la section actuelle
setTasks((prev) => ({
  ...prev,
  [section]: prev[section].filter((t) => t.title !== task.title),
}));
};

const [categories, setCategories] = useState(["ALL", "Personal", "Sport", "University"]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTaskModalOpen] = useState(false);
    const [newCategory, setNewCategory] = useState("");
    const [draggedTask, setDraggedTask] = useState(null);
    const [draggedFrom, setDraggedFrom] = useState(null);
  
    // Fonction pour gérer les checkbox
    const handleCheckboxChange = (e, task, section) => {
      const isChecked = e.target.checked;
      if (isChecked && section !== "completed") {
        setTasks((prev) => ({
          ...prev,
          [section]: prev[section].filter((t) => t !== task),
          completed: [...prev.completed, task],
        }));
      } else if (!isChecked && section === "completed") {
        setTasks((prev) => ({
          ...prev,
          completed: prev.completed.filter((t) => t !== task),
          todo: [...prev.todo, task],
        }));
      }
    };
    // Gestion du drag-and-drop
    const handleDragStart = (task, section) => {
      setDraggedTask(task);
      setDraggedFrom(section);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    const handleDrop = (section) => {
      if (draggedTask && draggedFrom !== section) {
        setTasks((prev) => ({
          ...prev,
          [draggedFrom]: prev[draggedFrom].filter((t) => t !== draggedTask),
          [section]: [...prev[section], draggedTask],
        }));
      }
      setDraggedTask(null);
      setDraggedFrom(null);
    };

   // Ajouter une nouvelle catégorie
  const handleAddCategory = () => {
    if (newCategory.trim() === "") {
      return;
    }

    if (!categories.includes(newCategory)) {
      setCategories((prevCategories) => [...prevCategories, newCategory]); // Ajoute la nouvelle catégorie globalement
    }

    setNewCategory(""); // Réinitialise le champ d'entrée
  };
return (

<div className="Tasks">
<h1>Manage Tasks</h1>
{/* Liste des catégories */}
<div className="task-categories">
{categories.map((category) => (
<div key={category} className="category-item">
<button className="category">{category}</button>
</div>
))}
{/* Bouton "+" pour ouvrir la fenêtre modale */}
<button
className="category add-task"
onClick={() => {
setIsModalOpen(true);
handleAddCategory();
}}>+</button>
</div>
{/* Modale pour ajouter des tâches */}
{isTaskModalOpen && (
       <TaskModal
       categories={categories} // Passe les catégories au composant enfant
       closeModal={() => setIsModalOpen(false)} // Ferme la modal
       addTask={(task) => console.log("Task added:", task)} // Simule l'ajout d'une tâche
     />
    )}
{/* --------------------------------------------------------------- */}
{/* Fenêtre modale pour ajouter une catégorie */}
{isModalOpen && (
<div className="modalB-overlay">
<div className="modalB">
<h2>Ajouter une catégorie</h2>
<input type="text" placeholder="Nom de la catégorie" value={newCategory}  onChange={(e) => setNewCategory(e.target.value)}/>
<div className="modalB-actions">
<button className="modalB-button addB" onClick={handleAddCategory}> Ajouter </button>
<button className="modalB-button cancelB" onClick={() => setIsModalOpen(false)}>Annuler
</button>
</div>
</div>
</div>
)}
{/* --------------------------------------------------------------- */}
{/*  Sections des taches  */}
<div className="task-sections">
{Object.keys(tasks).map((section) => (
<div
  key={section}
  className="task-boxes"
  onDragOver={handleDragOver}
  onDrop={() => handleDrop(section)}>
    <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
  <hr />
  {tasks[section].map((task,index ) => (
  <div
      key={index}
      className="Taches"
      draggable
      onDragStart={() => handleDragStart(task, section)}
  >
      <div className="task-left">
              <div className={`circle ${task.priority.toLowerCase()}`}></div>
            </div>
            <div className="task-content">{task.title}</div>

      <div className="task-right">
    
      <input
          type="checkbox"
          className="checkbox"
          onChange={(e) => handleCheckboxChange(e, task, section)}
          
          checked={section === "completed"} // Les tâches terminées sont cochées
      />
      <FaTrash
          className="icon-delete"
          onClick={() => handleDelete(section, task)}
      />
      </div>
  </div>
  ))}
</div>
))}
</div>
</div>
);

}

export default ManageTasks;