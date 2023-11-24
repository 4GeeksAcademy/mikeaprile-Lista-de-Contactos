const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Contacts: []
		},
		actions: {
			
		},

		getContacts: async () => {
			try {
				const response = await fetch(
					"https://playground.4geeks.com/apis/fake/contact/agenda/SuperMike"
				);
				if (response.ok) {
					const data = await response.json();
					let store = getStore();
					setStore({ ...store, Contacts: data });
					console.log(store.Contacts)
				}
			} catch (error) {
				console.error("Error fetching :", error);
			}
		},
		}

	};


export default getState;
