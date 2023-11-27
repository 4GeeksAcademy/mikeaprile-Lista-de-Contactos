//Importacion de React y Router.
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrolltotop.js";
import { Home } from "./views/Home.jsx";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { AddContact } from "./views/AddContact.jsx";
import { UpdateContact } from "./views/UpdateContact.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/add-contact" element={<AddContact />} />
						<Route path="/update-contact/:idContact" element={<UpdateContact />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1 className="text-center m-2">Not found! </h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);