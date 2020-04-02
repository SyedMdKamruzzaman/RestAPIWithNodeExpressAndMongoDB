import {addNewContact,
        getContacts,
        getContactsWithId,
        updateContact,
        deleteContact
} from '../controllers/crmController';

const routes = (app) =>{
    app.route('/contact')
       .get((req,res,next)=>{
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        },getContacts)


        //Post endpoint

       .post(addNewContact);
          
          
    app.route('/contact/:contactId')
    //get a specific contact
       .get(getContactsWithId)

       //updating a specific contact
       .put(updateContact)

       //deleting a specific contact
       .delete(deleteContact)  
}


export default routes;