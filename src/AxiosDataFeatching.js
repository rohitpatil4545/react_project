// import React, { useEffect, useState } from 'react' 
// import axios from 'axios' ;
// import { CircularProgress, Typography } from '@mui/material';
// const AxiosDataFeatching = () => {  
//     const [data,setdata]=useState([]);
//     const [isloading,setloading]=useState(true);
//     useEffect(()=>{
//         axios 
//         .get('https://jsonplaceholder.typicode.com/posts')
//         .then((response)=>{
//              setdata(response.data)
//              setloading(false)
//         }) 
//         .catch((error)=>{
//             console.error("Error fetching data", error) 
//             setloading(false)
//         })
//     })
//   return (
//     <div>
//         <Typography>Fetched data from API using Axios</Typography> 
//         {isloading?(<CircularProgress/>):(<ul>
//             {data.map((item)=>
//              <li key={item.id}>{item.title}</li>
//             )}
//         </ul>)}
//     </div>
//   )
// }

// export default AxiosDataFeatching 


import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Typography, Box } from "@mui/material";

const AxiosDataFetching = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch data");
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Typography variant="h5">Fetched Data from API using Axios</Typography>
            {isLoading ? (
                <CircularProgress />
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                <Box sx={{ padding: 2, marginTop: 2 }}>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </Box>
            )}
        </div>
    );
};

export default AxiosDataFetching;
