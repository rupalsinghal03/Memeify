import React, { useEffect, useState } from 'react'
import "../styles/home.css"
import axios from 'axios'
function Home() {
    const [meme, setMemes] = useState([])
    useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
            .then((resp) => {
                console.log(resp.data.data.memes, "Fetched Memes");
                setMemes(resp.data.data.memes)
            })
            .catch((err) => console.error("Error fetching memes:", err)
            )
    }, [])
    // Function to handle image download directly
    const handleDownload = async (url, filename) => {
        try {
            const response = await fetch(url); // Fetch the image
            const blob = await response.blob(); // Convert to blob
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob); // Create an object URL for the blob
            link.download = filename; // Set the file name
            document.body.appendChild(link); // Append link to the body
            link.click(); // Trigger the download
            document.body.removeChild(link); // Remove the link from the DOM
        } catch (error) {
            console.error("Error downloading the file:", error);
        }
    };
    return (
        <div>
            <h4 className='mb-4 pb-2 m-1'>Here we go 🚀</h4>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap" style={{ gap: "1rem" }}>
                        {meme?.map((data, index) => (
                            <div className="card p-2" style={{ width: "18rem", height: "fit-content" }} key={index}>
                                <img src={data.url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title mb-3">{data.name}</h5>
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => handleDownload(data.url, `meme-${index}.jpg`)}
                                    >
                                        Download Meme
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home