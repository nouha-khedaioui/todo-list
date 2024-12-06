import React,{ useState }from 'react';
import './Habit.css'; 
import profileImage from'../assets/profileImage.jpg';
import { FaHome, FaCalendarAlt, FaCheckSquare, FaComments, FaTrash, FaBell, FaPlusCircle } from 'react-icons/fa';



const Habit = () => {
    const [habits, setHabits] = useState([]);
    const [habit, setHabit] = useState('');
  
    const handleAddHabit = () => {
      if (habit) {
        setHabits([...habits, { name: habit, completed: Array(daysInMonth).fill(false) }]);
        setHabit('');
      }
    };
  
    const handleToggleHabit = (habitIndex, dayIndex) => {
      const newHabits = [...habits];
      newHabits[habitIndex].completed[dayIndex] = !newHabits[habitIndex].completed[dayIndex];
      setHabits(newHabits);
    };
  
    const [date] = useState(new Date());
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
   
    return (
        <div className="habit-container">
        <div className="habit-side">
          <h2 id="habit">Habit tracker</h2>
        
        </div>
  
        <div className="table">
          <div className="table-head" >
            <div className="table-cell" colSpan={daysInMonth + 1} id="col1" >
            <h2 >{`${month} `}</h2>
           </div>
            {daysArray.map(day => (
              <div className="table-cell" key={day}>{day}</div>
            ))}
          </div>
          {habits.map((habitItem, habitIndex) => (
            <div className="table-row" key={habitIndex}>
              <div className="table-cell">{habitItem.name}</div>
              {daysArray.map((day, dayIndex) => (
                <div className="table-cell" key={dayIndex}>
                  <input
                    type="checkbox"
                    id="checkb"
                    checked={habitItem.completed[dayIndex]}
                    onChange={() => handleToggleHabit(habitIndex, dayIndex)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      <div id="add">
      <button onClick={handleAddHabit}><FaPlusCircle /></button>
      <input
            type="text"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
            placeholder="Add habit"
          />
          
         
          </div>

    <aside className="sidebar" >
    {/* Profil */}
    <div className="profile-section">
        <div className="profile-icon">
        <img src={profileImage} alt="Profile" className="profile-img" />
        
        </div>
        
        <p>Profile</p>
        <FaBell className="bell-icon" />
    </div>
    <hr />

    {/* Bouton Créer */}
    <button className="create-task" >
        <FaPlusCircle className="icon" />
        Create new task
    </button>

    {/* Menu */}
    <ul className="menu">
        <li className="active">
            <FaHome className="icon" />
            Home Page
        </li>
        <li >
            <FaCalendarAlt className="icon" />
            Calendar
        </li>
        <li >
            <FaCheckSquare className="icon" />
            Habit Tracker
        </li>
        <li >
      
            <FaComments className="icon" />
            Feedback
       
       
        </li>
        <li >
            
            <FaTrash className="icon" />
            Trash
          
        </li>
    </ul>
</aside>

    
</div>
);}
export default Habit;