export default function Post({ params }) {
    // In a real application, you would fetch the post data based on the ID
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Post {params.id}</h1>
        <p>This is where you would display the full content of post {params.id}.</p>
      </div>
    )
  }