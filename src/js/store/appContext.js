import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// No cambies, aquí es donde inicializamos nuestro context, por defecto va a ser null.
export const Context = React.createContext(null);

// Esta función inyecta el almacén global a cualquier view/component donde quieras usarlo, nosotros inyectaremos el contexto a layout.js, puedes verlo aquí:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
        /**
			 * ¡EDITAR ESTO!
			 * Esta función es el equivalente a "window.onLoad", sólo se ejecuta una vez en toda la vida de la aplicación.
			 * deberías hacer tus peticiones ajax o fetch api aquí. No use setState() para guardar datos en el
			 * store, en su lugar utiliza acciones, como esta:
			 *
			 * state.actions.loadSomeData(); <---- llamando a esta función desde las acciones de flux.js
			 *
		**/
		}, []);

		// El valor inicial del context ya no es null, sino el estado actual de este componente,
		// el context tendrá ahora las funciones getStore, getActions y setStore disponibles, porque fueron declaradas
		// en el estado de este componente
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
