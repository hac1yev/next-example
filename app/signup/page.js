import Form from "@/components/register/form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
    const session = await getServerSession();
    if(session){
        redirect('/');
    };

    return (
        <Form />
    );
};

export default SignUpPage;