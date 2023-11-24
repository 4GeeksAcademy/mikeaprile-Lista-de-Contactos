//Importacion de React y Router.
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importacion de AppContext.
import injectContext from "./store/appContext.js";

//Importacion de Views.
import { Home } from "./views/Home.jsx";
import { Single } from "./views/single.js";
import { AddContact } from "./views/AddContact.jsx";

//Importacion de Componentes.
import { Footer } from "./component/Footer.jsx";
import ScrollToTop from "./component/scrolltotop.js";


//Lista de Contactos.
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/create-contact" element={<AddContact />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
