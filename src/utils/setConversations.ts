// getAllConversations.ts
import { loggedInUser } from "./getUser";

export default async function setConversation(user:User | undefined) {
    const response = await fetch('/api/user/conversation');
    const data = await response.json();
    const allConversations: string[] = [];

    data.result.forEach((conversation: { participants: string; _id: string }) => {
        const participants = conversation.participants;
        if (user && participants.includes(user.userId)) {
        if (!allConversations.includes(conversation._id)) {
            allConversations.push(conversation._id);
        }
        }
    });

//   console.log("All conversations:", allConversations); // Log all conversations
  return allConversations; // Return the conversations
}
