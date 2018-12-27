import React, { Component } from "react";
import './UsersComment.css';

class UsersComment extends Component {

	usersComment = [
		{
			name:'Deni',
			comment:'Вроде норм делаю',
			id: 'DENI'
		},
		{
			name:'Alex',
			comment:'Вроде норм делаешь',
			id: 'ALEX'
		},
		{
			name:'Lena',
			comment:'Вроде норм делаете',
			id: 'LENA'
		}
	];

	render() {
		// берем айди из prop-ов роута
		const userId = this.props.match.params.commentName;
		return(
			<div className='divComment'>
				{/*берем массив usersComment*/}
				{this.usersComment.map((usersComment, index) => {
					//запускаем цикл перебора массива usersComment в котором
					for(const i in usersComment) {
						//сравниваем айди из prop-ов роута и айдишники в массиве usersComment
						if(usersComment.id === userId) {
							//если есть сходство рендарим блок с именем и коментом юзера
							return (
								<div key={index} className='comment'>
									<h3>{usersComment.name}</h3>
									<p>{usersComment.comment}</p>
								</div>
							);
						}
					}
				})}
			</div>
		);
	}
}

export default UsersComment;