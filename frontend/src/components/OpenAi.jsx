import { useState } from "react";
import axios from 'axios';

const OpenAi = () => {
    const [prompt, setPrompt] = useState('');
    const [image_url, setImage_url] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imgDescription, setimgDescription] = useState(null);

    const requestImage = async (e) => { 
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post("http://localhost:8080/openai", {
                prompt
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if(!data.success){
                throw new Error('Error al generar la imagen');
            }
            setImage_url(data.data);
            setimgDescription(imgDescription);
        } 
        catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false)
        }
    };

  return (
    <div className="container mx-auto max-w-5xl m-10 p-4">
        <form onSubmit={requestImage}>
            <div className="flex flex-col text-center justify-content align-center">
                <label className="text-xl font-bold">
                    Dime que es lo que quieres crear, lo hare por ti: 
                </label>
                <textarea 
                    className="flex border-2 border-gray-300 p-1 m-2 w-1/2 mx-auto"
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
            <input
                className="bg-slate-500 w-1/2 mx-auto text-white m-4 rounded" 
                type="submit"
                value={loading ? "Generando imagen..." : "Generar imagen"}
            />
            </div>
        </form>
        {
            image_url && (
                <div className="mt-4">
                    <img 
                    className="border mx-auto" 
                    src={image_url}
                    alt="Imagen generada por OpenAi Inteligencia Artificial"
                    />
                </div>
            )
        }
    </div>
  )
}

export default OpenAi;