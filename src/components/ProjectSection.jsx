import React from 'react'
import Project from './Project'

const ProjectSection = () => {
  return (
    <div className='projectsec flex flex-col gap-5 py-5'>
      <div className='heading text-4xl text-light-skillscardtext dark:text-dark-skillscardtext font-bold pt-2'>
        Projects
      </div>
      <div className='flex flex-col gap-8'>
        <Project />
      </div>
    </div>
  )
}

export default ProjectSection
