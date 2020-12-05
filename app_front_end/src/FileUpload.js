import React, {useState} from 'react'
import axios from 'axios'

function FileUpload() {
    const [files, setFiles] = useState({})
    const [filesName, setFilesName] = useState([])
    const [urls, setUrls] = useState([])

    // console.log(Object.keys(files))
    // console.log(Object.keys(files).map(key => (
    //     files[key])))

    let fileHandler = e => {
        setFiles(e.target.files)
        setFilesName(Object.keys(e.target.files).map(key => (
            `${Date.now()}-${e.target.files[key].name}`
        )))
    }


    let deleteHandler = e => {
        e.preventDefault()
        axios.delete("http://localhost:8080/api/upload/1234")
    }

    let upload = e => {
        e.preventDefault()
        let formData = new FormData()
        // formData.append("files", Object.keys(files).map(key => (
        //     files[key]
        // )))

        for(const key of Object.keys(files)) {
            formData.append('files', files[key])
        }
        
        axios.post("http://localhost:8080/api/upload", formData
        
            // ,{
            //     onUploadProgress: progressEvent => {
            //             console.log(Math.round(progressEvent.loaded / progressEvent.total))
            //         }
            // }
            )

            .then(res => {
    
                setUrls(res.data.data)

            })
            .catch(err => {
                console.log(err)
            })
        }

    return (
        <div>
            <h1>Hello File Upload</h1>
            <input type="file" multiple onChange={fileHandler}/>
            <button onClick={upload}>Upload</button>
            <button onClick={deleteHandler}>Delete</button>

            <div className="showFile" style={{height: 300, width: 300}}>
                
               {urls.map(url => (
                    <img key={url.id} style={{height: 300, width: 300}} src={url.url} alt=""/>
               ))}
            </div>
            <div className="">
                {/* <img src={`https://firebasestorage.googleapis.com/v0/b/personal-project-ecc9c.appspot.com/o/myimg-2.jpg?alt=media`} alt=""/> */}
            </div>
        </div>
    )
}

export default FileUpload
