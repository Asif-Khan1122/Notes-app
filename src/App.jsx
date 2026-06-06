import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setTitle("");
    setDetails("");
  };

  const deleteTask = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className='h-screen flex flex-col lg:flex-row bg-black text-white'>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className='flex lg:w-1/2 flex-col gap-4 items-start p-10'
      >
        <h1 className='text-4xl font-bold'>Add Notes</h1>
        <input
          type='text'
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder='Write Details'
          className='px-5 w-full h-32 font-medium border-2 outline-none rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className='bg-white active:scale-95 w-full text-black rounded px-5 py-2'>
          Add Notes
        </button>
      </form>
      <div className='lg:border-l-2 items-start justify-start lg:w-1/2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-full'>
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className={
                  "h-52 w-40 rounded-xl relative text-black py-6 px-4 bg-cover bg-center bg-[url('https://i.pinimg.com/736x/2f/83/66/2f83661884371196f22a3682ae22b7c7.jpg')]"
                }
              >
                <AiOutlineClose
                  className='absolute top-3 right-3 text-black bg-red-500 rounded-full p-1 text-xl cursor-pointer'
                  onClick={() => deleteTask(idx)}
                />
                <h3 className='leading-tight text-xl font-bold'>
                  {elem.title}
                </h3>
                <p className='leading-tight mt-4 font-medium text-gray-500'>
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
