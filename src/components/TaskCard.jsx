import React from 'react'
import "./TaskCard.css"
import deleteIcon from '../assets/delete.png'
import Tag from './Tag'

const TaskCard = () => {
	return (
		<article className='task_card'>
			<p className='task_card_text'>This is a simple text</p>
			<div className="task_card_bottom_line">
				<div className='task_card_tags'>
					
				<Tag tagName="HTML"/>
				<Tag tagName="CSS"/>
				<Tag tagName="JavaScript"/>
				<Tag tagName="React"/>
				</div>
				<div className='task_delete'>
					<img src={deleteIcon} alt="" className='task_card_delete_icon'/>
				</div>
			</div>
		</article>
	)
}

export default TaskCard