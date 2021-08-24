class ImageServices{


    constructor(){
        this.baseURL = 'https://source.unsplash.com/';
        this.axios = axios.create({
            baseURL: this.baseURL
        });
    }


    async getRandomImage(){
        try{
            const imageResponse = await this.axios.get('random');
            console.log(imageResponse.request.responseURL);
            return imageResponse.request.responseURL;

        }catch(e){
            console.log(e);
        }
    }
}
