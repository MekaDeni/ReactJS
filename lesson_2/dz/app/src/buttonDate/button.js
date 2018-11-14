export const buttonRend = () => {
	const button = document.createElement('button');
	button.innerHTML = "ДАТА";
	button.onclick = () => {
		const date = new Date();
		alert("Год - " + date.getFullYear()+"\nМесяц - " + date.getMonth()+"\nДень - " + date.getDate());
	}
	return button;
}