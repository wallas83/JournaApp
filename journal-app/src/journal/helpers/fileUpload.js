export const fileUpload = async (file) => {

    if (!file) throw new Error('No se tiene ningun archivo a subir ');
    const cloudUrl = 'https://api.cloudinary.com/v1_1/wallas/upload';
    const formData = new FormData();
    // aca entra los pares de valores que entran en el url de cloudinary
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file)

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        // console.log(resp);

        if (!resp.ok) throw new Error('No se pudo subir la imagen')
        const cloudResp = await resp.json();
        // console.log(cloudResp);
        return cloudResp.secure_url;
    } catch (error) {
        throw new Error(error.message)
    }
}