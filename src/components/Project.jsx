import React from 'react'
import taskbuddy from "../assets/taskbuddy.svg"

/*

https://www.figma.com/design/fORntmSN5YNf7Y5Sknib00/Geist---UI-Kit-for-Figma-(Community)?node-id=1354-7501&t=CO84Ac0kl7muRh5p-0

https://www.figma.com/design/i6ofHnybNFxlbeE22kfFrT/Designer%2FDeveloper-Portfolio-(Community)?node-id=0-1&t=bp4R0AQtrroxDjGX-0

https://www.figma.com/design/p13z2jj3AjFdAKLLScPzwm/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)?node-id=328-4105&t=JSPjd5NcHXfJKBie-0

https://www.figma.com/design/Dg3n08QbdxIJpzaHRXDMdh/Software-developer-portfolio-(Community)?node-id=0-1&t=Fj2SGkScXTthCjcd-0

*/

const Project = () => {
  return (
    <div className='project w-full flex'>
      <div className='leftside w-1/2'>
        <div className='topside'>
            <div>Logo</div>
            <div>title</div>
            <div>desc</div>
        </div>
        <div className='bottomside'>
            <a href="http://">Github</a>
            <a href="http://">Visit Site</a>
        </div>
      </div>
      <div className='rightside w-1/2'>
        <img src={taskbuddy} alt='logo' 
            className='w-[90%] object-cover'
        />
      </div>
    </div>
  )
}

export default Project
