import img1 from'../assets/img1.jpg';
import profileImage from'../assets/profileImage.jpg';
import { FaHome, FaCalendarAlt, FaCheckSquare, FaComments, FaTrash, FaBell, FaPlusCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const location = useLocation();
    const { email, name } = location.state || {};

    const changepink = () => {
        const root = document.documentElement;
        root.style.setProperty('--border-color', '#f95ac');
        root.style.setProperty('--sidebar-color', '#F4ABC4');
        root.style.setProperty('--button-bg-color', '#FF1493');
        root.style.setProperty('--button-hover-color', '#FFC0CB');
        root.style.setProperty('--icon-color', '#FF007F');
        root.style.setProperty('--background-color', 'white');
        root.style.setProperty('--text-b-color', '#322ef7');
        root.style.setProperty('--highlight-color', '#333456');
        root.style.setProperty('--notification-color', '#FF1493');
        root.style.setProperty('--text-color', ' #151517');
        root.style.setProperty('--background-boxes', '#FF007F');
    };

    const changedarkbleu = () => {
        const root = document.documentElement;
        root.style.setProperty('--background-color', ' #2774ae');
        root.style.setProperty('--border-color', '#333456');
        root.style.setProperty('--sidebar-color', ' #c9e6f0');
        root.style.setProperty('--button-bg-color', '#649bb');
        root.style.setProperty('--button-hover-color', '#649bb0');
        root.style.setProperty('--icon-color', '#FF007F');
        root.style.setProperty('--text-b-color', 'white');
        root.style.setProperty('--highlight-color', '#333456');
        root.style.setProperty('--notification-color', '#333456');
        root.style.setProperty('--text-color', 'white');
        root.style.setProperty('--background-boxes', 'white');
    };

    const changedarkpink = () => {
        const root = document.documentElement;
        root.style.setProperty('--border-color', '#08069');
        root.style.setProperty('--sidebar-color', '#F4ABC4');
        root.style.setProperty('--button-bg-color', '#FF1493');
        root.style.setProperty('--button-hover-color', '#FFC0CB');
        root.style.setProperty('--icon-color', '#FF007F');
        root.style.setProperty('--background-color', ' #2774ae');
        root.style.setProperty('--text-b-color', 'pink');
        root.style.setProperty('--highlight-color', '#333456');
        root.style.setProperty('--notification-color', '#FF1493');
        root.style.setProperty('--text-color', ' white');
        root.style.setProperty('--background-boxes', '#FF007F');
    };

    const changebleu = () => {
        const root = document.documentElement;
        root.style.setProperty('--border-color', ' #78b3ce');
        root.style.setProperty('--sidebar-color', ' #c9e6f0');
        root.style.setProperty('--button-bg-color', ' #69c5f0');
        root.style.setProperty('--button-hover-color', ' #649bb0');
        root.style.setProperty('--icon-color', ' #78b3ce');
        root.style.setProperty('--background-color', '#18184');
        root.style.setProperty('--text-b-color', ' #322ef7');
        root.style.setProperty('--highlight-color', '#333456');
        root.style.setProperty('--notification-color', ' #f96e2a');
        root.style.setProperty('--text-color', ' #151517');
        root.style.setProperty('--background-boxes', '#eaf4ff');
    };
        
        const [font, setFont] = useState('Arial');
        const ChangeFontc = () => {
          setFont('Cursive'); // Changer la police ici
        };
        const ChangeFont = () => {
            setFont('arial'); // Changer la police ici
          };
    
    return (
        
      
        <div className="profile-container">
        <div className="profile-side" style={{fontFamily:font}}>
              
                <h2 id="profile">{name}</h2>

                <div id="part1">
                    <img src={profileImage} alt="img" id="img2"/>
                    <h3 id="pn">{name}</h3 > 
                    <img src={img1} alt="p" id="img1"/>
                    </div>
                    <div id="user">
                    <h2 id="personal">Personal informations</h2>
                    <p id="name">{email}</p>
                    <p id="links"><a href="Login.jsx" id="ch-user">change username</a>
                    <a href="Login.jsx" id="ch-pass">change password</a></p> 
                  
                    </div>
                    <h2 id="settings">settings</h2>
                    <div id="theme">
                        <b>Theme</b>
                        <button id="but1" onClick={changepink}></button>
                        <button id="but2" onClick={changebleu}></button>
                        <button id="but3" onClick={changedarkpink} ></button>
                        <button id="but4" onClick={changedarkbleu}></button>
                        

                    </div>
                <div id="font">
               
                <b>Font</b>
                <button className="button" id="default" onClick={ChangeFont}>Default</button>
                <button className="button" id="cursive" onClick={ChangeFontc}>Cursive</button>
                </div>
                <div id="quit">
                <a href="Signup.jsx" >Log out</a>
            <button id="delete">Delete account</button>
                </div>
            </div>


            
        <aside className="sidebar" style={{fontFamily:font}}>
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
    );
};

export default Profile;