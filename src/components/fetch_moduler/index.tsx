import { useState, useEffect } from 'react';

const FetchData = () => {
   const [blogs, setBlogs] = useState(null);
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
       setTimeout(() => {
           fetch(' http://localhost:5000/blogs')
           .then(response => {
               if(!response.ok){
                   throw Error('Sorry, some error occurred while fetching your blogs.');
               }
               return response.json();
           })
           .then(data => {
               setBlogs(data);
               setLoading(false);
               setError(false);
           })
           .catch(err => {
               console.log(err.message);
               setError(true);
           })

       }, 4000)
   })

   return(
       <div>
          {/* {blogs && <Blogs blogs = {blogs} /> } */}
          {error && <div className='container'><span className='error'>Error connecting to the server. Connection failed.</span></div>}
       </div>
   )
}

export default FetchData;