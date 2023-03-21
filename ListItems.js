const ListItems = (props) => {
	const items = props.items.map((item) => (
		<Item
			key={item.id}
			id={item.id}
			name={item.name}
			active={item.active}
			changeStatus={props.changeStatus}
			// w powyższej linijce przekazujemy dalej - do elementu 'Item' - funkcję 'handleChangeSatus',  znów w właściwości 'changeStatus
		/>
	));
	return (
		<div className='list'>
			<h1>Twoje zamówienie</h1>
			<ul>{items}</ul>
		</div>
	);
};
