import React from 'react'
import projects from '../../data/project'
const ShowProjects = () => {
    return (
        <div>
            <div className="flex justify-center mt-[40px]">
                <div className="border rounded-md p-4">
                    <h1 className="text-center text-3xl mb-4">Projects</h1>
                    <div className="flex flex-col mb-4">
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Persons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => (
                                    <tr key={project.id}>
                                        <td className="border px-4 py-2">{project.name}</td>
                                        <td className="border px-4 py-2">{project.type}</td>
                                        <td className="border px-4 py-2">
                                            {project.persons.map((person) => (
                                                <span key={person.id} className="mr-2">
                                                    {person.name}
                                                </span>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowProjects