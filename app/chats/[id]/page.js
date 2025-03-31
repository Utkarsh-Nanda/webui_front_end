"use client";
import FileUpload from "@/components/FileUpload";
import Home from "../../page";

export default function Chat({ params }) {
  return (
    <>
      Hello dynamic chats {params.id}
      <FileUpload />
    </>
  );
}

// In app/chats/[id]/page.js

// This function tells Next.js which paths to generate at build time
export async function generateStaticParams() {
  // Replace this with how you get your list of known chat IDs
  // Example: Fetch from a build-time accessible source or define statically
  const chatIds = ['general', 'support', 'random'];

  return chatIds.map((id) => ({
    id: id, // The key 'id' must match the dynamic segment '[id]'
  }));
}

// Make sure your default export (the page component) is also present
export default function ChatPage({ params }) {
  // You can access the specific ID for the generated page via params.id
  return (
    <div>
      <h1>Chat Page</h1>
      <p>Displaying chat with ID: {params.id}</p>
      {/* Your chat component logic here */}
    </div>
  );
}
