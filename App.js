class App extends React.Component {
	state = {
		items: [
			{ id: 1, name: 'herbata', active: true },
			{ id: 2, name: 'ziemniaki', active: false },
			{ id: 3, name: 'kasza', active: false },
			{ id: 4, name: 'zupa wodna', active: true },
			{ id: 5, name: 'wrzątek', active: false },
			{ id: 6, name: 'chleb', active: false },
		],
	};

	handleChangeStatus = (id) => {


		const items = this.state.items.map( (item) => {

			if (id === item.id) {
				item.active = !item.active;
			}
			return item;
			
		});

		this.setState({
			items,
			// tutaj mamy równanie takie, że: this.state.items = items, który pochodzi z handleChangeStatus i który jest kopią tego pierwszego items, natomiast zawiera ewentualne zmiany statusu 'active' ( jest albo 'false', albo 'true')
		});
	};
	// Tworzymy sobie właśnie tutaj tą funckję, ponieważ będzie ona sterowała właściwością state, a dokładnie właściwością 'active


	render() {
		return (
			<React.Fragment>
				<Header items={this.state.items} />
				{/* w Header przekazujemy właściwości 'state.items' w propsie, któremu nadajemy nazwę 'items */}
				<ListItems
					items={this.state.items}
					changeStatus={this.handleChangeStatus}
				/>
				{/* to samo przekazujemy do  elementu ListItems co powyżej + 'funkjcę hadnleChangeStatus' w właściwości 'changeStatus'*/}
			</React.Fragment>
		);
	}
}
