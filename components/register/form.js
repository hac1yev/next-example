"use client"

const Form = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        await fetch("/api/auth/register", {
            method: 'POST',
            body: JSON.stringify({
                username: formData.get("username"),
                password: formData.get("password")
            }),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button>Register</button>
        </form>
    );
};

export default Form;