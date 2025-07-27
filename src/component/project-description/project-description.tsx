import React from "react";
import type { IProjectDescription } from "./project-descrption.type";

const ProjectDescription: React.FC<IProjectDescription> = ({
  projectName,
  projectDate,
  projectSummary,
  projectMembers = [],
}) => {
  return (
    <section className="max-w-xl min-w-full mx-auto p-4 bg-white rounded shadow-md">
      <header className="text-3xl font-bold mb-4">
        {projectName ?? "Untitled Project"}
      </header>

      <div className="mb-4 text-gray-600">
        <p>
          <strong>Started:</strong> {projectDate.projectStartedDate}
        </p>
        <p>
          <strong>Finished:</strong> {projectDate.projectFinishDate}
        </p>
      </div>

      <article className="mb-6 text-gray-800">{projectSummary}</article>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Project Members</h2>
        {projectMembers.length === 0 ? (
          <p className="text-gray-500">No members listed.</p>
        ) : (
          <ul className="space-y-4">
            {projectMembers.map(
              ({ memberName, memberRole, memberHandles }, i) => (
                <li key={i} className="border p-3 rounded bg-gray-50">
                  <h3 className="text-xl font-medium">{memberName}</h3>
                  <p className="italic text-sm text-gray-600">{memberRole}</p>

                  {memberHandles && (
                    <ul className="mt-2 space-y-1 text-sm text-blue-600">
                      {Object.entries(memberHandles).map(
                        ([handleType, handleValue]) =>
                          handleValue ? (
                            <li key={handleType}>
                              <strong>{handleType}:</strong> {handleValue}
                            </li>
                          ) : null
                      )}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>
        )}
      </section>
    </section>
  );
};

export default ProjectDescription;
