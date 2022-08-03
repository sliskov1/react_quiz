import './Name.css'

function Name() {
    return (
        <div>
            <h1 className="header">Name</h1>
            <form className="position">
                <label>
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Name;