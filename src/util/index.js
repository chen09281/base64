export default {
    getBase64: file => (
        new Promise(resolve => {
            let reader = new FileReader();

            reader.onload = function (){
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        })
    )
}