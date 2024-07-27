"use client"
import { useRouter } from "next/navigation"

const DeletePostButton = ({ postId }) => {
    const router = useRouter();

    async function handleClick() {
        try {
            const res = await fetch(`/api/post/${postId}`, {
                method: 'DELETE',
            });

            if (!res.ok) {
                throw new Error('Error deleting the post');
            }

            // Refresh the page to reflect the deleted post
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button onClick={handleClick}>Delete Post</button>
    );
}

export default DeletePostButton;
