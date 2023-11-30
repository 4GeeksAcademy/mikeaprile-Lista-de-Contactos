const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			baseUrl: 'https://playground.4geeks.com/apis/fake/contact/',
			agenda: 'MikeAprile',
			user:[],
			newUser: {}
		},

		actions: {
	
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getContacts: async () =>{
				const url = getStore().baseUrl + 'agenda/' + getStore().agenda;
				const options = {
					method: 'GET',
				};
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					console.log(data);
					setStore({user: data});
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},

			getOneContact: async (id) => {
				const url = getStore().baseUrl + id;
				const options = {
					method: "GET"
				};
				const response = await fetch (url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({ newUser: data});

				} else 
					 console.log("Error:", response.status, response.statusText);
			},


			AddContact: async(newContact) =>{
				const url = getStore().baseUrl;
				const options = {
					method: "POST",
            		headers: {
                		"Content-Type": "application/json",
            		},
            		body: JSON.stringify(newContact)
				}
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					getActions().getContacts();
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			
			EditContact: async (contactId, updatedContact) =>{
				const url = getStore().baseUrl + contactId;
				const options = {
					method: 'PUT',
            		headers: {
                		"Content-Type": "application/json",
            		},
            		body: JSON.stringify(updatedContact)
				}
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					getActions().getContacts();
					console.log(data)
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
		
			deleteAgenda: async() =>{
				const url = getStore().baseUrl + 'agenda/' + getStore().agenda;
				console.log(url);
        		const options = {
            		method: 'DELETE',
        		};
        		const response = await fetch(url, options);
				console.log(response);
        		if (response.ok){
            		//const data = await response.json();
					//getActions().getContacts();
					setStore({user: []})
				} else {
           			 console.log('Error: ', response.status, response.statusText)
        		}
				
			},
			
			deleteContact: async(id) =>{
				const url = getStore().baseUrl + id;
        		const options = {
            		method: "DELETE"
        		};
        		const response = await fetch(url, options);
        		if (response.ok){
            		const data = await response.json();
            		console.log(data);
					getActions().getContacts();
				} else {
           			 return ('Error: ', response.status, response.statusText)
        		}
			}

		}
	};
};

export default getState;