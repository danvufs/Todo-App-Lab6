//App.js
import { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, onSnapshot, doc, getDocs } from 'firebase/firestore';
import { db } from './database/config';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import Form from './components/Form/Form';
import Help from './components/Help/Help';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      const fetchedTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(fetchedTasks);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleClearTasks = async () => {
    const taskDocs = await getDocs(collection(db, 'tasks'));
    taskDocs.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  };


  const handleStatusChange = async (id) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    const taskRef = doc(db, 'tasks', id);
    await updateDoc(taskRef, { done: !taskToUpdate.done });
  };


  const handleTaskRemove = async (id) => {
    const taskRef = doc(db, 'tasks', id);
    await deleteDoc(taskRef);
  };

  const handleAddTask = async (description, status) => {
    await addDoc(collection(db, 'tasks'), {
      description: description,
      done: status,
    });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Tasks
              tasks={tasks}
              isLoading={isLoading}
              onStatusChange={handleStatusChange}
              onTaskRemove={handleTaskRemove}
              onClearTasks={handleClearTasks}
            />
          }
        />
        <Route path="/add" element={<Form onAddTask={handleAddTask} />} />
        <Route path="/" element={<Tasks tasks={tasks} onStatusChange={handleStatusChange} onTaskRemove={handleTaskRemove} onClearTasks={handleClearTasks} />} />
        <Route path="/add" element={<Form onAddTask={handleAddTask} />} />
        <Route path="/help" element={<Help />} >
          <Route path="add" element={<AddHelp />} />
          <Route path="remove" element={<RemoveHelp />} />
          <Route path="change" element={<ChangeHelp />} />
          <Route path="" element={<DefaultHelp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function AddHelp() {
  return (
    <main>
    </main>
  );
}

function RemoveHelp() {
  return (
    <main>
    </main>
  );
}

function ChangeHelp() {
  return (
    <main>
    </main>
  );
}

function DefaultHelp() {
  return (
    <main>
    </main>
  );
}

export default App;