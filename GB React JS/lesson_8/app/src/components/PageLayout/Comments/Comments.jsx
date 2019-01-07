import React, { Component } from "react";
// импортируем функцию коннекта компоненты с хранилищем
// необходимо помнить, что не нужно подключать абсолютно все компоненты к редаксу
// в глупых компонентах отвечающих только для простой рендер лучше избежать его подключения
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Comments.css";

// Импортируются необходимые экшены и селекторы из редьюсера
import { 
	getCommentsList, 
	getCommentsLoading,
	fetchComments
} from '../../../redux/modules/comments.js'

import Comment from './Comment.jsx'

class Comments extends Component {

	componentDidMount(){
		//обязателен вызов через this.props.
		this.props.fetchComments();
	}
	
	render() {
	    // получаем комментарии из props
		const { comments } = this.props;
		console.log(this.props)
		return (
			<div className='commentsBlog'>
				<h2> Коменатрии </h2>
				{comments.length > 0
					? comments.map(comments => (
						<Comment
							key = {comments.id}
							name = {comments.name}
							comment = {comments.text}
						/>
					))
					: <p>Нет комментариев</p>}
			</div>
		);
	}
}

// Отвечает за подключение состояний в компоненту
// принимает два аргумента state и ownProps
// в state приходит все данные из хранилища redux
// в ownProps можно получить собственные пропы компоненты
// в некоторых случаях их необходимо сравнить или 
// обработать чтобы получить небходимый параметр
// Возвращает объект и вызывается каждый раз при обновлении хранилища
const mapStateToProps = (state, ownProps) => {
	return {
		// с помощью селектора получаем данные из хранилища
		comments: getCommentsList(state),
		loading: getCommentsLoading(state)
	};
};

// Позволяет получить доступ к функции dispatch
// может быть объектом или функцией
// В случае если это функция, то первым аргументом мы получаем функцию dispatch
// в этом случае мы можем прикрепить ее через bindActionCreator из пакета redux
// к нашим экшенам. На выходы должен возвращать объект.
// В данном случае это просто объект и redux сам передает в каждый из экшенов dispatch 
const mapDispatchToProps = {
	fetchComments
}

// С помощью connect подключаем компоненту к хранилищу
// Первым аргументов передается mapStateToProps
// вторым mapDispatchToProps
// Возвращает функцию в которую мы передаем нашу компоненту во вторых скобках
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Comments);