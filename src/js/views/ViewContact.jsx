import React, {useContext, useEffect} from "react";  //1. Import hook useContext (so we are able to import useParams)
import { Link, useParams }  from "react-router-dom"; //import Link
import { Context } from "../store/appContext.js"; //2. Import Context
import { Spinner } from "../component/Spinner.jsx";

export const ViewContact = () =>{
    const  {store, actions } = useContext (Context); //3. destructuring store & actions
    const params = useParams(); // declare params using useParams
    console.log(params); //in my url if i put /contact/99899707017 being the nr the :contactId, I can see in the console that it's taking it
       

    useEffect(()=>{
        async function fetchData() {
            if (params.contactId) {
            const response = await actions.getOneContact(params.contactId);
            console.log(store.newUser); 
        }}
          fetchData();
    }, [])

    
    const urlImg = "https://m-scs.com/public/storage/users/1657129981.jpeg";
    const handleError = (event) =>{
        event.target.src = "https://img.freepik.com/free-photo/user-front-side-with-white-background_187299-40007.jpg?w=740&t=st=1700666482~exp=1700667082~hmac=a0cf24972e737bfad23258f77ed21fc8798dd4f0ce93f2f19253281da1dff8ad"
    }
    
    return(
        <div className="container">
        <h1 className="text-center mt-3" >Contact details</h1> 
            <div className="card m-auto mt-5 d-flex flex-row bg-light text-dark">
            <img src={urlImg} onError={handleError} className="card-img border border-light img-fluid" style={{ width: "25rem" }} alt="contact image" />
                    <div className="card-body d-flex flex-column">
                        {!store.newUser ? 
                            <Spinner />
                        :
                        
                        <div className="flex-grow-1 ms-5 mt-5">
                            <h3 className="card-title text-info">{store.newUser.full_name}</h3>
                            <p><strong> Email: </strong> {store.newUser.email}</p>
                            <p><strong> Phone: </strong> {store.newUser.phone}</p>
                            <p><strong> Address: </strong> {store.newUser.address}</p>
                        </div>
                        }

                        <Link to="/contact" className="btn btn-outline-info ">
                                Go back
                        </Link> 
                    </div>
             </div>
        </div>
    )
}