import React from 'react';
import './Help.scss';

function Help() {
    return (
        <div className='help_container'>
           <h2>How to use the app?</h2>
           <p>Simply follow the instructions below to send requests to your favorite api and get the response.</p>
           <h3>Send a request:</h3>
           <ul>
               <li>Open the home page</li>
               <li>Type the endpoint in the text input field at the top of the page</li>
               <li>Choose the method you want from the methods button Get, Post, Put and Delete</li>
               <li>Fill the body in the textarea if the request needs it </li>
               <li>Click on Go button and when the app receive the response, it will be shown in the right side of page with the headers</li>
           </ul>
           <h3>Review previous requests</h3>
           <ul>
               <li>You can see a list of previous requests that you have made before in the right side of the home page</li>
               <li>Click on the method name in this list to get the data of that request filled in the form if you want to re run the request</li>
               <li>You can also go to History page in the navbar and check the previous requests from there too</li>
               <li>Click on the method name to see full information about the request on the right side of the page</li>
               <li>There will be a re-run button, you can click on it to go back to the home page with the form filled with the request data</li>
           </ul>
        </div>
    )
}

export default Help;
