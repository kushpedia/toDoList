import React from 'react'
import "./TaskColumn.css"
import TaskCard from './TaskCard'


const TaskColumn = ({title,icon}) => {
	return (
		<section className='task_column'>
			<h1 className='task_column_heading'>
				<img src={icon} alt="" className='task_column_icon' />
			{title}
			</h1>
			<TaskCard/>
		</section>
	)
}

export default TaskColumn