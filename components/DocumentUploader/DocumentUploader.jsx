// DocumentUploader.jsx
import { useState } from "react"
import { useDropzone } from "react-dropzone"

const DocumentUploader = () => {
  const [files, setFiles] = useState([])

  const onDrop = (acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles])
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
  })

  return (
    <div>
      <h2>Upload Project Documents</h2>
      <div
        {...getRootProps()}
        style={{ border: "2px dashed #ccc", padding: "10px" }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop some files here, or click to select files</p>
      </div>
      <ul>
        {files.map((file, idx) => (
          <li key={idx}>
            {file.name}
            <button onClick={() => alert(`Downloading ${file.name}`)}>
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DocumentUploader
