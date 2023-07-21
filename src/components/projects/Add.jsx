import React, { useState } from 'react';
import persones from '../../data/user';
const AddProject = () => {
  

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [persons, setPersons] = useState([]);
  const [nameError, setNameError] = useState('');
  const [project , setProject] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
    project.push({name: name, type: type, persons: persons});
    // add project to database

  };

  const handleAdd = (e) => {
    e.preventDefault();
    const selectedPersonId = parseInt(e.target.value);
    const person = persones.find((person) => person.id === selectedPersonId);

    if (!persons.some((p) => p.id === selectedPersonId)) {
      setPersons([...persons, person]);
    }
  };
  const handleRemove = (id) => {
    const newPersons = persons.filter((person) => person.id !== id);
    setPersons(newPersons);
  };

  return (
    <div>
      <div className="flex justify-center mt-[40px]">
        <div className="border rounded-md p-4">
          <h1 className="text-center text-3xl mb-4">Create Project</h1>
          <form action="">
            <div className="flex flex-col mb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border rounded-md px-2 py-1"
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <p className="text-red-500">{nameError}</p>}
              <label htmlFor="type">Type</label>
              <select
                name="type"
                id="type"
                onChange={(e) => setType(e.target.value)}
                className="border rounded-md px-2 py-1"
              >
                <option value="" >Select a type</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="school">School</option>
              </select>
              <label htmlFor="persons">Persons</label>
              <select
                name="persons"
                id="persons"
                onChange={handleAdd}
                className="border rounded-md px-2 py-1"
              >
                <option value="" >Select a person</option>
                {persones.map((person) => (
                  <option key={person.id} value={person.id}>
                    {person.username}
                  </option>
                ))}
              </select>
              <div>
                {persons.length > 0 && (
                  <div>
                    <h3>Added Persons:</h3>
                    {persons.map((person) => (
                      <div key={person.id} className='flex justify-between'>
                        <p>{person.username}</p>
                        <button onClick={() => handleRemove(person.id)}>Remove</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className="border rounded-md px-2 py-1 mt-4" onClick={handleSubmit}>
                Create
              </button>
              <div>
                <p>Name: {name}</p>
                <p>Type: {type}</p>
                <p className='flex flex-wrap'> Persons: {persons.map((person) => person.username).join(', ')}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
