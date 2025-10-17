import Editor from '../components/Editor';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Editor />
      </div>
    </main>
  );
}
