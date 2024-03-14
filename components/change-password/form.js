"use client"

const Form = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const response = await fetch('/api/auth/change-password', {
            method: 'POST',
            body: JSON.stringify({
                oldPassword: formData.get("oldPassword"),
                newPassword: formData.get("newPassword"),
            })
        });

        console.log(response);
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="password" name="oldPassword" placeholder="Old Password" required />
            <input type="password" name="newPassword" placeholder="New Password" required />
            <button>Change Password</button>
        </form>
    );
};

export default Form;