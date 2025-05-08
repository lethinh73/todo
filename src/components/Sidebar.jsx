import "./Sidebar.css";

function Sidebar() {
  return <div className="sidebar">
    <form className="sb-form">
        <div className="sb-form-field">
            <label htmlFor="sb-name">Task Name</label>
            <input type="text" id="sb-name" name="sb-name" placeholder="Task Name" />
        </div>
        <div className="sb-form-field">
            <label htmlFor="sb-completed">Is Completed</label>
            <input type="checkbox" id="sb-completed" name="sb-completed" />
        </div>
        <div className="sb-form-field">
            <label htmlFor="sb-important">Is Important</label>
            <input type="checkbox" id="sb-important" name="sb-important" />
        </div>
    </form>
    <div className="sb-footer">
        <button className="sb-save-btn">Save</button>
        <button className="sb-cancel-btn">Cancel</button>
    </div>
    </div>;
}

export default Sidebar;
